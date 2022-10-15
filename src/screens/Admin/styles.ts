import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
  align-items:center ;
  width:100% ;

`

export const ContainerContent = styled.View`
  align-items:center ;
  margin-top:35% ;
`

export const Title = styled.Text`
  text-align:center ;
  font-family: ${(props) => props.theme.FONTS.POPPINS_BOLD};
  color: #ffffff;
  font-size: 24px;
`

export const Information = styled.Text`
  width:80% ;
  text-align:center ;
  font-family: ${(props) => props.theme.FONTS.POPPINS_MEDIUM};
  color:white ;
  opacity:.7 ;
  font-size:14px ;
`

export const Form = styled.View`
  margin-top:14%;
  width:80% ;
`

export const InputContainer = styled.View`
  flex-direction:row ;
  background-color:#ffffff;
  width:100% ;
  border-radius:5px;
  margin-bottom:8px;
  align-items:center;
  padding-right: 0px ;
  padding-left:15px ;
  height:55px;
`

export const Icon = styled(FontAwesome5)`
  width:30px ;
`;

export const Input = styled.TextInput`
  padding-right:8px ;
  height:70px;
  width:80%;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
`

export const Button = styled.TouchableOpacity`
  height:55px ;
  border-radius:5px ;
  background-color:#FFFFFF ;
  align-items:center ;
  justify-content:center;
`
export const TextButton = styled.Text`
  font-size:22px ;
  opacity:.9 ;
  letter-spacing:.3px ;
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
`