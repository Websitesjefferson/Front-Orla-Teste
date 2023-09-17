import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native';
import { api } from '../../../api/Api';
import { Card, ContainerCard, TextItem, TextItems, CardItem, Title, Icon } from './styles';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'; // Importe os ícones que você deseja usar
import Toast from 'react-native-toast-message';
import { format } from 'date-fns';
import { ModalEmployee } from '../../component/ModalEditEmployee';

interface Employee {
  id: number;
  name: string;
  cpf: string;
  email: string;
  salary: string;
  created_at: string;
}

interface Api {
  id: number;
  name: string;
  creation_date: string;
  employees: Employee[];
}

export function DetailsProject({ route }: any): JSX.Element {
  const { projectId } = route.params;
  const [apiData, setApiData] = useState<Api>();
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [data, setData] = useState([])




  const handleOpenModal = () => {

    setModalVisible(true);

  };

  async function addEmployeeToProject(projectId: number, employeeId: number) {
    
    try {
      const response = await api.post(`/projects/${projectId}/addEmployee`, {
        employee_id: employeeId,
      });
       if (response) {
        fetchData();
        Toast.show({
          type: 'success',
          text1: 'Funcionário adicionado com sucesso ao projeto.'
        })
      } 
    } catch (error) {
     
      Toast.show({
        type: 'error',
        text1: 'O funcionário já está associado a este projeto'
      })
    }
  }
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/projects/${projectId}`);
      if (!response) {
        throw new Error('Erro ao buscar os dados da API');
      }
      const data = await api.get('/employees')
      setData(data.data)
      setApiData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.get(`/projects/${projectId}`);
        if (!response) {
          throw new Error('Erro ao buscar os dados da API');
        }
        const data = await api.get('/employees')
        setData(data.data)
        setApiData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <View>

      {apiData &&
        <Card>
          <TextItem>{apiData.name}</TextItem>
        </Card>}
      {isLoading ? (
        <View style={{marginTop: '60%'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : apiData ? (
        <ContainerCard>

          <View style={{width: '100%', height: '100%'}}>
            <Title>Funcionários</Title>
            <FlatList
              data={apiData.employees}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CardItem>
                  <View>
                    <Text><TextItems>Nome:</TextItems> {item.name}</Text>
                    <Text><TextItems>Cpf:</TextItems> {item.cpf}</Text>
                    <Text><TextItems>Email:</TextItems> {item.email}</Text>
                    <Text><TextItems>Salário:</TextItems> {parseFloat(item.salary).toFixed(2)}</Text>
                    <Text><TextItems>Data de Criação:</TextItems> {format(new Date(item.created_at), 'dd/MM/yyyy HH:mm')}</Text>
                  </View>

                </CardItem>
              )}
              ListEmptyComponent={() => (
                <View style={{alignItems: 'center'}}>
                  <Text>Nenhum funcionário cadastrado...</Text>
                </View>
              )}
            />
            <Icon onPress={handleOpenModal}>
              <FontAwesomeIcons name="plus" size={30} color="black" />
            </Icon>

          </View>


        </ContainerCard>

      ) : (
        <Text style={{ margin: 'auto', flex: 1 }}>Nenhum dado encontrado.</Text>
      )}

        <Toast />
      <ModalEmployee
        projectId={projectId}
        onAddEmployee={addEmployeeToProject}
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        employees={data}
      />

    </View>
  );
};




