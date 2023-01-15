import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from './Global'

const { width, height } = Dimensions.get('window')

const CommonTextInput = ({
    placeholder,
    value,
    placeholderTextColor,
    onChangeText,
}) => {
    return (
        <TextInput
            style={styles.Textinput}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
        />
    )
}


const styles = StyleSheet.create({

    Textinput: {
        fontFamily: "Poppins-Bold",
        color: COLORS.white,
    }
})

export default CommonTextInput;