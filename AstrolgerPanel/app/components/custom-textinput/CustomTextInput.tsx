import { Text, TextInput, View } from 'react-native';
import { Colors, moderateScale } from '../../themes';
import styles from './CustomTextInputStyles';
import { Props } from './types';

const CustomTextInput = ({
  placeholder,
  name,
  formik,
  Icon,
  secureTextEntry,
  inputRef,
  onSubmitEditing,
  returnKeyType,
}: Props) => {
  const { handleBlur, handleChange, values, touched, errors } = formik;
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <Icon size={moderateScale(25)} color={Colors.dark} />
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={Colors.offShade}
          style={styles.textInputStyles}
          value={values.name}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
      </View>
      <View style={styles.errorView}>
        {errors[name] && touched[name] && (
          <Text style={styles.errorText}>{errors[name]}</Text>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
