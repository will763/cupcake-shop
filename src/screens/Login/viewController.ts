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

const useLoginViewController = () => {
  const navigation = useNavigation();

  const { newLogin } = useLoginViewModel();

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
  }, [errors])

  const [hide, setHide] = useState(true);
  const [isLogging, setisLogging] = useState(false);

  function toSignup() {
    navigation.navigate('signup');
  }

  function onSubmit({ email, password }: FormValues) {
    setisLogging(true);

    newLogin(email, password)
      .then(() => {
        reset();
        LoginSuccess();
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
    isLogging
  }
}

export default useLoginViewController;