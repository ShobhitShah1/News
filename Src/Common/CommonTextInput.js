import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS } from './Global'

const CommonTextInput = ({
    placeholder,
    value,
    placeholderTextColor,
    onChangeText,
    textInputStyle,
    containerStyle
}) => {
    return (
        <View>
            <TextInput
                style={styles.Textinput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
}
 

const styles = StyleSheet.create({
    Textinput:{
        ...FONTS.h1
    }
})

export default CommonTextInput;