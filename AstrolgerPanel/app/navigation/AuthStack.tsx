import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SigninScreen } from '../modules';
import { Routes } from '../constants';

const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <StackAuth.Navigator screenOptions={{ headerShown: false }}>
      <StackAuth.Screen name={Routes.Signin} component={SigninScreen} />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
