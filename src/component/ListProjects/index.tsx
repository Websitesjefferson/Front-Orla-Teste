import React, { useState, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Container, ItemText, ItemContainer, InputText, ContainerList, Button, TextDate } from './styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Header } from '../Header';

interface ProjectProps {
  id: string;
  name: string;
  creation_date: string;
}

interface ListProjectsProps {
  projects: ProjectProps[];
  navigation: any;
  searchText: string;
  setSearchText: any;
}

export function ListProjects({ projects, navigation, searchText, setSearchText }: ListProjectsProps): JSX.Element {
  
  const [isAscending, setIsAscending] = useState(true);
  const projectColors = ['#6d2727', '#0d9426', '#4629c9', '#217cb1'];

  // Filtrar e ordenar projetos com base nos estados locais
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useMemo(() => {
    // Filtrar os projetos com base no texto de pesquisa à medida que o usuário digita
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Ordenar projetos se necessário
    const sorted = [...filtered];
    sorted.sort((a, z) => {
      // Exemplo: Ordene por nome
      return isAscending ? a.name.localeCompare(z.name) : z.name.localeCompare(a.name);
    });

    setFilteredProjects(sorted);
  }, [searchText, projects, isAscending]);

  const sortProjects = () => {
    // Alternar entre ordenação ascendente e descendente
    setIsAscending(!isAscending);
  };
  const getProjectColor = (index: number) => {
    // Obtenha a cor com base no índice do projeto
    return projectColors[index % projectColors.length];
  };

  return (
    <>
      <Container>
        <Header onSortPress={sortProjects} />

        <InputText
          placeholder="Pesquisar projetos..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </Container>
      <ContainerList>
        <FlatList
          data={filteredProjects} // Use os projetos filtrados e ordenados
          renderItem={({ item, index }) => (
            <Button onPress={() => navigation.navigate('regEmployee', { projectId: item.id })}>
              <ItemContainer  style={{ backgroundColor: getProjectColor(index) }}>
                <TextDate>{format(new Date(item.creation_date), 'dd MMM', { locale: ptBR })}</TextDate>
                <ItemText>{item.name}</ItemText>
              </ItemContainer>
            </Button>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          ListEmptyComponent={() => (
            <View style={{ alignItems: 'center' }}>
              <Text style={{color: 'black'}}>Nenhum projeto cadastrado...</Text>
            </View>
          )}
        />
      </ContainerList>
    </>
  );
}
