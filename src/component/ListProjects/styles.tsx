import styled from 'styled-components/native';



export const Container = styled.View`
 width: 100%;
 align-items: center;
 justify-content: center;
 

`


export const ContainerList = styled.View`
flex: 1;
justify-content: center;
background-color: #f0f0f0;
padding: 20px;
flex-direction: row;

`;

export const ItemContainer = styled.View`

padding: 20px;
margin: 10px;
height: 180px;
width: 100%;
max-width: 170px;
border-radius: 5px;
align-items: center;

`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  

`

export const ItemText = styled.Text`
font-size: 18px;
margin: auto;
color: white;
text-align: center;
height: 100vh;
text-transform: capitalize;

`
export const TextDate = styled.Text`
  position: absolute;
  right: 5%;
  top: 5%;
  font-size: 18px;
  margin-bottom: 10px;
  color: white;

`
export const InputText = styled.TextInput`
  
  width: 90%;
  padding: 10px;
  background-color: #ddd7d7;
  border-radius: 10px;
`

