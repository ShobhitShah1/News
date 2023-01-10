import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../Common/Global'

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.HeaderView}>
                <Text style={{ color: COLORS.white, ...FONTS.h1 }}>Sign In</Text>
                <Image
                    style={{ width: 250, height: 250 }}
                    source={{ uri: "https://giphy.com/embed/oGO1MPNUVbbk4" }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    HeaderView: {
        margin: 20
    }
})