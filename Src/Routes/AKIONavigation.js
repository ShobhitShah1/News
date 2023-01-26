import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
 

// Screens
import AuthHome from '../Screens/Auth/Authhome/AuthHome'
import SignInScreen from '../Screens/Auth/SignIn/SignInScreen'
import SignUpScreen from '../Screens/Auth/SignUp/SignUpScreen'
import HomeScreen from '../Screens/Home/HomeScreen'
import Index from '../Screens/Notifications/Index'
import SplashScreen from '../Screens/Splash/SplashScreen'

export default function AKIONavigation() {

    const Stack = createNativeStackNavigator();

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

    const HomeStack = () => {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
        )
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Splash' component={SplashScreen} />
                    <Stack.Screen name='Auth' component={AuthStack} />
                    <Stack.Screen name='Home' component={HomeStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({})