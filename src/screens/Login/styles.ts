import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`

export const ContainerContent = styled.View`
  flex:1 ;
  align-items:center ;
  padding-top:15% ;
`

export const Input = styled.TextInput`
  padding-right:8px ;
  width:80%;
  height:50px;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
`
export const Form = styled.View`
  margin-top:14%;
  width:80%;
`
export const Icon = styled(FontAwesome5)`
  width:30px ;

`;

export const InputContainer = styled.View`
  flex-direction:row ;
  background-color:#ffffff;
  width:100% ;
  border-radius:8px;
  margin-bottom:8px;
  align-items:center;
  padding: 0 15px ;
  height:50px;
`

export const Button = styled.TouchableOpacity`
  height:50px ;
  border-radius:30px ;
  background-color:#FFFFFF ;
  align-items:center ;
  justify-content:center;
`
export const TextButton = styled.Text`
  font-size:20px ;
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
`
export const ForgoutPassword = styled.TouchableOpacity`

`
export const SignupContent = styled.View`
  margin-bottom: 5% ;
  flex-direction:row ;
  color:white ;
`;

export const SignupText = styled.Text`
  color:white ;
  margin-right:2px ;
`;

export const SignupSpanText = styled.Text`
  font-family:${(props) => props.theme.FONTS.Roboto_MEDIUM};
  color: #00ffff;
  letter-spacing:.4px ;
`;

export const TextMissing = styled.Text`
  margin-top:8px ;
  font-size:9px ;
  align-self:center ;
  color: #ffffff ; 
  font-family:${(props) => props.theme.FONTS.Roboto_MEDIUM};
`

export const LoginSocial = styled.Pressable`
 height:50px;
 width:80% ;
 align-items:center ;
 justify-content:center ;
 margin-top: 15% ;
 margin-bottom: 5% ;
 background-color:white;
`
export const TextLoginSocial = styled.Text`
  font-size:18px ;
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
`
