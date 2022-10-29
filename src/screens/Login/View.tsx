import { 
  Button,
  Container,
  ContainerContent, 
  ForgoutPassword,
  Form,Icon,
  Input,
  InputContainer,
  LoginSocial,
  SignupContent,
  SignupSpanText,
  SignupText,
  TextButton,
  TextLoginSocial,
  TextMissing 
} from './styles';

import { 
  KeyboardAvoidingView, 
  ScrollView, 
  TouchableOpacity
} from 'react-native';

import Logo from 'components/Logo'      
import useLoginViewController from './viewController';
import { Controller } from 'react-hook-form';

export default function Login() {
  
  const { 
    hide, 
    setHide, 
    toSignup,  
    control,
    submitForm,
    isLogging
  } = useLoginViewController();


  return (
    <Container >
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={10} 
     >
     <ScrollView>
      <ContainerContent>
      <Logo />
      <Form>
        <Controller 
         control={control}
         name='email'
         render={({ field: { onChange, value } }) => (
          <InputContainer>
           <Icon name="user-alt" size={24} />
           <Input 
            keyboardType = "email-address"
            placeholder={'Email'}  
            onChangeText={onChange} 
            value={value}
           />
          </InputContainer>
         )}
        />
        <Controller 
         control={control}
         name='password'
         render={({ field: { onChange, value } }) => (
          <InputContainer>
           <Icon name="lock" size={24} />
           <Input 
            placeholder={'Password'} 
            secureTextEntry={hide} 
            onChangeText={onChange}
            value={value} 
           />
           <TouchableOpacity onPress={()=> setHide(!hide)} >
             { hide ? <Icon name="eye-slash" size={18} /> 
              : <Icon name="eye" size={18} /> }
           </TouchableOpacity>
          </InputContainer> 
         )}
        />
        <Button onPress={submitForm} disabled={isLogging} >
          <TextButton>Login</TextButton>
        </Button>
        <ForgoutPassword>
          <TextMissing>Forgot password?</TextMissing>
        </ForgoutPassword>
      </Form>
      <LoginSocial>
        <TextLoginSocial>Login with Google</TextLoginSocial>
      </LoginSocial>
      <SignupContent>
        <SignupText>Don't have an account?</SignupText>
        <TouchableOpacity>
          <SignupSpanText onPress={toSignup}>
           Register
          </SignupSpanText>
        </TouchableOpacity>
      </SignupContent>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}