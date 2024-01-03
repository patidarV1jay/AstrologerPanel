import {
  Calendar,
  MagnifyingGlass,
  Placeholder,
  TextIndent,
} from 'phosphor-react-native';
import React from 'react';
import { KeyboardAvoidingView, Pressable, Text, View } from 'react-native';
import { Colors, moderateScale } from '../../themes';
import styles from './ApplyLeaveStyles';
import useApplyLeave from './useApplyLeave';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { PlaceholderStrings, ScreenString } from '../../constants';

const ApplyLeave = () => {
  const {
    showMode,
    fromDate,
    toDate,
    numberOfDays,
    setLeaveReason,
    applyForLeave,
  } = useApplyLeave();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.dateView}>
          <Text style={styles.dateSelectionText}>From</Text>
          <Pressable style={styles.center} onPress={() => showMode('from')}>
            <Text style={styles.dateText}>
              {fromDate.toISOString().slice(0, 10)}
            </Text>
            <View />
            <Calendar size={moderateScale(28)} color={Colors.navyblue} />
          </Pressable>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateSelectionText}>To</Text>
          <Pressable style={styles.center} onPress={() => showMode('to')}>
            <Text style={styles.dateText}>
              {toDate.toISOString().slice(0, 10)}
            </Text>
            <View />
            <Calendar size={moderateScale(28)} color={Colors.navyblue} />
          </Pressable>
        </View>
      </View>
      <View style={styles.leaveContainer}>
        {numberOfDays >= 0 ? (
          <Text style={styles.leaveForText}>
            {ScreenString.iWillbeOnleave} {numberOfDays} {ScreenString.days}.
          </Text>
        ) : (
          <Text style={styles.validDateText}>
            {ScreenString.selectValidDate}
          </Text>
        )}
      </View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          multiline
          textAlignVertical="top"
          placeholder={PlaceholderStrings.reasonForLeave}
          placeholderTextColor={Colors.gray}
          onChangeText={text => setLeaveReason(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={applyForLeave}>
        <Text style={styles.detailsText}>{ScreenString.applyForLeave}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyLeave;
