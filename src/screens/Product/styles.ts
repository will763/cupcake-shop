import styled from 'styled-components/native'

export const Container = styled.View`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`
export const ContainerContent = styled.View`
  padding-top:8% ;
  padding-bottom:25% ;
  align-items:center ;
`

export const Content = styled.View`
  width:90% ;
  align-items:center ;
`

export const Name = styled.Text`
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
  color: #fff;
  font-size: 24px;
  margin-bottom:15px ;
`

export const Title = styled.Text`
  font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
  color: #fff;
  font-size: 20px;
`
export const Image = styled.Image`
  width:243px ;
  height:147px ;
  border-radius:5px ;
`

export const Description = styled.Text`
  margin-top:4px ;
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
  color: #fff;
  font-size: 14px;
  text-align:center ;
  opacity:.75 ;
  width:100% ;
  max-width:300px ;
`

export const Button = styled.TouchableOpacity`
  margin-top:18px ;
  height:55px;
  width:238px ;
  border-radius:10px;
  background-color:#fff;
  justify-content:center ;
  align-items:center ;
`

export const TextButton = styled.Text`
   font-family:${(props) => props.theme.FONTS.ROBOTO_BOLD};
   font-size: 20px;
   color:#303030 ;
`

export const ContainerComment = styled.View`
   padding-top:9% ;
   align-self:flex-start ;
`

export const SectionName = styled.Text`
  font-family:${(props) => props.theme.FONTS.POPPINS_REGULAR};
  color:#fff ;
  font-size:18px ;
`

export const InputComment = styled.View`
  position:absolute ;
  align-items:center ;
  justify-content:center ;
  bottom:0px ;
  width:100% ;
  height: 60px ;
  background-color: #0087E0 ;
  z-index:1000 ;
`

export const InputContainer = styled.View`
  align-items:center ;
  height:37px ;
  width:90% ;
  background-color:white ;
  border-radius:20px ;
  flex-direction:row ;
`;


export const Input = styled.TextInput`
  width:85% ;
  padding-left:20px ;
  padding-right:20px ;
`
export const ContentComment = styled.View`
  padding-top:5% ;
`
