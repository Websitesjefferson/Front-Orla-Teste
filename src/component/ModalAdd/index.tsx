
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { Container, Button, ItemText } from './styles';

interface ModalAddProps {
  isVisible: boolean;
  navigation: any
  onCancel: () => void;

}

export const ModalAdd: React.FC<ModalAddProps> = ({  isVisible, navigation, onCancel }) => {
  
function  handleCloseModalProject(){
  
  onCancel()
  navigation.navigate('Project')
}
function  handleCloseModalEmployee(){
  
  onCancel()
  navigation.navigate('Employee')
}
 
  return (
    <Modal isVisible={isVisible} onBackdropPress={onCancel}>
    <Container>
      <Button onPress={() => handleCloseModalProject()}>
        <ItemText>Cadastrar Projeto</ItemText>
      </Button>
      <Button onPress={() =>  handleCloseModalEmployee()}>
        <ItemText>Cadastrar Funcionário</ItemText>
      </Button>
  
      <TouchableOpacity onPress={onCancel}>
        <ItemText>Cancelar</ItemText>
      </TouchableOpacity>
    </Container>
  </Modal>
  
  );
};


