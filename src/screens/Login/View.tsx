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

export default function Login() {
  
  const { 
    hide, 
    setEmail, 
    setHide, 
    setPassword, 
    toSignup,  
    login 
  } = useLoginViewController();

  return (
    <Container >
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={30} 
     >
     <ScrollView>
      <ContainerContent>
      <Logo />
      <Form>
        <InputContainer>
          <Icon name="user-alt" size={24} />
          <Input 
            placeholder={'E-mail'}  
            onChangeText={(email:string) => setEmail(email)} 
          />
        </InputContainer>

        <InputContainer>
          <Icon name="lock" size={24} />
          <Input 
           placeholder={'Password'} 
           secureTextEntry={hide} 
           onChangeText={(password:string) => setPassword(password)} 
          />
          <TouchableOpacity onPress={()=> setHide(!hide)} >
            { hide ? <Icon name="eye" size={18} /> 
             : <Icon name="eye-slash" size={18} /> }
          </TouchableOpacity>
        </InputContainer> 

        <Button onPress={login} >
          <TextButton>Login</TextButton>
        </Button>
        <ForgoutPassword>
          <TextMissing>Forgout password?</TextMissing>
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