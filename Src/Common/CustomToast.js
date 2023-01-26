import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Animated, useRef } from 'react-native';

const useToast = () => {
    const [message, setMessage] = React.useState('');
    const bottom = React.useRef(new Animated.Value(-70)).current;

    const animatedStyles = {
        bottom: bottom.interpolate({
            inputRange: [-70, 0],
            outputRange: [-70, 0],
        }),
    };

    const show = (message) => {
        LayoutAnimation.configureNext({
            duration: 500,
            update: {
                type: LayoutAnimation.Types.easeInEaseOut,
            },
        });
        setMessage(message);
        Animated.timing(bottom, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    const hide = () => {
        LayoutAnimation.configureNext({
            duration: 500,
            update: {
                type: LayoutAnimation.Types.easeInEaseOut,
            },
        });
        Animated.timing(bottom, {
            toValue: -70,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    return { message, animatedStyles, show, hide };
};

export default useToast;
