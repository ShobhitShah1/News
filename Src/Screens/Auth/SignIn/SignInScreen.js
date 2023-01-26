import React from 'react';
import { Alert, Animated, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonTextInput from '../../../Common/CommonTextInput';
import { COLORS, FAMILY, FONTS, SIZES } from '../../../Common/Global';
import { normalize } from '../../../Common/GlobalSize';
import Images from '../../../Common/Images';
import OrView from '../../../Common/AuthComponents/OrView';
import SocialButtons from '../../../Common/AuthComponents/SocialButtons';
import AuthButton from '../../../Common/AuthComponents/AuthButton';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login, loginError } from '../../../Redux/Actions/AuthAction';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import useToast from '../../../Common/CustomToast';
import Toast from '../../../Helpers/Toast';
import { toast } from '@backpackapp-io/react-native-toast';
import { MotiText, MotiView } from 'moti';
import { BlurView } from '@react-native-community/blur';


const { width, height } = Dimensions.get('window')

function SignInScreen(props) {

    const SignupRes = useSelector((value) => value.auth);
    const { data } = props
    const navigation = useNavigation();

    const { message, animatedStyles, show, hide } = useToast();

    const [darkModeStatus, setdarkModeStatus] = React.useState(false);
    const [Email, setEmail] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const [showPassword, setshowPassword] = React.useState(true);
    const [isLoading, setisLoading] = React.useState(false);
    const [visible, setvisible] = React.useState(false);

    const [isNameFocused, setisNameFocused] = React.useState(false);
    const [isEmailFocused, setisEmailFocused] = React.useState(false);
    const [isPasswordFocused, setisPasswordFocused] = React.useState(false);

    const [tearmsCheck, settearmsCheck] = React.useState(false);
    const [HeaderMeme, setHeaderMeme] = React.useState(false);
    const [UserData, setUserData] = React.useState(null);

    const handleFocusEmail = () => setisEmailFocused(true);
    const handleBlurEmail = () => setisEmailFocused(false);

    const handleFocusPassword = () => setisPasswordFocused(true);
    const handleBlurPassword = () => setisPasswordFocused(false);


    const dispatch = useDispatch();

    const Validation = () => {
        if (Email == null) {
            alert("Helo")
        }
        if (Password == '') {
            alert("Helo")
        }
    }

    const handleSignIn = () => {
        setisLoading(true)
        auth()
            .signInWithEmailAndPassword(Email, Password)
            .then((res) => {
                setisLoading(false)
                navigation.navigate('Home', { screen: 'HomeScreen' })


            })
            .catch((err) => {
                setisLoading(false)
                Alert.alert("Error", JSON.stringify(err))
            })
    }

    // const handleSignIn = () => {
    //     dispatch(login(Email, Password))
    //     if (data.error == null) {
    //         Alert.alert("Shobhit",)
    //     } else {
    //         console.log("SignupRes", SignupRes.error);
    //     }
    // }

    const renderModal = () => {
        return (
            <Modal visible={visible}>
                <BlurView blurAmount={10} style={{ flex: 1, justifyContent: 'center' }}>
                    <MotiView style={{ justifyContent: 'center', alignSelf: 'center', width: 250, height: 250, }}>
                        <TouchableOpacity onPress={() => setvisible(false)}>
                            <Text style={{ ...FONTS.h2, textAlign: 'center' }}>Helcdscdscslo</Text>
                        </TouchableOpacity>
                    </MotiView>
                </BlurView>
            </Modal>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: darkModeStatus === true ? COLORS.tinBlack : COLORS.white, }]}>

            <ScrollView>

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
                                <TouchableOpacity>
                                    <Animated.Text style={styles.ForgotText}>Forgot password?</Animated.Text>
                                </TouchableOpacity>
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
                        <AuthButton lable={props.data.isLoading === true ? "Loading..." : "Log in"} onPress={() => {
                            setvisible(true)
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