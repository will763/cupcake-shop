import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`

export const ContainerContent = styled.View`
  align-items:center ;
  padding-top:15% ;
`

export const Title = styled.Text`
  font-family:${(props) => props.theme.FONTS.POPPINS_BOLD};
  font-size:24px ;
  color:white;
`

export const Form = styled.View`
  margin-top:2%;
  width:80%;
`

export const ContainerInput = styled.View`
  margin-top:8% ;
`

export const ContainerInputDate = styled.Pressable`
  flex-direction:row ;
  align-items:center ;
  padding:0 20px ;
  background-color:#FFFFFF ;
  border-radius:4px ;
`
export const TextDate = styled.View`
  flex:1;
  height:55px ;
  justify-content:center ;
  align-items:center ;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
`

export const InputTitle = styled.Text`
  font-size:16px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_MEDIUM};
  color:#FFFFFF ;
`

export const Input = styled.TextInput`
  flex:1 ;
  height:55px ;
  border-radius:4px ;
  background-color:#FFFFFF ;
  font-size:16px ;
  padding:0 10px ;
  color:#303030 ;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
`

export const BtnSubmit = styled.TouchableOpacity`
  border:.3px solid #000000 ;
  margin-top:10% ;
  margin-bottom:18% ;
  width:100%;
  height:58px ;
  background-color:#0087E0 ;
  border-radius:5px ;
  align-items:center ;
  justify-content:center;
`

export const BtnText = styled.Text`
  font-size:24px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_MEDIUM};
  color:white ;
`