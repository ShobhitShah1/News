import { BlurView } from '@react-native-community/blur';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { MotiView } from 'moti';
import React from 'react';
import { Animated, Dimensions, Keyboard, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { useToast } from "react-native-toast-notifications";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import AuthButton from '../../../Common/AuthComponents/AuthButton';
import OrView from '../../../Common/AuthComponents/OrView';
import SocialButtons from '../../../Common/AuthComponents/SocialButtons';
import CommonTextInput from '../../../Common/CommonTextInput';
import { COLORS, FAMILY, FONTS, SIZES } from '../../../Common/Global';
import { normalize } from '../../../Common/GlobalSize';
import Images from '../../../Common/Images';

const { width, height } = Dimensions.get('window')

function SignInScreen(props) {

    const toast = useToast();
 
    const { data } = props
    const navigation = useNavigation();

    const [darkModeStatus, setdarkModeStatus] = React.useState(false);
    const [Email, setEmail] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const [showPassword, setshowPassword] = React.useState(true);
    const [isLoading, setisLoading] = React.useState(false);
    const [visible, setvisible] = React.useState(false);

    const [isNameFocused, setisNameFocused] = React.useState(false);
    const [isEmailFocused, setisEmailFocused] = React.useState(false);
    const [isPasswordFocused, setisPasswordFocused] = React.useState(false);
  
    const handleFocusEmail = () => setisEmailFocused(true);
    const handleBlurEmail = () => setisEmailFocused(false);

    const handleFocusPassword = () => setisPasswordFocused(true);
    const handleBlurPassword = () => setisPasswordFocused(false);

    const Validation = () => {
        console.log("Validation");
        if (Email === null) {
            toast.show("Enter Email", {
                type: "custom_toast",
                title: null,
                status: 'fail'
            });
            Vibration.vibrate(50)
        } else if (Password === null) {
            toast.show("Enter Password", {
                type: "custom_toast",
                title: null,
                status: 'fail'
            });
            Vibration.vibrate(50)
        } else {
            handleSignIn()
        }
    }

    const handleSignIn = () => {
        setisLoading(true)
        auth()
            .signInWithEmailAndPassword(Email, Password)
            .then((res) => {
                setisLoading(false)
                console.log(res);
                toast.show('Login successfully ✨', {
                    type: "custom_toast",
                    title: "Woooh! Welcome 🚀",
                    status: 'success'
                });
                Vibration.vibrate(50)
                setTimeout(() => {
                    navigation.replace('BottomSheet', { screen: 'HomeScreen' })
                }, 300);
            })
            .catch((err) => {
                console.log(err);
                setisLoading(false)
                toast.show(err.message, {
                    type: "custom_toast",
                    title: 'Something went wrong',
                    status: 'fail'
                });
                Vibration.vibrate(50)
            })
    }

    const renderModal = () => {
        return (
            <Modal visible={visible}>
                <BlurView blurAmount={10} style={{ flex: 1, justifyContent: 'center' }}>
                    <MotiView style={{ justifyContent: 'center', alignSelf: 'center', borderColor: COLORS.black, borderWidth: 1, width: width - normalize(50), height: height - normalize(50) }}>
                        <TouchableOpacity onPress={() => setvisible(false)} style={{ width: 250, height: 50, backgroundColor: COLORS.black, justifyContent: 'center', alignSelf: 'center', borderRadius: normalize(10) }}>
                            <Text style={{ textAlign: 'center', ...FONTS.h2 }}>Close</Text>
                        </TouchableOpacity>
                    </MotiView>
                </BlurView>
            </Modal>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: darkModeStatus === true ? COLORS.tinBlack : COLORS.white, }]}>

            <ScrollView keyboardShouldPersistTaps="handled">

                <Animated.View style={styles.headerContainer}>
                    <Animated.View style={styles.headerView}>
                        <Animated.Image
                            source={Images.SignIn2}
                            style={styles.images}
                        />
                    </Animated.View>

                    <Animated.View style={styles.headerTextView}>
                        <Animated.Text style={styles.headerText}>Welcome back!</Animated.Text>
                    </Animated.View>
                </Animated.View>

                <KeyboardAvoidingView>

                    {/* Name View */}

                    <Animated.View style={{ width: width }}>


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
                                            <MaterialIcons name="alternate-email" color={COLORS.tinBlack} size={20} />
                                        </Animated.View>
                                    }
                                />
                            </Animated.View>
                        </Animated.View>


                        {/* Password View */}

                        <Animated.View style={styles.stackview}>
                            <Animated.View style={[styles.inputheaderView, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                <Animated.Text style={styles.inputheaderText}>Password</Animated.Text>
                                {/* <TouchableOpacity onPress={() => setvisible(true)}>
                                    <Animated.Text style={styles.ForgotText}>Forgot password?</Animated.Text>
                                </TouchableOpacity> */}
                            </Animated.View>

                            <Animated.View style={styles.fillDetailView}>
                                <CommonTextInput
                                    value={Password}
                                    onChangeText={(value) => setPassword(value)}
                                    onFocus={handleFocusPassword}
                                    onBlur={handleBlurPassword}
                                    customStyleView={{ borderColor: isPasswordFocused === true ? COLORS.activeBorderColor : data.error !== null ? COLORS.red : COLORS.textInputBorder }}
                                    secureTextEntry={showPassword}
                                    checkPassword={true}
                                    placeholder={"Enter your password"}
                                    placeholderTextColor={COLORS.tinBlack}
                                    renderRightView={
                                        <TouchableOpacity onPress={() => {
                                            setshowPassword(!showPassword)
                                        }}>
                                            {showPassword ? (
                                                <Ionicons name="eye-off-outline" color={COLORS.tinBlack} size={20} />
                                            ) : (
                                                <Ionicons name="eye-outline" color={COLORS.tinBlack} size={20} />
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

                <View style={styles.BottomView}>
                    <View style={styles.AuthButtonView}>
                        <AuthButton lable={"Log in"} onPress={() => {
                            Keyboard.dismiss()
                            Validation()
                        }} isLoading={isLoading} />
                    </View>

                    <View style={styles.haveAnAccountView}>
                        <Text style={styles.haveAnAccountText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'SignUp' })}><Text style={[styles.haveAnAccountText, { color: COLORS.twitter }]}> Sign up now.</Text></TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
            {renderModal()}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (data) => dispatch(updateData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

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
    ForgotText: {
        color: COLORS.tinBlack,
        fontFamily: FAMILY.PoppinsRegular,
        fontSize: 15,
        textDecorationLine: 'underline'
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
    BottomView: {
        marginVertical: 10
        // position: 'absolute',
        // bottom: 0
    }
})