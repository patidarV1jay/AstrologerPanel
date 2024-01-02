import { DrawerContentScrollView } from '@react-navigation/drawer';
import { SignOut } from 'phosphor-react-native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  ScrollViewProps,
  Text,
  View,
} from 'react-native';
import { Images } from '../../assets';
import styles from './CustomDrawerStyles';
import useCustomDrawer from './useCustomDrawer';
import { Colors } from '../../themes';

const CustomDrawer = (
  props: React.JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>,
) => {
  const { navigation, signOut } = useCustomDrawer();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        style={{ flex: 1, backgroundColor: Colors.light }}>
        <View style={styles.drawerContainer}>
          <View style={styles.drawerContent}>
            <Image source={Images.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.name}>Aacharya Hardeep</Text>
              <Text style={styles.text}>hardeepsaini78@gmail.com</Text>
              <View style={styles.spaceBetween}>
                <Text style={styles.text}>ID: 4579</Text>
                <Text style={styles.text}>Followers: 32</Text>
              </View>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <Pressable style={styles.footer} onPress={signOut}>
        <View style={styles.signOutView}>
          <SignOut size={32} weight="bold" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomDrawer;
