import { CheckSquare, Square } from 'phosphor-react-native';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomTextInput } from '../../../components';
import { ScreenString } from '../../../constants';
import { useInputRef } from '../../../hooks';
import { Colors, moderateScale } from '../../../themes';
import DeviceKnownModal from './DeviceKnownModal';
import styles from './SignupScreenStyles';
import useSignupScreen from './useSignupScreen';

const SignupScreen = () => {
  const {
    formik,
    isVisible,
    toggleVisibility,
    selectedGender,
    setSelectedGender,
    handleGender,
    setIsDevicesVisible,
    isDevicesVisible,
    device,
    toggleDeviceSelection,
    setSelection,
    cancelSelection,
    toggleModalVisibility,
    system,
    navigateLogin,
    isCheck,
    setIsCheck,
    selectedDevices,
    toggleLanguageSelection,
    languageSelected,
    language,
    error,
  } = useSignupScreen();
  const { handleSubmit } = formik;

  const {
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
  } = useInputRef();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cotainerHoldingKeyboardView}>
          <KeyboardAvoidingView behavior="position">
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.requestText}>
                {ScreenString.requestForEnrollingVarta}
              </Text>
              <View style={styles.flexRow}>
                <View style={styles.flexOne}>
                  <CustomTextInput
                    placeholder="First Name"
                    formik={formik}
                    name="firstName"
                    secureTextEntry={false}
                    returnKeyType="next"
                    onSubmitEditing={() => focusNextTextInput(refInput1)}
                  />
                </View>
                <View style={styles.flexOne}>
                  <CustomTextInput
                    inputRef={refInput1}
                    placeholder="Last Name"
                    formik={formik}
                    name="lastName"
                    secureTextEntry={false}
                    returnKeyType="next"
                    onSubmitEditing={() => focusNextTextInput(refInput2)}
                  />
                </View>
              </View>
              <View style={styles.marginBottomDropDown}>
                <Pressable
                  style={styles.dropDownView}
                  onPress={toggleVisibility}>
                  {selectedGender ? (
                    <Text style={styles.selectedGenderText}>
                      {selectedGender}
                    </Text>
                  ) : (
                    <Text style={styles.genderText}>
                      {ScreenString.selectGender}
                    </Text>
                  )}
                </Pressable>
                {error && <Text style={{ color: 'red' }}>{error}</Text>}
                {isVisible && (
                  <View style={styles.visibleDropDown}>
                    <Pressable onPress={() => handleGender(ScreenString.male)}>
                      <Text style={styles.selectGender}>
                        {ScreenString.male}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleGender(ScreenString.female)}>
                      <Text style={styles.selectGender}>
                        {ScreenString.female}
                      </Text>
                    </Pressable>
                  </View>
                )}
              </View>
              <CustomTextInput
                inputRef={refInput2}
                placeholder="Phone No."
                formik={formik}
                name="phone"
                secureTextEntry={false}
                returnKeyType="next"
                onSubmitEditing={() => focusNextTextInput(refInput3)}
                keyboardType="numeric"
              />
              <CustomTextInput
                inputRef={refInput3}
                placeholder="Email"
                formik={formik}
                name="email"
                secureTextEntry={false}
                returnKeyType="next"
                onSubmitEditing={() => focusNextTextInput(refInput4)}
                keyboardType="email-address"
              />
              <CustomTextInput
                inputRef={refInput4}
                placeholder="Experience"
                formik={formik}
                name="experience"
                secureTextEntry={false}
                returnKeyType="next"
                onSubmitEditing={() => focusNextTextInput(refInput5)}
                keyboardType="numeric"
              />
              <View style={styles.flexRow}>
                <View style={styles.flexOne}>
                  <CustomTextInput
                    inputRef={refInput5}
                    placeholder="City"
                    formik={formik}
                    name="city"
                    secureTextEntry={false}
                    returnKeyType="next"
                    onSubmitEditing={() => focusNextTextInput(refInput6)}
                  />
                </View>
                <View style={styles.flexOne}>
                  <CustomTextInput
                    inputRef={refInput6}
                    placeholder="Country"
                    formik={formik}
                    name="country"
                    secureTextEntry={false}
                    returnKeyType="next"
                    onSubmitEditing={() => focusNextTextInput(refInput7)}
                  />
                </View>
              </View>

              <View style={styles.marginBottomDropDown}>
                <Pressable
                  style={styles.dropDownView}
                  onPress={() => toggleModalVisibility('system')}>
                  {!selectedDevices ? (
                    <Text style={styles.genderText}>
                      {ScreenString.deviceKnown}
                    </Text>
                  ) : (
                    <Text style={styles.selectedText}>
                      {selectedDevices.join(', ')}
                    </Text>
                  )}
                </Pressable>
              </View>
              <View style={styles.marginBottomDropDown}>
                <Pressable
                  style={styles.dropDownView}
                  onPress={() => toggleModalVisibility('language')}>
                  {!languageSelected ? (
                    <Text style={styles.genderText}>
                      {ScreenString.selectLanguages}
                    </Text>
                  ) : (
                    <Text style={styles.selectedText}>
                      {languageSelected.join(', ')}
                    </Text>
                  )}
                </Pressable>
              </View>
              <CustomTextInput
                inputRef={refInput9}
                placeholder="Short Bio"
                formik={formik}
                name="bio"
                secureTextEntry={false}
                returnKeyType="next"
                onSubmitEditing={() => Keyboard.dismiss}
              />
              <View style={styles.termsAndCondtionView}>
                <Pressable onPress={() => setIsCheck(!isCheck)}>
                  {isCheck ? (
                    <CheckSquare
                      size={moderateScale(24)}
                      weight="fill"
                      color={Colors.dark}
                    />
                  ) : (
                    <Square size={moderateScale(24)} color={Colors.dark} />
                  )}
                </Pressable>
                <Text style={styles.checkText}>
                  {ScreenString.check}
                  <Text style={styles.termsAndCondtionText}>
                    {ScreenString.termsAndCondtion}
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={styles.requestButton}
                onPress={() => handleSubmit()}>
                <Text style={styles.requestButtonText}>
                  {ScreenString.sendRequest}
                </Text>
              </TouchableOpacity>
              <Pressable onPress={navigateLogin}>
                <Text style={styles.accountText}>
                  {ScreenString.alreadyHaveAccount}
                  <Text style={styles.loginText}>{ScreenString.login}</Text>
                </Text>
              </Pressable>
            </ScrollView>
          </KeyboardAvoidingView>
          <DeviceKnownModal
            isDevicesVisible={isDevicesVisible}
            setIsDevicesVisible={setIsDevicesVisible}
            device={device}
            language={language}
            toggleDeviceSelection={toggleDeviceSelection}
            toggleLanguageSelection={toggleLanguageSelection}
            setSelection={setSelection}
            cancelSelection={cancelSelection}
            system={system}
          />
        </View>
      </View>
    </>
  );
};

export default SignupScreen;
