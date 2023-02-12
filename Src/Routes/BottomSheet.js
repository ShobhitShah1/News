import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/Home/HomeScreen';
import { normalize } from '../Common/GlobalSize';
import Images from '../Common/Images';
import Icons from '../Common/Icons';
import { COLORS, SIZES } from '../Common/Global';

export default function BottomSheet() {

    const Bottom = createBottomTabNavigator();

    return (
        <Bottom.Navigator
            screenOptions={{

            }}
        >
            <Bottom.Screen name='HomeScreen' component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image source={Icons.HomeBlack} style={{ width: SIZES.bottombaricon, height: SIZES.bottombaricon, justifyContent: 'center', alignSelf: 'center' }} />
                        </View>
                    )
                },
                tabBarShowLabel: false,
            }} />
            <Bottom.Screen name='HomeScreen1' component={HomeScreen} />
            <Bottom.Screen name='HomeScreen2' component={HomeScreen} />
            <Bottom.Screen name='HomeScreen3' component={HomeScreen} />
            <Bottom.Screen name='HomeScreen4' component={HomeScreen} />
        </Bottom.Navigator>
    )
}