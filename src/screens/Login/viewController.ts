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

const useLoginViewController = () => {
  const navigation = useNavigation();

  const [hide, setHide] = useState(true);
  const [isLogging, setisLogging] = useState(false);

  const { newLogin, loginGoogleCredential } = useLoginViewModel();

  const { control, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

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
    useLogginWithGoogle
  }
}

export default useLoginViewController;