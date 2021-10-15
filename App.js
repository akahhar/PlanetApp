import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import MyWebView from './src/screens/MyWebView';


const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
          <Stack.Screen name="MyWebView" component={MyWebView} options={{ headerShown: false }} />

        </Stack.Navigator>
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    );
  }
}
