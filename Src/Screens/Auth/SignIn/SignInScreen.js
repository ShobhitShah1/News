import { Alert, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../../Common/Global'
import { SubmitButton } from '../../../Common/SubmitButton'
import CheckBox from '../../../Common/CheckBox'
import CommonTextInput from '../../../Common/CommonTextInput'

const { width, height } = Dimensions.get('window')

export default function SignInScreen() {

    const [tearmsCheck, settearmsCheck] = React.useState(false);
    const [HeaderMeme, setHeaderMeme] = useState(false)

    React.useEffect(() => {
        setInterval(() => {
            setHeaderMeme(true)
        }, 2000);
      
    })

    return (
        <View style={styles.container}>
            <View style={styles.HeaderView}>
                {HeaderMeme === true ? (
                    <Image
                        style={{ width: 100, height: 40, resizeMode: 'cover' }}
                        source={{ uri: "https://media.tenor.com/_bRpTU5IlMYAAAAC/contract-official.gif" }}
                    />
                ) : (
                    <Text style={styles.signInHeaderText}>Sign In</Text>
                )}
            </View>

            <View style={{ marginHorizontal: 16 }}>
                <CommonTextInput
                    placeholder={"Enter Your Mail"}
                    placeholderTextColor={COLORS.white}
                />
            </View>

            <View style={styles.ButtonView}>
                <CheckBox
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    isSelected={tearmsCheck}
                    onPress={() => settearmsCheck(!tearmsCheck)}
                />
                <SubmitButton
                    title={tearmsCheck == false ? "Click On Check Box" : "Sign In"}
                    onPress={() => console.log("HELO")}
                    disabled={tearmsCheck === false ? true : false}
                    CustomButtonStyle={{
                        backgroundColor: tearmsCheck == false ? 'transparent' : COLORS.white,
                        borderWidth: tearmsCheck == false ? 1 : 0,
                        borderColor: tearmsCheck == false ? COLORS.white : null
                    }}
                    CustomButtonTextStyle={{
                        color: tearmsCheck == false ? COLORS.white : COLORS.black
                    }}
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
    },
    signInHeaderText: {
        color: COLORS.white,
        ...FONTS.h1
    },
    ButtonView: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: SIZES.padding,
    },
})