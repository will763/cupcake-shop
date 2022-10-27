import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import useSignupViewModel from "./viewModels";

const useSignupViewController = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const { registerUsername, createNewUser, getRegisteredUsers } = useSignupViewModel();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [matchPassword, setMatchPassword] = useState(false);
    const [showIconPassword, setShowIconPassword] = useState(false);
    const [showIconUsername, setShowIconUsername] = useState(false)

    const [invalidUsername, setInvalidUsername] = useState<string[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }, [])
    );

    useEffect(() => {

        if (!password || !confirmPassword) {
            setShowIconPassword(false);
            return;
        }

        if (password && confirmPassword) {
            setShowIconPassword(true);
            password === confirmPassword ? setMatchPassword(true) : setMatchPassword(false);
        }

    }, [password, confirmPassword])

    useEffect(() => {
        if (username.length === 0) {
            setShowIconUsername(false);
        } else {
            setShowIconUsername(true);
        }
    }, [username])

    useEffect(() => {
        const getData = async () => {
            const usernames = await getRegisteredUsers();
            setInvalidUsername(usernames)
        }

        if (isFocused) {
            getData();
        }

    }, [isFocused])

    function errorToFields() {

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            signupError('empty fields');
            return true;
        }

        if (password !== confirmPassword) {
            signupError('wrong passwords');
            return true;
        }

        if (invalidUsername.includes(username)) {
            signupError('invalid username');
            return true;
        }
    }

    function signupError(message: string) {

        const signupErrorTypes = {
            "Firebase: Error (auth/invalid-email).": 'invalid email',
            "Firebase: Password should be at least 6 characters (auth/weak-password).": 'Password should be at least 6 characters',
            "Firebase: Error (auth/email-already-in-use).": 'Email already in use',
            "empty fields": 'fill in all fields',
            "wrong passwords": 'passwords must be the same',
            "invalid username": 'username already in use'
        }

        type ObjectKey = keyof typeof signupErrorTypes;

        showMessage({
            message: "Signup Error",
            description: signupErrorTypes[message as ObjectKey] ?? 'something went wrog',
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 5000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
        });
    }

    function toLogin() {
        navigation.navigate('login');
    }

    function signupSuccess() {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        showMessage({
            message: "Successfully Registered",
            type: "success",
            titleStyle: { fontSize: 18 },
            duration: 1700
        });

        const id = setTimeout(() => {
            navigation.navigate('home');
        }, 2000);

        return () => clearTimeout(id);
    }

    async function handleSignup() {

        if (errorToFields()) {
            return;
        }

        await createNewUser(email, password)
            .then(async () => {
                await registerUsername(username)
                    .then(signupSuccess())
                    .catch(({ message }) => signupError(message));
            }).catch((error) => signupError(error.message));

    }

    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        matchPassword,
        showIconPassword,
        showIconUsername,
        invalidUsername,
        toLogin,
        handleSignup
    }

}

export default useSignupViewController;