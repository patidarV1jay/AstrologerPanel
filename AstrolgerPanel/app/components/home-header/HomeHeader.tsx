import {
  Bell,
  CaretRight,
  DotsThreeVertical,
  List,
} from 'phosphor-react-native';
import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';
import { ScreenString } from '../../constants';
import { Colors, horizontalScale, moderateScale } from '../../themes';
import styles from './HomeHeaderStyles';
import ProfileModal from './ProfileModal';
import useHomeHeader from './useHomeHeader';

const HomeHeader = () => {
  const {
    isModalVisible,
    setIsModalVisible,
    navigation,
    navigateToEarningDetails,
  } = useHomeHeader();
  return (
    <>
      <StatusBar backgroundColor={Colors.orange} barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Pressable onPress={navigation.openDrawer}>
            <List size={moderateScale(25)} weight="bold" color={Colors.light} />
          </Pressable>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.welcomeText}>{ScreenString.divineWelcome}</Text>
            <Text style={styles.lekhaJhokaText}>{ScreenString.lekhaJhoka}</Text>
          </View>
          <View style={styles.bellnDots}>
            <Pressable style={styles.paddingIcon}>
              <Bell
                size={moderateScale(30)}
                weight="bold"
                color={Colors.light}
              />
            </Pressable>
            <Pressable onPress={() => setIsModalVisible(true)}>
              <DotsThreeVertical
                size={moderateScale(30)}
                weight="bold"
                color={Colors.light}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.lightContainer}>
          <View style={styles.incomeContainer}>
            <View>
              <Text style={styles.amountText}>₹ 2000</Text>
              <Text style={styles.dayIncomeText}>Today's In</Text>
            </View>
            <View style={styles.vrLine} />
          </View>
          <View style={styles.incomeContainer}>
            <View>
              <Text style={styles.amountText}>₹ 2000</Text>
              <Text style={styles.dayIncomeText}>Total In</Text>
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderColor: Colors.offShade,
                marginRight: horizontalScale(10),
              }}
            />
          </View>
          <Pressable
            style={styles.viewMoreContainer}
            onPress={navigateToEarningDetails}>
            <View>
              <Text style={styles.view}>View</Text>
              <Text style={styles.view}>More</Text>
            </View>
            <CaretRight
              size={moderateScale(22)}
              weight="bold"
              color={Colors.orange}
            />
          </Pressable>
        </View>
      </View>
      <ProfileModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default HomeHeader;
