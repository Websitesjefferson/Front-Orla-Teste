import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ContainerHeader, TextHeader } from './styles';
import FontAwesomeIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  onSortPress: () => void; // A função de ordenação será passada como propriedade
}

export function Header({ onSortPress }: HeaderProps) {
  return (
    <ContainerHeader>
      <TextHeader>NOTE-APP</TextHeader>

      <TouchableOpacity onPress={onSortPress}>
        <FontAwesomeIcons name="view-list" size={27} color="black" />
      </TouchableOpacity>
    </ContainerHeader>
  );
}
