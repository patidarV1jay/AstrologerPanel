import { ComponentType, MutableRefObject } from 'react';
import {
  StyleProp,
  TextStyle,
  TextInput,
  ReturnKeyTypeOptions,
} from 'react-native';

export interface FormikProps {
  handleBlur: Function;
  handleChange: Function;
  values: { [key: string]: string };
  touched: { [key: string]: boolean };
  errors: { [key: string]: string };
  handleSubmit: Function;
}

export interface IconComponentProps {
  size: number;
  color: string;
}

export interface Props {
  placeholder: string;
  name: string;
  Icon: ComponentType<IconComponentProps>;
  formik: FormikProps;
  secureTextEntry: boolean;
  onSubmitEditing?: () => void;
  inputRef?: MutableRefObject<TextInput | null>;
  returnKeyType?: ReturnKeyTypeOptions;
}
