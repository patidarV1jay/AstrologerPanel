import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Article,
  Book,
  ChartBar,
  ChartLineUp,
  CurrencyInr,
  Envelope,
  Notebook,
  Phone,
  SignOut,
} from 'phosphor-react-native';
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
import { Routes } from '../../constants';
import { Colors, moderateScale } from '../../themes';
import styles from './CustomDrawerStyles';
import useCustomDrawer from './useCustomDrawer';

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
        <DrawerItem
          focused={Routes.CallDetails === 'Call Details'}
          label={Routes.CallDetails}
          onPress={() => navigation.navigate(Routes.CallDetails)}
          labelStyle={styles.label}
          icon={({ focused }) => (
            <Phone size={moderateScale(28)} weight="bold" />
          )}
        />
        <DrawerItem
          focused={Routes.SetRate === 'Set Rate'}
          label={Routes.SetRate}
          onPress={() => navigation.navigate(Routes.SetRate)}
          labelStyle={styles.label}
          icon={({}) => <CurrencyInr size={moderateScale(28)} weight="bold" />}
        />
        <DrawerItem
          focused
          label={Routes.MyPerformance}
          onPress={() => navigation.navigate(Routes.MyPerformance)}
          labelStyle={styles.label}
          icon={({}) => <ChartLineUp size={moderateScale(28)} weight="bold" />}
        />
        <DrawerItem
          focused
          label={Routes.PayReport}
          onPress={() => navigation.navigate(Routes.MyPerformance)}
          labelStyle={styles.label}
          icon={({}) => <Article size={moderateScale(28)} weight="bold" />}
        />
        <DrawerItem
          focused
          label={Routes.Articles}
          onPress={() => navigation.navigate(Routes.MyPerformance)}
          labelStyle={styles.label}
          icon={({}) => <Notebook size={moderateScale(28)} weight="bold" />}
        />
        <DrawerItem
          focused
          label={Routes.Leave}
          onPress={() => navigation.navigate(Routes.Leave)}
          labelStyle={styles.label}
          icon={({}) => <Envelope size={moderateScale(28)} weight="bold" />}
        />
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
