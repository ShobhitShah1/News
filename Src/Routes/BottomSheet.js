import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { normalize } from '../Common/GlobalSize';
import BottomChat from '../Components/BottomTab/BottomChat';
import BottomHome from '../Components/BottomTab/BottomHome';
import BottomProfile from '../Components/BottomTab/BottomProfile';
import ChatScreen from '../Screens/Chat/ChatScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

export default function BottomSheet() {
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: normalize(50),
        },
      }}>
      <Bottom.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <BottomChat focused={focused} />;
          },
          tabBarShowLabel: false,
        }}
      />
      <Bottom.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <BottomHome focused={focused} />;
          },
          tabBarShowLabel: false,
        }}
      />
      <Bottom.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <BottomProfile focused={focused} />;
          },
          tabBarShowLabel: false,
        }}
      />
    </Bottom.Navigator>
  );
}
