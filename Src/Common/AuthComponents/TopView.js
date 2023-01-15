import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FAMILY, FONTS } from '../Global'

const {width, height} = Dimensions.get('window')

export const TopView = ({
    value,
    onChangeText,
    placeholder
}) => {
    return (
        <View style={styles.container}> 

            <View style={styles.TextInputView}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    // placeholderTextColor={COLORS.white}
                    style={styles.TextInput}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignSelf:'center',
        justifyContent:'center',
        flex: 1
    }, 
    TextInputView: {
        alignContent: 'center',
        justifyContent: 'center',
        width: width - 50,
        height: 50,
        backgroundColor: COLORS.black,
        borderRadius: 10
    },
    TextInput: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'normal',
        paddingTop: 0,
        paddingBottom: 0,
        fontFamily: FAMILY.PoppinsRegular,
        justifyContent:'center',
        alignItems:'center'
    }
})