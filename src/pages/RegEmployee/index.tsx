import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { CustomTextInput } from '../../component/TextInput';
import { Container, Label, Button, TextButton } from '../RegProjects/styles';
import { api } from '../../../api/Api';
import { ActivityIndicator, ScrollView } from 'react-native';

interface Project {
  id: string;
  name: string;
}

export function RegEmployee() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [selectedProject, setSelectedProject] = useState<string>('');
  
  const [projectOptions, setProjectOptions] = useState<{ label: string; value: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Busque a lista de projetos da API
    api
      .get<Project[]>('/projects') // Certifique-se de que '/projects' corresponda à rota correta da sua API
      .then((response) => {
        // Mapeie a resposta da API para criar as opções do Picker
        const options = response.data.map((project) => ({
          label: project.name,
          value: project.id,
        }));
        setProjectOptions(options);
      })
      .catch((error) => {
        console.error('Erro ao buscar projetos:', error);
      });
  }, []);

  const handleSubmit = () => {
    if (name.trim() === '' || cpf.trim() === '' || email.trim() === '' || salary.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Por favor, preencha todos os campos.'

      })
      return
    }
      const selectedProjectId = selectedProject;
      const employeeData = {
      name,
      cpf,
      email,
      salary,
      project_id: selectedProjectId,
    };

    setIsLoading(true);
    api.post('/employees', employeeData) 
      .then((response) => {
          setName('')
          setCpf('')
          setEmail('')
          setSalary('')
          setIsLoading(false)
        Toast.show({
          type: 'success',
          text1: 'Funcionário cadastrado com sucesso.'
        })

         
        
      })
      .catch((error) => {
        console.error('Erro ao cadastrar funcionário:', error);
        setIsLoading(false);
      });
      
  };

  return (
    <Container>
      
      <Label>Nome</Label>
      <CustomTextInput value={name} onChangeText={setName} placeholder="Nome" />

      <Label>CPF</Label>
      <CustomTextInput value={cpf} onChangeText={setCpf} placeholder="CPF" />

      <Label>Email</Label>
      <CustomTextInput value={email} onChangeText={setEmail} placeholder="Email" />

      <Label>Salário</Label>
      <CustomTextInput
        value={salary}
        onChangeText={setSalary}
        placeholder="Salário"
        keyboardType="numeric"
      />

      <Label>Projeto (Opcional)</Label>
      <Picker
        style={{ height: 70, marginBottom: 10 }}
        selectedValue={selectedProject}
        onValueChange={(value) => setSelectedProject(value)}
      >
        <Picker.Item label="Selecione um projeto..." value="" />
        {projectOptions.map((project) => (
          <Picker.Item key={project.value} label={project.label} value={project.value} />
        ))}
      </Picker>
     

      <Button onPress={handleSubmit}>
      {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <TextButton style={{ color: 'white' }}>Cadastrar Projeto</TextButton>
        )}
      </Button>
    </Container>
  );
}
