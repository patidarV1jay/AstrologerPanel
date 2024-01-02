import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeHeader, SecondaryHeader } from '../components';
import { Routes, ScreenString } from '../constants';
import { CallDetails, HomePage, UpdateProfile } from '../modules';

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
    </StackHome.Navigator>
  );
};

export default HomeStack;
