import { View, Text, StatusBar, Pressable } from 'react-native';
import React from 'react';
import { Colors, moderateScale } from '../../themes';
import { Screen } from 'react-native-screens';
import { ScreenString } from '../../constants';
import { Bell, DotsThreeVertical, Presentation } from 'phosphor-react-native';
import styles from './HomeHeaderStyles';

const HomeHeader = () => {
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
            <Pressable>
              <DotsThreeVertical
                size={moderateScale(30)}
                weight="bold"
                color={Colors.light}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeHeader;
