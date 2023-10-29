import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {COLORS} from '../Common/Global';
import {normalize} from '../Common/GlobalSize';
import BottomHome from '../Components/BottomTab/BottomHome';
import BottomProfile from '../Components/BottomTab/BottomProfile';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import BottomTabIcon from '../Common/BottomTabIcon';
import Icons from '../Common/Icons';

export default function BottomSheet() {
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: normalize(50),
          backgroundColor: COLORS.black,
          borderTopWidth: 0,
        },
      }}
      backBehavior="initialRoute">
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
