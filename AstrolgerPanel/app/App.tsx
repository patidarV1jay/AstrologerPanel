import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootStack } from './navigation';
import { persistor, store } from './redux';
import { getFcmToken, notificationListener, requestUserPermission } from './utils';

const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{color: 'red'}}>Loading...</Text>
    <ActivityIndicator />
  </View>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle other initializations here
    requestUserPermission();
    notificationListener();
    getFcmToken();

    // Simulate a short delay for the splash screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // You can adjust the delay
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

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
