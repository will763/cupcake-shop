import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`

export const ContainerContent = styled.View`
  flex:1 ;
  align-items:center ;
  padding-top:15% ;
`

export const Form = styled.View`
  margin-top:9%;
  width:80%;
`

export const InputContainer = styled.View`
  flex-direction:row ;
  justify-content:space-between ;
  background-color:#ffffff;
  width:100% ;
  border-radius:8px;
  margin-bottom:8px;
  align-items:center;
  padding-left:15px ;
  padding-right: 28px ;
  height:45px;
`

export const Input = styled.TextInput`
  height:60px;
  padding-right:8px ;
  width:90%;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
`

export const Button = styled.TouchableOpacity`
  height:45px ;
  border-radius:30px ;
  background-color:#FFFFFF ;
  align-items:center ;
  justify-content:center;
`

export const TextButton = styled.Text`
  font-size:18px ;
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
`

export const LoginSocial = styled.Pressable`
 height:45px;
 width:80% ;
 align-items:center ;
 justify-content:center ;
 margin-top: 8% ;
 margin-bottom: 3% ;
 background-color:white;
`
export const TextLoginSocial = styled.Text`
  font-size:16px ;
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
`

export const LoginContent = styled.View`
  margin-bottom:3.2% ;
  flex-direction:row ;
  justify-content:center ;
  color:white ;
`;

export const LoginText = styled.Text`
  color:white ;
  margin-right:2px ;
`;

export const LoginSpanText = styled.Text`
  font-family:${(props) => props.theme.FONTS.Roboto_MEDIUM};
  color: #00ffff;
  letter-spacing:.4px ;
`;