import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/store'
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import UserProfileScreen from './src/screens/views/UserProfileScreen'

const { store, persistor } = configureStore()
persistor.purge()


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider>
            {/* <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
              <Pressable onPress={() => onDisplayNotification()}>
                <Text>Open up App.js to start working on your app!</Text>
              </Pressable>
            </Box> */}
            <UserProfileScreen />
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}