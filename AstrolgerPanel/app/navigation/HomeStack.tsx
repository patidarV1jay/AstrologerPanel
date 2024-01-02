import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes, ScreenString } from '../constants';
import { HomePage } from '../modules';
import { HomeHeader } from '../components';
import { UpdateProfile } from '../modules';
import { SecondaryHeader } from '../components';

const StackHome = createNativeStackNavigator();

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
        options={{ header: () => <SecondaryHeader title={ScreenString.updateProfile}/> }}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
