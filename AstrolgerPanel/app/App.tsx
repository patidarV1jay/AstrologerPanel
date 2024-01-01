import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootStack } from './navigation';
import { persistor, store } from './redux';

const App = () => {
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
