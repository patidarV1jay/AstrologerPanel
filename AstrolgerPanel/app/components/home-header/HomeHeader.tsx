import { Bell, DotsThreeVertical, List } from 'phosphor-react-native';
import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';
import { ScreenString } from '../../constants';
import { Colors, moderateScale } from '../../themes';
import styles from './HomeHeaderStyles';
import ProfileModal from './ProfileModal';
import useHomeHeader from './useHomeHeader';

const HomeHeader = () => {
  const { isModalVisible, setIsModalVisible, navigation } = useHomeHeader();
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
        {/* <View style={styles.creditContainer}>
          <Text style={styles.dailyCreditText}>{ScreenString.dailyCredit}</Text>
          <Text style={styles.rupeesText}>₹ 800.00</Text>
        </View> */}
      </View>
      <ProfileModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default HomeHeader;
