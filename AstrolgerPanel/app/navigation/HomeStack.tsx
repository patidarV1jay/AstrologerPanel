import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { HomePage } from '../modules';
import { HomeHeader } from '../components';

const StackHome = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name={Routes.HomeScreen}
        component={HomePage}
        options={{ header: () => <HomeHeader /> }}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
