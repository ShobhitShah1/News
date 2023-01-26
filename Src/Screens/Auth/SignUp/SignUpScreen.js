import React from 'react';
import { Animated, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import AuthButton from '../../../Common/AuthComponents/AuthButton';
import OrView from '../../../Common/AuthComponents/OrView';
import SocialButtons from '../../../Common/AuthComponents/SocialButtons';
import CommonTextInput from '../../../Common/CommonTextInput';
import { COLORS, FAMILY, FONTS, SIZES } from '../../../Common/Global';
import { normalize } from '../../../Common/GlobalSize';
import Images from '../../../Common/Images';
import { login } from '../../../Redux/Actions/AuthAction';

const { width, height } = Dimensions.get('window')

export default function SignUpScreen({ navigation }) {

    const [darkModeStatus, setdarkModeStatus] = React.useState(false);
    const [Email, setEmail] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const [showPassword, setshowPassword] = React.useState(true);

    const [isNameFocused, setisNameFocused] = React.useState(false)
    const [isEmailFocused, setisEmailFocused] = React.useState(false)
    const [isPasswordFocused, setisPasswordFocused] = React.useState(false)

    const [tearmsCheck, settearmsCheck] = React.useState(false);
    const [HeaderMeme, setHeaderMeme] = React.useState(false);
    const [UserData, setUserData] = React.useState(null);

    const [isLoading, setIsLoading] = React.useState(false);
    const borderWidthAnim = React.useRef(new Animated.Value(0)).current;
    const borderColorAnim = React.useRef(new Animated.Value(0)).current;


    const handleFocusName = () => setisNameFocused(true)
    const handleBlurName = () => setisNameFocused(false)

    const handleFocusEmail = () => setisEmailFocused(true)
    const handleBlurEmail = () => setisEmailFocused(false)

    const handleFocusPassword = () => setisPasswordFocused(true)
    const handleBlurPassword = () => setisPasswordFocused(false)

    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(login(Email, Password));
    }

    return (
        <View style={[styles.container, { backgroundColor: darkModeStatus === true ? COLORS.tinBlack : COLORS.white, }]}>

            <ScrollView keyboardDismissMode='interactive' keyboardShouldPersistTaps="always">

                <Animated.View style={styles.headerContainer}>
                    <Animated.View style={styles.headerView}>
                        <Animated.Image
                            source={Images.SignIn1}
                            style={styles.images}
                        />
                    </Animated.View>

                    <Animated.View style={styles.headerTextView}>
                        <Animated.Text style={styles.headerText}>Become a member!</Animated.Text>
                    </Animated.View>
                </Animated.View>

                <KeyboardAvoidingView>

                    {/* Name View */}

                    <Animated.View style={{ width: width }}>
                        <Animated.View>
                            <Animated.View style={styles.inputheaderView}>
                                <Animated.Text style={styles.inputheaderText}>Your name</Animated.Text>
                            </Animated.View>

                            <Animated.View style={styles.fillDetailView}>
                                <CommonTextInput
                                    onFocus={handleFocusName}
                                    onBlur={handleBlurName}
                                    customStyleView={{ borderColor: isNameFocused === true ? COLORS.activeBorderColor : COLORS.textInputBorder }}
                                    placeholder={"Enter name"}
                                    placeholderTextColor={COLORS.tinBlack}
                                    renderRightView={
                                        <Animated.View>
                                            <FontAwesome name="user-o" color={isNameFocused === true ? COLORS.activeBorderColor : COLORS.tinBlack} size={20} />
                                        </Animated.View>
                                    }
                                />
                            </Animated.View>
                        </Animated.View>


                        {/* Email View */}


                        <Animated.View style={styles.stackview}>
                            <Animated.View style={styles.inputheaderView}>
                                <Animated.Text style={styles.inputheaderText}>E-mail address</Animated.Text>
                            </Animated.View>

                            <Animated.View style={styles.fillDetailView}>
                                <CommonTextInput
                                    value={Email}
                                    onChangeText={(value) => setEmail(value)}
                                    onFocus={handleFocusEmail}
                                    onBlur={handleBlurEmail}
                                    customStyleView={{ borderColor: isEmailFocused === true ? COLORS.activeBorderColor : COLORS.textInputBorder }}
                                    placeholder={"Enter email address"}
                                    placeholderTextColor={COLORS.tinBlack}
                                    renderRightView={
                                        <Animated.View>
                                            <MaterialIcons name="alternate-email" color={isEmailFocused === true ? COLORS.activeBorderColor : COLORS.tinBlack} size={20} />
                                        </Animated.View>
                                    }
                                />
                            </Animated.View>
                        </Animated.View>


                        {/* Password View */}

                        <Animated.View style={styles.stackview}>
                            <Animated.View style={styles.inputheaderView}>
                                <Animated.Text style={styles.inputheaderText}>Password</Animated.Text>
                            </Animated.View>

                            <Animated.View style={styles.fillDetailView}>
                                <CommonTextInput
                                    value={Password}
                                    onChangeText={(value) => setPassword(value)}
                                    onFocus={handleFocusPassword}
                                    onBlur={handleBlurPassword}
                                    customStyleView={{ borderColor: isPasswordFocused === true ? COLORS.activeBorderColor : COLORS.textInputBorder }}
                                    secureTextEntry={showPassword}
                                    checkPassword={true}
                                    placeholder={"Enter your password"}
                                    placeholderTextColor={COLORS.tinBlack}
                                    renderRightView={
                                        <TouchableOpacity onPress={() => {
                                            setshowPassword(!showPassword)
                                        }}>
                                            {showPassword ? (
                                                <Ionicons name="eye-off-outline" color={isPasswordFocused === true ? COLORS.activeBorderColor : COLORS.tinBlack} size={20} />
                                            ) : (
                                                <Ionicons name="eye-outline" color={isPasswordFocused === true ? COLORS.activeBorderColor : COLORS.tinBlack} size={20} />
                                            )
                                            }

                                        </TouchableOpacity>
                                    }
                                />
                            </Animated.View>
                        </Animated.View>
                    </Animated.View>
                </KeyboardAvoidingView>


                <OrView />

                <SocialButtons />

                <View style={styles.AuthButtonView}>
                    <AuthButton lable={"Create an account"} onPress={handleSignup} />
                </View>

                <View style={styles.haveAnAccountView}>
                    <Text style={styles.haveAnAccountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'SignIn' })}><Text style={[styles.haveAnAccountText, { color: COLORS.twitter }]}> Sign in</Text></TouchableOpacity>
                </View>

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    ButtonView: {
        position: 'absolute',
        bottom: normalize(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerContainer: {
        width: width
    },
    darkmodeView: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        top: 10
    },
    headerView: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    images: {
        width: width,
        height: normalize(200)
    },
    headerTextView: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: SIZES.padding
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.tinBlack
    },
    fillDetailView: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    stackview: {
        marginTop: normalize(8)
    },
    inputheaderView: {
        marginHorizontal: normalize(25),
        marginVertical: normalize(5),
        justifyContent: 'center',
    },
    inputheaderText: {
        color: COLORS.tinBlack,
        fontFamily: FAMILY.PoppinsRegular,
        fontSize: 15
    },
    AuthButtonView: {
        marginTop: normalize(15)
    },
    haveAnAccountView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10
    },
    haveAnAccountText: {
        fontFamily: FAMILY.PoppinsRegular,
        color: COLORS.tinBlack
    },
})