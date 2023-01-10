import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from './Global'

const { width, height } = Dimensions.get('window')

export const SubmitButton = ({
    CustomButtonStyle,
    CustomButtonTextStyle,
    onPress,
    title,
    disabled
}) => {
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.8} style={[styles.ButtonStyle,{...CustomButtonStyle}]} onPress={onPress}>
            <Text style={[styles.ButtonText,{...CustomButtonTextStyle}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ButtonStyle: {
        width: width - 50,
        height: 50,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: SIZES.radius,
    },
    ButtonText: {
        textAlign: 'center',
        color: COLORS.black,
        ...FONTS.h2
    }
})