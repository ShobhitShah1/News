import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// Global Component
import { normalize } from '../Common/GlobalSize'

// Screens
import SplashScreen from '../Screens/Splash/SplashScreen';
import SignInScreen from '../Screens/Auth/SignIn/SignInScreen'
import SignUpScreen from '../Screens/Auth/SignUp/SignUpScreen'
import AuthHome from '../Screens/Auth/Authhome/AuthHome'

export default function AKIONavigation() {

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='AuthHome' component={AuthHome} />
                <Stack.Screen name='SignIn' component={SignInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
            </Stack.Navigator>
        )
    } 

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Auth' component={AuthStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})