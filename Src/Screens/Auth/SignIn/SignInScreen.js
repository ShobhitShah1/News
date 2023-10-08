import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect, useSelector} from 'react-redux';
import AuthButton from '../../../Common/AuthComponents/AuthButton';
import OrView from '../../../Common/AuthComponents/OrView';
import SocialButtons from '../../../Common/AuthComponents/SocialButtons';
import CommonTextInput from '../../../Common/CommonTextInput';
import {COLORS, FAMILY, FONTS, SIZES} from '../../../Common/Global';
import {normalize} from '../../../Common/GlobalSize';
import Images from '../../../Common/Images';
import {GoogleSigninAction, Signin} from '../../../Redux/Actions/AuthAction';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Loader from '../../../Common/Loader';
import {store} from '../../../Redux/Store/Store';
import * as ActionType from '../../../Redux/Actions/ActionType';

const {width, height} = Dimensions.get('window');

function SignInScreen() {
  const toast = useToast();
  const isLoading = useSelector(state => state.Loading.Loading);

  const navigation = useNavigation();
  const [Email, setEmail] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const [showPassword, setshowPassword] = React.useState(true);
  const [isEmailFocused, setisEmailFocused] = React.useState(false);
  const [isPasswordFocused, setisPasswordFocused] = React.useState(false);

  const handleFocusEmail = () => setisEmailFocused(true);
  const handleBlurEmail = () => setisEmailFocused(false);
  const handleFocusPassword = () => setisPasswordFocused(true);
  const handleBlurPassword = () => setisPasswordFocused(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '783248165978-s0t5jh52ncpija7mak48p3pfps8ukpcv.apps.googleusercontent.com',
      offlineAccess: true,
    });

    const Init = navigation.addListener('blur', () => {
      setEmail(null);
      setPassword(null);
    });
    return Init;
  }, []);

  const Validation = () => {
    if (Email === null) {
      toast.show('Enter Email', {
        type: 'custom_toast',
        title: null,
        status: 'fail',
      });
      Vibration.vibrate(50);
    } else if (Password === null) {
      toast.show('Enter Password', {
        type: 'custom_toast',
        title: null,
        status: 'fail',
      });
      Vibration.vibrate(50);
    } else {
      handleSignIn();
    }
  };

  const handleSignIn = () => {
    try {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          const data = {
            Email: Email,
            Password: Password,
          };
          Signin({data: data, navigation: navigation, toast: toast});
        }
      });
    } catch (error) {
      showToast('Something went wrong', 'fail');
    }
  };

  const handleFacebookSignin = () => {
    toast.show('Coming Soon...', {
      type: 'custom_toast',
      title: null,
      status: 'fail',
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: COLORS.black}]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.black}
        animated={true}
        networkActivityIndicatorVisible={true}
        translucent={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Animated.View style={styles.headerContainer}>
          <Animated.View style={styles.headerView}>
            <Animated.Image source={Images.SignIn2} style={styles.images} />
          </Animated.View>

          <Animated.View style={styles.headerTextView}>
            <Animated.Text style={styles.headerText}>
              Welcome back!
            </Animated.Text>
          </Animated.View>
        </Animated.View>

        <KeyboardAvoidingView>
          <Animated.View style={{width: width}}>
            {/* Email View */}

            <Animated.View style={styles.stackview}>
              <Animated.View style={styles.inputheaderView}>
                <Animated.Text style={styles.inputheaderText}>
                  E-mail address
                </Animated.Text>
              </Animated.View>

              <Animated.View style={styles.fillDetailView}>
                <CommonTextInput
                  value={Email}
                  onChangeText={value => setEmail(value)}
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  customStyleView={{
                    borderColor: COLORS.primary,
                  }}
                  placeholder={'Enter email address'}
                  placeholderTextColor={COLORS.white}
                  renderRightView={
                    <Animated.View>
                      <MaterialIcons
                        name="alternate-email"
                        color={COLORS.white}
                        size={20}
                      />
                    </Animated.View>
                  }
                />
              </Animated.View>
            </Animated.View>

            {/* Password View */}

            <Animated.View style={styles.stackview}>
              <Animated.View
                style={[
                  styles.inputheaderView,
                  {flexDirection: 'row', justifyContent: 'space-between'},
                ]}>
                <Animated.Text style={styles.inputheaderText}>
                  Password
                </Animated.Text>
              </Animated.View>

              <Animated.View style={styles.fillDetailView}>
                <CommonTextInput
                  value={Password}
                  onChangeText={value => setPassword(value)}
                  onFocus={handleFocusPassword}
                  onBlur={handleBlurPassword}
                  customStyleView={{
                    borderColor: COLORS.primary,
                  }}
                  secureTextEntry={showPassword}
                  checkPassword={true}
                  placeholder={'Enter your password'}
                  placeholderTextColor={COLORS.white}
                  renderRightView={
                    <TouchableOpacity
                      onPress={() => {
                        setshowPassword(!showPassword);
                      }}>
                      {showPassword ? (
                        <Ionicons
                          name="eye-off-outline"
                          color={COLORS.white}
                          size={20}
                        />
                      ) : (
                        <Ionicons
                          name="eye-outline"
                          color={COLORS.white}
                          size={20}
                        />
                      )}
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
            <AuthButton
              lable={'Log in'}
              onPress={() => {
                Keyboard.dismiss();
                Validation();
              }}
              isLoading={false}
            />
          </View>

          <View style={styles.haveAnAccountView}>
            <Text style={styles.haveAnAccountText}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Auth', {screen: 'SignUp'})}>
              <Text style={[styles.haveAnAccountText, {color: COLORS.primary}]}>
                Sign up now.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {isLoading && <Loader size={100} />}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    data: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateData: data => dispatch(updateData(data)),
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
    width: width,
  },
  darkmodeView: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    top: 10,
  },
  headerView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  images: {
    width: width,
    height: normalize(200),
  },
  headerTextView: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: SIZES.padding,
  },
  headerText: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  fillDetailView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  stackview: {
    marginTop: normalize(8),
  },
  inputheaderView: {
    marginHorizontal: normalize(25),
    marginVertical: normalize(5),
    justifyContent: 'center',
  },
  inputheaderText: {
    color: COLORS.white,
    fontFamily: FAMILY.PoppinsRegular,
    fontSize: 15,
  },
  ForgotText: {
    color: COLORS.white,
    fontFamily: FAMILY.PoppinsRegular,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  AuthButtonView: {
    marginTop: normalize(15),
  },
  haveAnAccountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  haveAnAccountText: {
    fontFamily: FAMILY.PoppinsRegular,
    color: COLORS.white,
  },
  BottomView: {
    marginVertical: 10,
  },
});
