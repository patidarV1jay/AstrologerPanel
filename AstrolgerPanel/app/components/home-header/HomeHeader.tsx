import { View, Text, StatusBar, Pressable, Settings } from 'react-native';
import React from 'react';
import { Colors, moderateScale } from '../../themes';
import { Screen } from 'react-native-screens';
import { ScreenString } from '../../constants';
import { Bell, DotsThreeVertical, Presentation } from 'phosphor-react-native';
import styles from './HomeHeaderStyles';
import useHomeHeader from './useHomeHeader';
import ProfileModal from './ProfileModal';

const HomeHeader = () => {
  const { isModalVisible, setIsModalVisible } = useHomeHeader();
  return (
    <>
      <StatusBar backgroundColor={Colors.orange} barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
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
      </View>
      <ProfileModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default HomeHeader;
