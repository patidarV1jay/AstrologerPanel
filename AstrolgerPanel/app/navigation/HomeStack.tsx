import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeHeader, SecondaryHeader } from '../components';
import { Routes, ScreenString } from '../constants';
import {
  CallDetails,
  EarningDetails,
  HomePage,
  UpdateProfile,
  SetRate,
  ApplyLeave,
  MyPerformace,
} from '../modules';

const StackHome = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name={Routes.HomeScreen}
        component={HomePage}
        options={{ header: () => <HomeHeader /> }}
      />
      <StackHome.Screen
        name={Routes.UpdateProfile}
        component={UpdateProfile}
        options={{
          header: () => <SecondaryHeader title={ScreenString.updateProfile} />,
        }}
      />
      <StackHome.Screen
        name={Routes.CallDetails}
        component={CallDetails}
        options={{
          header: () => <SecondaryHeader title={ScreenString.callDetais} />,
        }}
      />
      <StackHome.Screen
        name={Routes.EarningDetails}
        component={EarningDetails}
        options={{
          header: () => <SecondaryHeader title={ScreenString.earningDetails} />,
        }}
      />
      <StackHome.Screen
        name={Routes.SetRate}
        component={SetRate}
        options={{
          header: () => <SecondaryHeader title={Routes.SetRate} />,
        }}
      />
      <StackHome.Screen
        name={Routes.Leave}
        component={ApplyLeave}
        options={{
          header: () => <SecondaryHeader title={Routes.Leave} />,
        }}
      />
      <StackHome.Screen
        name={Routes.MyPerformance}
        component={MyPerformace}
        options={{
          header: () => <SecondaryHeader title={Routes.MyPerformance} />,
        }}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
