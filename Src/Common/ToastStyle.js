import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from './Global'

const ToastStyle = ({
    status,
    title,
    message,
}) => {
    console.log("status",status);
    return (
        <View style={{
            width: "85%",
            paddingVertical: 10,
            backgroundColor: COLORS.white,
            marginVertical: 4,
            borderRadius: 8,
            borderLeftColor: status === 'success' ? 'green' : 'red',
            borderLeftWidth: 10,
            paddingHorizontal: 16,
            flexDirection: "row",
        }}>
            <View>
                {
                    title === null ? (
                        <Text style={{ color: COLORS.black, ...FONTS.h4, marginVertical: 5 }}>{message}</Text>
                    ) : (
                        <View>
                            <Text Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{title}</Text>
                            <Text style={{ color: COLORS.gray, ...FONTS.h4 }}>{message}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export default ToastStyle

const styles = StyleSheet.create({})