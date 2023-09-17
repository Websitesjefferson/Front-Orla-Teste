import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../pages/Home'; 
import {RegProject} from '../pages/RegProjects';
import { RegEmployee } from '../pages/RegEmployee';
import { DetailsProject } from '../pages/DetailsProject';


const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false  }}
        />
        <Stack.Screen
          name="Project"
          component={RegProject}
          options={{ title: 'Cadastrar Projeto' }}
        />
        <Stack.Screen
          name="Employee"
          component={RegEmployee}
          options={{ title: 'Cadastrar Funcionário' }}
        />
        <Stack.Screen
          name="regEmployee"
          component={DetailsProject}
          options={{ title: 'Detalhes do Projeto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
