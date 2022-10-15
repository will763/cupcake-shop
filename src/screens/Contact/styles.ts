import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex:1 ;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
  width:100% ;
`

export const ContainerContent = styled.View`
  width:80% ;
`

export const Title = styled.Text`
  margin-bottom:25px ;
  text-align:center ;
  font-family: ${(props) => props.theme.FONTS.ROBOTO_BOLD};
  color: #ffffff;
  font-size: 30px;
`
export const Information = styled.View`

`

export const FieldInfo = styled.View`
  padding: 0 15px ;
  flex-direction: row;
  align-items:center ;
  justify-content:space-between ;
  background-color:white ;
  height:55px ;
  border-radius:4px ;
  margin-top:8px ;
`

export const FieldText = styled.Text`
  font-size: 16px ;
  font-family: ${(props) => props.theme.FONTS.POPPINS_REGULAR};
  opacity:.5 ;
  
`

