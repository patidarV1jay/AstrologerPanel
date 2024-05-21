/**
 * @format
 */
import 'react-native-gesture-handler';
import { Alert, AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(remoteMessage, 'asdf');
});

AppRegistry.registerComponent(appName, () => App);
