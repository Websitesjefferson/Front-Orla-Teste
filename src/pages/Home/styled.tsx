import styled from 'styled-components/native';

export const Container = styled.View`

 flex: 1;
 align-items: center;
 justify-content: center;
 

`

export const InputText = styled.TextInput`
  
  width: 90%;
  padding: 10px;
  background-color: #ddd7d7;
  border-radius: 10px;
`

export const Icon = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 99;

  align-items: center;
  justify-content: center;
  width: 14%;
  height: 55px;
  border-radius: 99px;
  background-color: white;
  border: 1px solid black;
 
  
   
`;