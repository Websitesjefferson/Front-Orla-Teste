import styled from "styled-components/native";

export const ContainerCard = styled.View`
  justify-content: center;
  align-items: center;
 
  
`

export const Card = styled.View`

 width: 100%;
 margin-bottom: 20px; 
 align-items: center;
 background-color:  #ddd7d7;
 padding: 20px;
 border-radius: 10px;


` 
export const Icon = styled.TouchableOpacity`
  position: absolute;
  bottom: 30%;
  right: 5%;
  z-index: 999;
 

  align-items: center;
  justify-content: center;
  width: 14%;
  height: 55px;
  border-radius: 99px;
  background-color:  white;
  border: 1px solid black;
 
  
   
`;

export const CardItem = styled.View`
 
 width: 100%;
margin-bottom: 20px; 
padding: 20px;
background-color:  #ddd7d7;
flex-direction: row;
align-items: center;
border-radius: 10px;

`

export const TextItem = styled.Text`
 font-size: 18px;
 font-weight: 800;
 text-align: center;
 margin: auto;
 text-transform: capitalize;

`
export const TextItems = styled.Text`
 font-size: 16px;
 font-weight: 800;
 text-align: center;

`
export const Title = styled.Text`
 font-size: 18px;
 font-weight: 800;
 text-align: center;
 margin-bottom: 10px;
`