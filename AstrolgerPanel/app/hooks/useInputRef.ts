import { MutableRefObject, useRef } from 'react';
import { TextInput } from 'react-native';

const useInputRef = () => {
  const refInput1 = useRef<TextInput | null>(null);
  const refInput2 = useRef<TextInput | null>(null);
  const refInput3 = useRef<TextInput | null>(null);
  const refInput4 = useRef<TextInput | null>(null);
  const refInput5 = useRef<TextInput | null>(null);
  const refInput6 = useRef<TextInput | null>(null);
  const refInput7 = useRef<TextInput | null>(null);
  const refInput8 = useRef<TextInput | null>(null);
  const refInput9 = useRef<TextInput | null>(null);

  const focusNextTextInput = (nextRef: MutableRefObject<TextInput | null>) => {
    if (nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  };

  return {
    refInput1,
    refInput2,
    refInput3,
    refInput4,
    refInput5,
    refInput6,
    refInput7,
    refInput8,
    refInput9,
    focusNextTextInput,
  };
};

export default useInputRef;
