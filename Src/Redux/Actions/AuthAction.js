import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Vibration} from 'react-native';
import * as ActionType from '../Actions/ActionType';
import {store} from '../Store/Store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider} from '@react-native-firebase/auth';
import {persistor} from '../Store/Store';

const Success = data => {
  data.toast.show('signup successfully ✨', {
    type: 'custom_toast',
    title: 'Woooh! Welcome 🚀',
    status: 'success',
  });
  Vibration.vibrate(50);
  setTimeout(() => {
    data.navigation.replace('BottomSheet', {screen: 'HomeScreen'});
  }, 1000);
  store.dispatch({type: ActionType.LOADING, Loading: false});
};

const Errors = data => {
  data.toast.show(data.error.message, {
    type: 'custom_toast',
    title: 'Something went wrong',
    status: 'fail',
  });
  Vibration.vibrate(50);
  store.dispatch({type: ActionType.LOADING, Loading: false});
};

export const Signup = async userData => {
  store.dispatch({type: ActionType.LOADING, Loading: true});
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      userData.data.Email,
      userData.data.Password,
    );
    await firestore().collection('users').doc(userCredential.user.uid).set({
      username: userData.data.Username,
      email: userData.data.Email,
      password: userData.data.Password,
    });
    store.dispatch({
      type: ActionType.USER_AUTH,
      login_type: 'Email',
      data: {
        username: userData.data.Username,
        email: userData.data.Email,
        password: userData.data.Password,
      },
    });
    Success({navigation: userData.navigation, toast: userData.toast});
  } catch (error) {
    Errors({
      error: error,
      navigation: userData.navigation,
      toast: userData.toast,
    });
  }
};

export const GoogleSigninAction = async userData => {
  store.dispatch({type: ActionType.LOADING, Loading: true});
  try {
    store.dispatch({
      type: ActionType.USER_AUTH,
      data: userData.data,
      login_type: 'Google',
    });
    // firestore().collection('users').add({
    //   username: userData.data.Username,
    //   email: userData.data.Email,
    //   // password: userData.data.Password,
    //   profilePic: userData.data.Profile,
    // });
    Success({navigation: userData.navigation, toast: userData.toast});
  } catch (error) {
    store.dispatch({type: ActionType.LOADING, Loading: false});
  }
};

export const Signin = userData => {
  store.dispatch({type: ActionType.LOADING, Loading: true});
  auth()
    .signInWithEmailAndPassword(userData.data.Email, userData.data.Password)
    .then(res => {
      store.dispatch({type: ActionType.LOADING, Loading: false});
      GetAccountDetail(userData);
    })
    .catch(err => {
      Errors({
        error: err,
        navigation: userData.navigation,
        toast: userData.toast,
      });
    });
};

export const GetAccountDetail = async userData => {
  const User = await auth().currentUser.uid;
  await firestore()
    .collection('users')
    .doc(User)
    .get()
    .then(doc => {
      if (doc.exists) {
        store.dispatch({
          type: ActionType.USER_AUTH,
          login_type: 'Email',
          data: {
            username: doc.data().username,
            email: doc.data().email,
            password: doc.data().password,
          },
        });
        Success({navigation: userData.navigation, toast: userData.toast});
      } else {
        console.log('No such user!');
      }
    })
    .catch(error => {
      console.log('Error getting user data:', error);
    });
};

export const Logout = async userData => {
  store.dispatch({type: ActionType.LOADING, Loading: true});
  if (store.getState().auth.login_type === 'Google') {
    GoogleSignin.signOut().then(RES => console.log(RES));
  }
  store.dispatch({type: 'RESET_STATE'});
  userData.navigation.replace('Auth', {screen: 'SignIn'});
  store.dispatch({type: ActionType.LOADING, Loading: false});

  // await auth()
  //   .signOut()
  //   .then(res => {
  //     persistor.purge();
  //     persistor.flush();
  //     GoogleSignin.signOut();
  //     store.dispatch({type: ActionType.LOADING, Loading: false});
  //     userData.navigation.replace('Auth', {screen: 'SignIn'});
  //   })
  //   .catch(err => {
  //     console.log('Logout Error -->', err);
  //   });

  // await auth()
  //   .signOut()
  //   .then(res => {
  //     userData.navigation.replace('Auth', {screen: 'SignIn'});
  //   })
  //   .catch(err => {
  //     console.log('Logout Error -->', err);
  //   });
};

export const setHasSeenNavTooltip = hasSeenNavTooltip => ({
  type: ActionType.SET_HAS_SEEN_NAV_TOOLTIP,
  payload: {hasSeenNavTooltip},
});
