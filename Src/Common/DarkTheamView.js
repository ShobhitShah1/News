import { StyleSheet, Text, Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import { normalize } from './GlobalSize'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from './Global'

const SIZE = 40;

const DarkTheamView = ({
    darkModeStatus,
    onPress
}) => {

    return (
        <Animated.View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7}
                onPress={onPress}
            >
                {
                    darkModeStatus == true ? (
                        <Icon name={"lightbulb"} color={darkModeStatus ? COLORS.white : COLORS.tinBlack} size={SIZE} style={styles.iconview} />
                    ) : (
                        <Icon name={"lightbulb-outline"} color={darkModeStatus ? COLORS.white : COLORS.tinBlack} size={SIZE} style={styles.iconview} />
                    )
                }
            </TouchableOpacity>
        </Animated.View>
    )
}

export default DarkTheamView;

const styles = StyleSheet.create({
    container: {
        width: normalize(SIZE),
        height: normalize(SIZE),
    },
    iconview: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
})