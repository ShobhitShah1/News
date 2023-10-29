import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';

//* Screens
import SignInScreen from '../Screens/Auth/SignIn/SignInScreen';
import SignUpScreen from '../Screens/Auth/SignUp/SignUpScreen';
import SplashScreen from '../Screens/Splash/SplashScreen';
import BottomSheet from './BottomSheet';
import NetworkStatusListener from '../Components/InternetServices/NetworkStatusListener';
import CreateArtical from '../Screens/Create/CreateArtical';
import { COLORS } from '../Common/Global';

const Stack = createNativeStackNavigator();

export default function AKIONavigation() {
  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
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
          animationTypeForReplace: 'push',
          statusBarAnimation: 'slide',
          // navigationBarColor: COLORS.black,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="CreateArtical" component={CreateArtical} />
      </Stack.Navigator>
      <NetworkStatusListener />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
