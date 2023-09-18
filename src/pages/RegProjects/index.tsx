import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { CustomTextInput } from '../../component/TextInput';

import { api } from '../../../api/Api';
import { Container, Label, Button, TextButton } from './styles';
import { ActivityIndicator } from 'react-native';




export function RegProject() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date();
  const ano = date.getFullYear();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();

  const dateFormat = `${ano}/${mes.toString().padStart(2, '0')}/${dia.toString().padStart(2, '0')}`;

  async function handleSubmit() {
    if (name.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Por favor, preencha todos os campos.'
      })
      return;
    }

    try {
       setIsLoading(true)
      const response = await api.post('/projects', {
        name,
        creation_date: dateFormat
      });
      setName('');
      setIsLoading(false)
      Toast.show({
        type: 'success',
        text1: 'Cadastrado',

      })
      

    }
    catch (error) {
      console.error('Erro ao cadastrar projetos:', error);
    }
  }
  return (
    <Container>

      <Label>Nome do Projeto</Label>
      <CustomTextInput
        value={name}
        onChangeText={setName}
        placeholder="Nome do Projeto"
      />
      <Button onPress={handleSubmit}>
      {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <TextButton style={{ color: 'white' }}>Cadastrar</TextButton>
        )}
      </Button>


    </Container>
  );
}



