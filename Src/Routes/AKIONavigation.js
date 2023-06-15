import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PermissionsAndroid, StyleSheet } from 'react-native';

// Screens
import { useEffect } from 'react';
import AuthHome from '../Screens/Auth/Authhome/AuthHome';
import SignInScreen from '../Screens/Auth/SignIn/SignInScreen';
import SignUpScreen from '../Screens/Auth/SignUp/SignUpScreen';
import ChatScreen from '../Screens/Chat/ChatScreen';
import SplashScreen from '../Screens/Splash/SplashScreen';
import BottomSheet from './BottomSheet';

const Stack = createNativeStackNavigator();

export default function AKIONavigation() {
  useEffect(() => {
    requestSTORAGEPermission();
  }, []);

  const requestSTORAGEPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App READ_EXTERNAL_STORAGE Permission',
          message:
            'Cool Photo App needs access to your READ_EXTERNAL_STORAGE ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the READ_EXTERNAL_STORAGE');
      } else {
        console.log('READ_EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthHome" component={AuthHome} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
