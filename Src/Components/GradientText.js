import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from '../Common/Global';

const GradientText = ({ children, colors }) => {
   console.log("children",children)
    return (
        <View style={styles.container}>
            <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
                <Text style={styles.text}>{children}</Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    gradient: {
        // flex: 1,
    },
    text: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});

export default GradientText;
