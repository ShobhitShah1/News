import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons'
import { COLORS, SIZES, FONTS } from './Global'

const CheckBox = ({
    contentContainerStyle,
    isSelected,
    onPress
}) => {
    return (
        <TouchableOpacity TouchableOpacity
            style={{
                ...contentContainerStyle,
                flexDirection: 'row',
                marginVertical: 10,
            }}
            onPress={onPress}
        >
            <Text style={{
                height: 25,
                width: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.base,
                borderWidth: 3,
                borderColor: isSelected ? COLORS.primary : COLORS.white,
                backgroundColor: isSelected ? COLORS.primary : null,
            }}>
                {
                    isSelected &&
                    <Image
                        source={Icons.CheckMark}
                        style={{
                            height: 18,
                            width: 18,
                            marginBottom: 5,
                            tintColor: COLORS.light,
                        }}
                    />

                }
            </Text>

            <Text style={{
                flex: 1,
                marginLeft: SIZES.base,
                ...FONTS.body5,
                marginTop: 3
            }}>
                By checking this box you agree out SCAM..
            </Text>
        </TouchableOpacity>
    )
}

export default CheckBox;