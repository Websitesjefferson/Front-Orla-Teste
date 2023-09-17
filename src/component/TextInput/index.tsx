
import { CustomInput } from './styles'

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) => {
  return (
    <CustomInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

