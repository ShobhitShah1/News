import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import NetworkStatusListener from '../Components/InternetServices/NetworkStatusListener';
import AuthHome from '../Screens/Auth/Authhome/AuthHome';
import SignInScreen from '../Screens/Auth/SignIn/SignInScreen';
import SignUpScreen from '../Screens/Auth/SignUp/SignUpScreen';
import CreateArticle from '../Screens/Create/CreateArticle';
import SplashScreen from '../Screens/Splash/SplashScreen';
import BottomSheet from './BottomSheet';

const Stack = createNativeStackNavigator();

export default function AKIONavigation() {
  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
          statusBarAnimation: 'slide',
        }}>
        {/* <Stack.Screen name="AuthHome" component={AuthHome} /> */}
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
          gestureDirection: 'horizontal',
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
          statusBarAnimation: 'slide',
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="CreateArticle" component={CreateArticle} />
      </Stack.Navigator>
      <NetworkStatusListener />
    </NavigationContainer>
  );
}
