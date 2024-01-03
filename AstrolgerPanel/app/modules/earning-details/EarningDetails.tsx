import { CaretDown, CaretUp } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Colors, horizontalScale, moderateScale } from '../../themes';
import styles from './EarningDetailsStyles';
import useEarningDetails from './useEarningDetails';

const EarningDetails = () => {
  const {
    isDropDown,
    setIsDropDown,
    toggleDropDown,
    isAffiliateDropDown,
    affililateToggle,
  } = useEarningDetails();
  return (
    <View style={styles.container}>
      <View>
        <Pressable style={styles.blueContainer} onPress={toggleDropDown}>
          <Text style={styles.earningText}>This Month Earnings</Text>
          {isDropDown ? (
            <CaretUp weight="bold" color={Colors.light} />
          ) : (
            <CaretDown weight="bold" color={Colors.light} />
          )}
        </Pressable>
        {isDropDown && (
          <View style={styles.lightContainer}>
            <View style={styles.earningContainer}>
              <View>
                <Text style={styles.myEarningText}>Overall Credits</Text>
              </View>
              <Text style={styles.amount}>₹ 2000</Text>
            </View>
            <View style={styles.earningContainer}>
              <View>
                <Text style={styles.myEarningText}>Credits through Varta</Text>
              </View>
              <Text style={styles.amount}>₹ 2000</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.spacebottom}>
        <Pressable style={styles.blueContainer} onPress={affililateToggle}>
          <Text style={styles.earningText}>This Month Affiliate Earnings</Text>
          {isAffiliateDropDown ? (
            <CaretUp weight="bold" color={Colors.light} />
          ) : (
            <CaretDown weight="bold" color={Colors.light} />
          )}
        </Pressable>
        {isAffiliateDropDown && (
          <View style={styles.spaceAround}>
            <View style={styles.darkBlueContainer}>
              <Text style={styles.textAffiliate}>₹ 2000</Text>
              <Text style={styles.overallAffiliateText}>Overall Income</Text>
            </View>
            <View style={styles.darkBlueContainer}>
              <Text style={styles.textAffiliate}>₹ 2000</Text>
              <Text style={styles.overallAffiliateText}>Overall Income</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default EarningDetails;
