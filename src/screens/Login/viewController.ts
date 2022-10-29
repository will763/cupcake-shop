import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FormValues } from "./types";
import useLoginViewModel from "./viewModels";
import LoginSuccess from "components/LoginSuccess";
import { handleErrors, triggerError } from "components/LoginError";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { schema } from "./validation";

const useLoginViewController = () => {
  const navigation = useNavigation();

  const { newLogin } = useLoginViewModel();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    errors && handleErrors(errors)
  }, [errors])

  const [hide, setHide] = useState(true);

  function toSignup() {
    navigation.navigate('signup');
  }

  function onSubmit({ email, password }: FormValues) {
    newLogin(email, password)
      .then(() => {
        LoginSuccess();
      })
      .catch(({ message }) => triggerError(message));

  }

  const submitForm = handleSubmit(onSubmit);

  return {
    hide,
    setHide,
    toSignup,
    submitForm,
    control
  }
}

export default useLoginViewController;