import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './SupportScreenStyles';
import { PlaceholderStrings, ScreenString } from '../../constants';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from '../../themes';
import useSupportScreen from './useSupportScreen';

const SupportScreen = () => {
  const { subject, setSubject, concern, setConcern, handleSubmit } =
    useSupportScreen();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput
          placeholder={PlaceholderStrings.subject}
          placeholderTextColor={Colors.gray}
          style={styles.subjectInput}
          value={subject}
          onChangeText={text => setSubject(text)}
        />
        <TextInput
          placeholder={PlaceholderStrings.yourConcern}
          placeholderTextColor={Colors.gray}
          style={[styles.subjectInput, styles.yourConcernInput]}
          multiline
          textAlignVertical="top"
          value={concern}
          onChangeText={text => setConcern(text)}
        />
        <TouchableOpacity
          style={styles.raiseTicketButton}
          onPress={handleSubmit}>
          <Text style={styles.raiseTicketText}>{ScreenString.raiseTicket}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportScreen;
