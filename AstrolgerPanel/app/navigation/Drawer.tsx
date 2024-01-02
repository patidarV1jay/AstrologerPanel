import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import { CustomDrawer } from '../components';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNav.Navigator screenOptions={{ headerShown: false }}  drawerContent={props => <CustomDrawer children={undefined} {...props} />}>
      <DrawerNav.Screen name="Home" component={HomeStack} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
