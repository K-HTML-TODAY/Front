import { UseFormRegister } from 'react-hook-form';

export interface InputProps {
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  width?: string;
}
export interface InputTextBoxProps {
  width?: string;
}
