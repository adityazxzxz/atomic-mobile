import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/store'
import { NativeBaseProvider, Text, Box, Pressable } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import notifee from '@notifee/react-native';
import UserProfileScreen from './src/screens/views';

const { store, persistor } = configureStore()
persistor.purge()
async function onDisplayNotification() {
  console.log('notif run')
  // Request permissions (required for iOS)
  // await notifee.requestPermission()

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: 'Notification Title',
    body: 'Main body content of the notification',
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
}

export default function App() {
  // 2. Use at the root of your app
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