import { CaretDown, CaretUp } from 'phosphor-react-native';
import React, { FC } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenString } from '../../constants';
import { Colors, moderateScale } from '../../themes';
import styles from './SetRateStyles';
import { Props } from './types';

const DropDownComponent: FC<Props> = ({
  isDropDown,
  isRateDropDown,
  toggleDropDown,
  dropDownName,
  privateCallRate,
  formik,
}) => {
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    formik;
  return (
    <View style={styles.marginbottom}>
      <Pressable
        style={styles.navyBlueContainer}
        onPress={() => {
          toggleDropDown(dropDownName);
        }}>
        <Text style={styles.text}>{privateCallRate}</Text>
        {isDropDown ? (
          <>
            {isRateDropDown === dropDownName && (
              <CaretUp
                size={moderateScale(25)}
                weight="bold"
                color={Colors.light}
              />
            )}
          </>
        ) : (
          <CaretDown
            size={moderateScale(25)}
            weight="bold"
            color={Colors.light}
          />
        )}
      </Pressable>
      {isDropDown && (
        <>
          {isRateDropDown === dropDownName && (
            <View style={styles.dropDownContainer}>
              <View style={styles.paddingforPriceContainer}>
                <View style={styles.rateContainer}>
                  <Text style={styles.rateText}>{ScreenString.rateText}</Text>
                  <TextInput
                    keyboardType="number-pad"
                    style={styles.textInput}
                    onChangeText={handleChange('rate')}
                    onBlur={handleBlur('rate')}
                    value={values.rate.toString()}
                  />
                </View>
                <View style={styles.errorView}>
                  {errors['rate'] && (
                    <Text style={styles.errorText}>{errors['rate']}</Text>
                  )}
                </View>
              </View>
              <View style={styles.paddingforPriceContainer}>
                <View style={styles.rateContainer}>
                  <Text style={styles.rateText}>{ScreenString.discount}</Text>
                  <TextInput
                    keyboardType="number-pad"
                    value={values.discount.toString()}
                    style={styles.textInput}
                    onChangeText={handleChange('discount')}
                    onBlur={handleBlur('discount')}
                  />
                </View>
                <View style={styles.errorView}>
                  {errors['discount'] && (
                    <Text style={styles.errorText}>{errors['discount']}</Text>
                  )}
                </View>
              </View>
              <View
                style={[styles.rateContainer, styles.paddingforPriceContainer]}>
                <Text style={styles.rateText}>
                  {ScreenString.discountedRate}
                </Text>
                <View style={styles.discountedContainer}>
                  <Text style={styles.discountedPrice}>
                    {formik.values.rate -
                      (formik.values.rate * formik.values.discount) / 100}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => handleSubmit()}>
                <Text style={styles.updateText}>{ScreenString.update}</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default DropDownComponent;
