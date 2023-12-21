import { At, Password } from 'phosphor-react-native';
import React from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Images } from '../../../assets';
import { CustomTextInput } from '../../../components';
import { ScreenString } from '../../../constants';
import { useInputRef } from '../../../hooks';
import styles from './SigninScreenStyles';
import useSigninScreen from './useSigninScreen';

const SigninScreen = () => {
  const { formik } = useSigninScreen();
  const { refInput1, focusNextTextInput } = useInputRef();
  return (
    <View style={styles.container}>
      <Image source={Images.lekhaJhoka} style={styles.lekhaJhokaImage} />
      <View style={styles.shadowContainer}>
        <Text style={styles.text}>{ScreenString.divineHelp}</Text>
        <CustomTextInput
          placeholder="Email"
          formik={formik}
          name="email"
          Icon={At}
          secureTextEntry={false}
          returnKeyType="next"
          onSubmitEditing={() => focusNextTextInput(refInput1)}
        />
        <CustomTextInput
          inputRef={refInput1}
          placeholder="Password"
          formik={formik}
          name="password"
          Icon={Password}
          secureTextEntry={false}
          returnKeyType="done"
          onSubmitEditing={() => Keyboard.dismiss}
        />
        <Text style={styles.alignRightText}>{ScreenString.forgotPassword}</Text>
        <TouchableOpacity style={styles.blueButton}>
          <Text style={styles.loginText}>{ScreenString.login}</Text>
        </TouchableOpacity>
        <Text style={styles.newUserText}>
          {ScreenString.newUser}
          <Text style={styles.registerText}>{ScreenString.register}</Text>
        </Text>
      </View>
    </View>
  );
};

export default SigninScreen;
