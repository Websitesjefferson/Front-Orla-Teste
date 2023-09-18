import styled from 'styled-components/native';


export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  
`;




export const Button = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #1976D2; 
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 800;
  flex-direction: row;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
