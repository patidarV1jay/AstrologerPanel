import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootStack } from './navigation';
import { persistor, store } from './redux';
import { getFcmToken, notificationListener, requestUserPermission } from './utils';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
    getFcmToken()
  }, []);

  return (
    <NavigationContainer> 
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
