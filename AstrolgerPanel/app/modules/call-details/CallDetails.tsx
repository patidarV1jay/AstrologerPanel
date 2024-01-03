import { Calendar, MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenString } from '../../constants';
import { Colors, moderateScale } from '../../themes';
import styles from './CallDetailsStyles';
import useCallDetails from './useCallDetails';

const CallDetails = () => {
  const { showMode, fromDate, toDate } = useCallDetails();
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
            <Calendar
              size={moderateScale(28)}
              color={Colors.darkBlue}
            />
          </Pressable>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateSelectionText}>To</Text>
          <Pressable style={styles.center} onPress={() => showMode('to')}>
            <Text style={styles.dateText}>
              {toDate.toISOString().slice(0, 10)}
            </Text>
            <View />
            <Calendar
              size={moderateScale(28)}
              color={Colors.darkBlue}
            />
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <MagnifyingGlass
          weight="bold"
          color={Colors.light}
          size={moderateScale(25)}
        />
        <Text style={styles.detailsText}>{ScreenString.details}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CallDetails;
