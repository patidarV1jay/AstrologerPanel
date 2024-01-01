import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useAppSelector } from '../redux';

const MainStack = createNativeStackNavigator();

const RootStack = () => {
  const { isSuccess } = useAppSelector(state => state.signin);
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isSuccess ? Routes.HomeStack : Routes.AuthStack}>
      <MainStack.Screen name={Routes.AuthStack} component={AuthStack} />
      <MainStack.Screen name={Routes.HomeStack} component={HomeStack} />
    </MainStack.Navigator>
  );
};

export default RootStack;
