import React, { useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';


import { ListProjects } from '../../component/ListProjects';
import { api } from '../../../api/Api';
import { Container, InputText, Icon } from './styled';
import { ModalAdd } from '../../component/ModalAdd';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';


type Project = {
  id: string;
  name: string;
  creation_date: string;
};

export function Home(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchText, setSearchText] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function GetProjects() {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    }

if (isFocused) {
  GetProjects();
  projects
}
  }, [isFocused]);
const handleOpenModal = () => {
    setModalVisible(true);
  };
   
  return (
    <Container>
      <StatusBar
        backgroundColor="#ddd7d7"
        barStyle="dark-content" 
      />
      {isLoading ? (
        <View style={{ marginTop: '0%' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : projects ? (

        <>
        <ListProjects
          projects={projects}
          navigation={navigation}
          setSearchText={setSearchText}
          searchText={searchText} />

          <Icon onPress={handleOpenModal}>
            <FontAwesomeIcons name="plus" size={30} color="black" />
          </Icon>

          <ModalAdd
            isVisible={modalVisible}
            navigation={navigation}
            onCancel={() => setModalVisible(false)} /></>
      ) : (
        <Text style={{ margin: 'auto', flex: 1 }}>Nenhum dado encontrado.</Text>
      )}

    </Container>
  );
}
