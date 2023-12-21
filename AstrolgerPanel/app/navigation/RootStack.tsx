import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import AuthStack from './AuthStack';

const MainStack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={Routes.AuthStack} component={AuthStack} />
    </MainStack.Navigator>
  );
};

export default RootStack;
