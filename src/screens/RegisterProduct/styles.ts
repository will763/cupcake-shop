import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`;

export const ContainerContent = styled.View`
  margin-top:15% ;
  align-items:center ;
`;

export const Title = styled.Text`
  text-align:center ;
  font-family: ${(props) => props.theme.FONTS.POPPINS_BOLD};
  color: #ffffff;
  font-size: 20px;
`;

export const Form = styled.View`
  margin-top:5%;
  width:80% ;
`

export const InputContainer = styled.View`
  margin-top:18px ;
`

export const Input = styled.TextInput`
  padding:0 10px ;
  width:100%;
  height:55px ;
  border-radius:5px ;
  background-color:white ;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
`

export const InputTitle = styled.Text`
  font-size:16px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_MEDIUM};
  color:#FFFFFF ;
`

export const BtnSubmit = styled.TouchableOpacity`
  border:.3px solid #000000 ;
  margin-top:10% ;
  margin-bottom:10% ;
  width:100%;
  height:58px ;
  background-color:#0087E0 ;
  border-radius:5px ;
  align-items:center ;
  justify-content:center;
`

export const BtnText = styled.Text`
  font-size:24px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_BOLD};
  color:white ;
  letter-spacing:1px ;
`

export const InputPhoto = styled.Pressable`
  height:48px ;
  width: 188px;
  background-color: #575D8D;
  border-radius:5px ;
  align-items:center ;
  justify-content:center ;
  flex-direction:row ;
 ;
`

export const InputPhotoText = styled.Text`
  margin-left:10px ;
  font-size:16px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_MEDIUM};
  width:110px ;
  color:white ;
 ;
`