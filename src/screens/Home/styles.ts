import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`

export const ContainerContent = styled.View`
  padding-top:30% ;
  padding-bottom:15% ;
  padding-right:4% ;
  padding-left:4% ;
`

export const ContainerAll = styled.View`
 
`

export const ContainerTrending = styled.View`
  margin-bottom:10% ;
`

export const ContentAll = styled.View`
  flex-direction:row ;
  flex-wrap:wrap;
`

export const ContentTrending = styled.View`
  flex-direction:row ;
`


export const Title = styled.Text`
  font-size:18px ;
  background-color: ${(props) => props.theme.FONTS.POPPINS_REGULAR};
  color:white ;
  margin-bottom:15px ;
`
