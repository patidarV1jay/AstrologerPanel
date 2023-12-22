import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SigninScreen } from '../modules';
import { Routes } from '../constants';
import SignupScreen from '../modules/auth/signup/SignupScreen';

const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <StackAuth.Navigator screenOptions={{ headerShown: false }}>
      <StackAuth.Screen name={Routes.Signin} component={SigninScreen} />
      <StackAuth.Screen name={Routes.Signup} component={SignupScreen} />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
