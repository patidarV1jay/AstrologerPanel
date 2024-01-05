import { CaretDown, MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Months, ScreenString } from '../../constants';
import { Colors, moderateScale } from '../../themes';
import styles from './MyPaymentReportStyles';
import useMyPaymentReport from './useMyPaymentReport';

const CallDetails = () => {
  const {
    isMonthVisible,
    selectedMonth,
    isYearVisible,
    selectedYear,
    Year,
    toggleMonth,
    selectMonth,
    selectYear,
    toggleYear,
  } = useMyPaymentReport();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.dateView}>
          <Text style={styles.dateSelectionText}>
            {ScreenString.selectMonth}
          </Text>
          <Pressable style={styles.center} onPress={toggleMonth}>
            <Text style={styles.dateText}>{selectedMonth}</Text>
            <View />
            <CaretDown size={moderateScale(28)} color={Colors.darkBlue} />
          </Pressable>
          {isMonthVisible && (
            <View style={styles.dropDownContainer}>
              <FlatList
                data={Months}
                renderItem={({ item }) => {
                  return (
                    <Pressable onPress={() => selectMonth(item)}>
                      <Text style={styles.text}>{item}</Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          )}
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateSelectionText}>
            {ScreenString.selectYear}
          </Text>
          <Pressable style={styles.center} onPress={toggleYear}>
            <Text style={styles.dateText}>{selectedYear}</Text>
            <View />
            <CaretDown size={moderateScale(28)} color={Colors.darkBlue} />
          </Pressable>
          {isYearVisible && (
            <View style={styles.dropDownContainer}>
              <FlatList
                data={Year}
                renderItem={({ item }) => {
                  return (
                    <Pressable onPress={() => selectYear(item)}>
                      <Text style={styles.text}>{item}</Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <MagnifyingGlass
          weight="bold"
          color={Colors.light}
          size={moderateScale(25)}
        />
        <Text style={styles.detailsText}>{ScreenString.report}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CallDetails;
