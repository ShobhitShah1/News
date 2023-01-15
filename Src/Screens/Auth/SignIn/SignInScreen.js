// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Animated, StyleSheet } from 'react-native';

// export const SignInScreen = () => {
//     const [placeholder, setPlaceholder] = useState('Enter your name');
//     const [animatedValue] = useState(new Animated.Value(0));
//     const [placeholders] = useState(['Enter your name', 'Enter your email', 'Enter your phone number']);
//     const [placeholderIndex, setPlaceholderIndex] = useState(0);

//     // useEffect(() => {
//     //     Animated.timing(animatedValue, {
//     //         toValue: 1,
//     //         duration: 500,
//     //         useNativeDriver: true,
//     //     }).start(() => {
//     //         setTimeout(() => {
//     //             setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
//     //             setPlaceholder(placeholders[placeholderIndex]);
//     //             animatedValue.setValue(0);
//     //         }, 5000);
//     //     });
//     // }, [placeholderIndex]);

//     // const placeholderOpacity = animatedValue.interpolate({
//     //     inputRange: [0, 1],
//     //     outputRange: [1, 0],
//     // });

//     return (
//         <Animated.View style={styles.container}>
//             <Animated.TextInput
//                 style={styles.input}
//                 placeholder={placeholder}
//             // placeholderOpacity={placeholderOpacity}
//             />
//         </Animated.View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     input: {
//         width: '80%',
//         padding: 12,
//         marginBottom: 20,
//         backgroundColor: '#fff',
//         borderRadius: 5,
//         fontSize: 18,
//     },
// });


import { Alert, Animated, Button, Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../Common/Global'
import { SubmitButton } from '../../../Common/SubmitButton'
import CheckBox from '../../../Common/CheckBox'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { TopView } from '../../../Common/AuthComponents/TopView'

const { width, height } = Dimensions.get('window')

export default function SignInScreen() {

    const [Email, setEmail] = React.useState(null);

    const [tearmsCheck, settearmsCheck] = React.useState(false);
    const [HeaderMeme, setHeaderMeme] = React.useState(false);
    const [UserData, setUserData] = React.useState(null)

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '783248165978-s0t5jh52ncpija7mak48p3pfps8ukpcv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
        iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserData(userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.headerView}>
                <Text style={styles.headerText}>Welcome 🐒</Text>
            </View>

            <TopView
                value={Email}
                onChangeText={(value) => setEmail(value)}
                placeholder={"Your Email"}
            />

            <View style={styles.ButtonView}>
                <CheckBox
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
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
    ButtonView: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
    headerView: {
        justifyContent: 'center',
        alignSelf: 'center',
        top: 30
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white
    },
})