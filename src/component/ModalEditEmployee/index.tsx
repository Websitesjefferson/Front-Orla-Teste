import React from 'react';
import { TouchableOpacity, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';

import { Container, ItemText, Title, Card, Button } from './styles';


interface Employee {
  id: number;
  name: string;
  cpf: string;
  email: string;
  salary: string;
}

interface ModalAddProps {
  isVisible: boolean;
  onCancel: () => void;
  employees: Employee[]; 
  projectId: number
  onAddEmployee: (projectId: number, employeeId: number) => void;
}

export const ModalEmployee: React.FC<ModalAddProps> = ({
  isVisible,
  onCancel,
  employees,
  onAddEmployee,
  projectId
}) => {
  const handleAddEmployee = (projectId: number, employeeId: number) => {
    onAddEmployee(projectId, employeeId);
    onCancel(); // Chame a função onCancel para fechar o modal
  };
   
  return (
    <Modal isVisible={isVisible} onBackdropPress={onCancel}>
      <Container>
        <Title>Funcionários </Title>
        <ScrollView>
        {employees.map((employee) => (
          <Card key={employee.id}>
          <ItemText >
            Nome: {employee.name} 
          </ItemText>
          <ItemText>
            Email: {employee.email}
          </ItemText>

            <Button onPress={() => handleAddEmployee(projectId, employee.id)}>
               <ItemText>Adicionar</ItemText>
            </Button>
          </Card>
        ))}
        </ScrollView>
       
          <TouchableOpacity onPress={onCancel}>
            <ItemText>Fechar</ItemText>
          </TouchableOpacity>
       
      </Container>
    </Modal>
  );
};
