import React from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>

  );
}