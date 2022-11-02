import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FormValues } from "./types";
import useLoginViewModel from "./viewModels";
import LoginSuccess from "components/LoginSuccess";
import { handleErrors, triggerError } from "components/LoginError";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthSessionResult } from "expo-auth-session";
import { Alert } from "react-native";

const useLoginViewController = () => {
  const navigation = useNavigation();

  const [hide, setHide] = useState(true);
  const [isLogging, setisLogging] = useState(false);

  const { newLogin, loginGoogleCredential, updatePassword } = useLoginViewModel();

  const { control, handleSubmit, formState: { errors }, watch, clearErrors, reset } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

  const { email } = watch();

  useFocusEffect(
    React.useCallback(() => {
      const getData = () => {
        clearErrors();
        reset();
      }
      getData();
    }, [])
  );

  useEffect(() => {
    errors && handleErrors(errors);
  }, [errors]);

  function useLogginWithGoogle(response: AuthSessionResult | null) {
    useEffect(() => {
      if (response?.type === "success") {
        setisLogging(true);
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        loginGoogleCredential(credential)
          .then(() => {
            LoginSuccess();
            navigation.navigate('home');
          })
          .catch(({ message }) => triggerError(message))
          .finally(() => setisLogging(false));

      }
    }, [response]);
  }


  function toSignup() {
    navigation.navigate('signup');
  }

  function resetPassword() {
    updatePassword(email)
      .then(() => {
        Alert.alert('An email has been sent to you, please check your inbox.')
        reset({ email: '' })
      })
      .catch(({ message }) => { triggerError(message) });
  }

  function onSubmit({ email, password }: FormValues) {
    setisLogging(true);

    newLogin(email, password)
      .then(() => {
        reset();
        LoginSuccess();
        navigation.navigate('home');
      })
      .catch(({ message }) => triggerError(message))
      .finally(() => setisLogging(false));

  }

  const submitForm = handleSubmit(onSubmit);

  return {
    hide,
    setHide,
    toSignup,
    submitForm,
    control,
    isLogging,
    useLogginWithGoogle,
    resetPassword
  }
}

export default useLoginViewController;