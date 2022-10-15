import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`

export const ContainerContent = styled.View`
  padding-top:30% ;
  flex:1 ;
  align-items:center ;
`

export const Subject = styled.View`
  width:100% ;
  align-items:center ;
`

export const Title = styled.Text`
  text-align:center ;
  font-family:${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 30px ;
  color:#ffffff ;
  margin-bottom:3px ;
`


export const Description = styled.Text`
  text-align:center ;
  width:80% ;
  color:#ffffff ;
  opacity:.7 ;
  font-family:${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size:14px ;
  line-height:15px ;
`

export const Form = styled.View`
  margin-top:8%;
  width:80%;
`

export const Input = styled.TextInput`
  background-color:white ;
  padding-right:8px ;
  border-radius:5px ;
  padding:5px 10px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
  color:#445454;
  height:150px ;
`

export const Button = styled.TouchableOpacity`
  height:50px ;
  width:100% ;
  border-radius:30px ;
  background-color:#FFFFFF ;
  align-items:center ;
  justify-content:center;
  margin-top:12px ;
`

export const TextButton = styled.Text`
  font-size:20px ;
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
`