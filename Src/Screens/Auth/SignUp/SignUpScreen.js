import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React from 'react';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import AuthButton from '../../../Common/AuthComponents/AuthButton';
import OrView from '../../../Common/AuthComponents/OrView';
import SocialButtons from '../../../Common/AuthComponents/SocialButtons';
import CommonTextInput from '../../../Common/CommonTextInput';
import {COLORS} from '../../../Common/Global';
import {normalize} from '../../../Common/GlobalSize';

import Images from '../../../Common/Images';
import styles from './styles';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import PasswordInfo from '../../../Components/AuthComponents/PasswordInfo';
import {Signup} from '../../../Redux/Actions/AuthAction';

const {width, height} = Dimensions.get('window');

export default function SignUpScreen({navigation}) {
  const toast = useToast();
  const isLoading = useSelector(state => state.Loading.Loading);

  const [Username, setUsername] = React.useState(null);
  const [Email, setEmail] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const [showPassword, setshowPassword] = React.useState(true);

  const [isNameFocused, setisNameFocused] = React.useState(false);
  const [isEmailFocused, setisEmailFocused] = React.useState(false);
  const [isPasswordFocused, setisPasswordFocused] = React.useState(false);

  // Bottom Sheet
  const SheetRef = React.useRef(null);
  const [isOpen, setIsopen] = React.useState(true);

  const snapPoints = ['23%'];

  const handleFocusName = () => {
    onClose();
    setisNameFocused(true);
  };
  const handleBlurName = () => setisNameFocused(false);
  const handleFocusEmail = () => setisEmailFocused(true);
  const handleBlurEmail = () => setisEmailFocused(false);
  const handleFocusPassword = () => setisPasswordFocused(true);
  const handleBlurPassword = () => setisPasswordFocused(false);

  const calculatePasswordStrength = Password => {
    if (!Password) return 0;
    let strength = 0;
    if (Password.length > 7) strength++;
    if (Password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength++;
    if (Password.match(/([a-zA-Z])/) && Password.match(/([0-9])/)) strength++;
    if (Password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength++;
    return strength / 4;
  };

  const getColor = strength => {
    if (strength === 1) return COLORS.green;
    if (strength >= 0.75) return COLORS.yellow;
    if (strength >= 0.5) return COLORS.orange;
    return COLORS.red;
  };

  const passwordStrength = calculatePasswordStrength(Password);

  const Validation = () => {
    if (Username === null) {
      toast.show('Enter Username', {
        type: 'custom_toast',
        title: null,
        status: 'fail',
      });
      Vibration.vibrate(50);
    } else if (Email === null) {
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
    } else if (Password.length < 7) {
      toast.show('Password must contain at least 7 characters', {
        type: 'custom_toast',
        title: null,
        status: 'fail',
      });
      Vibration.vibrate(50);
    } else {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    const data = {
      Email: Email,
      Password: Password,
      Username: Username,
    };
    Signup({data: data, navigation: navigation, toast: toast});
  };

  function hanndleOnOpen() {
    SheetRef.current?.present();
    setIsopen(true);
  }

  const onClose = () => {
    SheetRef.current?.close();
    setIsopen(false);
  };

  const CheckFocusForAll = () => {
    if (isNameFocused) {
      return true;
    } else if (isEmailFocused) {
      return true;
    } else if (isPasswordFocused) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: COLORS.black}]}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Animated.View style={styles.headerContainer}>
          <Animated.View style={styles.headerView}>
            <Animated.Image source={Images.SignIn3} style={styles.images} />
          </Animated.View>

          <Animated.View style={styles.headerTextView}>
            <Animated.Text style={styles.headerText}>
              Become a member!
            </Animated.Text>
          </Animated.View>
        </Animated.View>

        <KeyboardAvoidingView>
          {/* Name View */}

          <Animated.View style={{width: width}}>
            <Animated.View>
              <Animated.View style={styles.inputheaderView}>
                <Animated.Text style={styles.inputheaderText}>
                  Your username
                </Animated.Text>
              </Animated.View>

              <Animated.View style={styles.fillDetailView}>
                <CommonTextInput
                  onPressIn={() => onClose()}
                  value={Username}
                  onChangeText={value => setUsername(value)}
                  onFocus={handleFocusName}
                  onBlur={handleBlurName}
                  customStyleView={{
                    borderColor: COLORS.white,
                  }}
                  placeholder={'Enter username'}
                  placeholderTextColor={COLORS.white}
                  renderRightView={
                    <Animated.View>
                      <FontAwesome
                        name="user-o"
                        color={COLORS.white}
                        size={20}
                      />
                    </Animated.View>
                  }
                />
              </Animated.View>
            </Animated.View>

            <Animated.View style={styles.stackview}>
              <Animated.View style={styles.inputheaderView}>
                <Animated.Text style={styles.inputheaderText}>
                  E-mail address
                </Animated.Text>
              </Animated.View>

              <Animated.View style={styles.fillDetailView}>
                <CommonTextInput
                  onPressIn={() => onClose()}
                  value={Email}
                  onChangeText={value => setEmail(value)}
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  customStyleView={{
                    borderColor: COLORS.white,
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

            <Animated.View style={styles.stackview}>
              <Animated.View style={styles.inputheaderView}>
                <Animated.Text style={styles.inputheaderText}>
                  Password
                </Animated.Text>
                <Entypo
                  onPress={() => (CheckFocusForAll() ? null : hanndleOnOpen())}
                  name="info"
                  color={COLORS.white}
                  size={normalize(12)}
                  style={styles.infoIcon}
                />
              </Animated.View>

              <Animated.View style={styles.fillDetailView}>
                <CommonTextInput
                  onPressIn={() => onClose()}
                  value={Password}
                  onChangeText={value => {
                    setPassword(value);
                    if (value.length === 0) setPassword(null);
                  }}
                  onFocus={handleFocusPassword}
                  onBlur={handleBlurPassword}
                  customStyleView={{
                    borderColor:
                      isPasswordFocused === true
                        ? getColor(passwordStrength)
                        : COLORS.white,
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

        <View style={styles.AuthButtonView}>
          <AuthButton
            lable={'Create an account'}
            onPress={Validation}
            isLoading={isLoading}
          />
        </View>

        <View style={styles.haveAnAccountView}>
          <Text style={styles.haveAnAccountText}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth', {screen: 'SignIn'})}>
            <Text style={[styles.haveAnAccountText, {color: COLORS.white}]}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomSheetModalProvider>
        <BottomSheetModal
          handleIndicatorStyle={{backgroundColor: COLORS.white}}
          backgroundStyle={{backgroundColor: COLORS.black}}
          containerStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          ref={SheetRef}
          index={0}
          snapPoints={snapPoints}
          enableContentPanningGesture={true}
          enablePanDownToClose={true}>
          <PasswordInfo />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}
