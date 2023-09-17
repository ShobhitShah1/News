import {StyleSheet, Animated, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FAMILY, FONTS, SIZES, DimensionsSize} from '../Global';
import {normalize} from '../GlobalSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; //facebook
import AntDesign from 'react-native-vector-icons/AntDesign'; //Google witter
import {GoogleSigninAction} from '../../Redux/Actions/AuthAction';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {store} from '../../Redux/Store/Store';
import {useToast} from 'react-native-toast-notifications';

const SocialButtons = ({onFacebookPress}) => {
  const navigation = useNavigation();
  const toast = useToast();

  const onGooglePress = async () => {
    store.dispatch({type: ActionType.LOADING, Loading: true});
    const {idToken} = await GoogleSignin.signIn();
    GoogleSigninAction({
      idToken: idToken,
      toast: toast,
      navigation: navigation,
    });
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={styles.flexView}>
        <TouchableOpacity
          style={styles.ButtonView}
          activeOpacity={0.7}
          onPress={() => {}}>
          <AntDesign
            name="google"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonView}
          activeOpacity={0.7}
          onPress={onFacebookPress}>
          <FontAwesome
            name="facebook"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.ButtonView} activeOpacity={0.7} onPress={onPress}>
                    <AntDesign name='twitter' size={20} color={COLORS.twitter} style={styles.icon} />
                </TouchableOpacity> */}
      </Animated.View>
    </Animated.View>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: normalize(10),
  },
  ButtonView: {
    width: normalize(43),
    height: normalize(43),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.socialButtonBorder,
    marginHorizontal: normalize(8),
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
