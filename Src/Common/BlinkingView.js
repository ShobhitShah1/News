import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { COLORS } from './Global';

const BlinkView = ({ message }) => {
    const [visible, setVisible] = useState(true);
    const opacity = new Animated.Value(1);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: -1 } // loop indefinitely
        ).start();
    }, [opacity]);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {visible && (
                <Animated.View style={{ opacity }}>
                    <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>{message}</Text>
                </Animated.View>
            )}
        </View>
    );
};

const BlinkingView = () => {
    return (
        <View>
            <BlinkView message="Hello, this is a blink view!" />
        </View>
    );
};

export default BlinkingView;
