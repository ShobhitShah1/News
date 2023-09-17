import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Vibration} from 'react-native';
import * as ActionType from '../Actions/ActionType';
import {store} from '../Store/Store';
import LoggerAction from './LoggerAction';

const Success = ({navigation, toast}) => {
  toast.show('signup successfully ✨', {
    type: 'custom_toast',
    title: 'Woooh! Welcome 🚀',
    status: 'success',
  });
  Vibration.vibrate(50);
  setTimeout(() => {
    navigation.replace('BottomSheet', {screen: 'HomeScreen'});
  }, 1000);
  store.dispatch({type: ActionType.LOADING, Loading: false});
};

const Errors = ({error, navigation, toast}) => {
  toast.show('Please Try Again', {
    type: 'custom_toast',
    title: error || 'Something went wrong',
    status: 'fail',
  });
  Vibration.vibrate(50);
  store.dispatch({type: ActionType.LOADING, Loading: false});
};

export const logActivity = activity => ({
  type: ActionType.LOG_ACTIVITY,
  payload: activity,
});

export const Signup = async ({
  data: {Email, Password, Username},
  navigation,
  toast,
}) => {
  store.dispatch({type: ActionType.LOADING, Loading: true});
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      Email,
      Password,
    );
    await firestore().collection('users').doc(userCredential.user.uid).set({
      username: Username,
      email: Email,
      password: Password,
    });
    store.dispatch({
      type: ActionType.USER_AUTH,
      login_type: 'Email',
      data: {username: Username, email: Email, password: Password},
    });
    Success({navigation, toast});
    // LoggerAction({
    //   Method: 'POST',
    //   ArticalClick: false,
    //   ApiName: 'Firebase New Account Email & Password 🔗',
    //   APIResponse: 'Success',
    //   CustomTitle: 'Created Account With Email And Passowrd',
    //   CustomDescription: `${Username} Created New Account at ${new Date().toString()}. Thanks For Your Time ${Username} 🙇`,
    // });
  } catch (error) {
    Errors({error, navigation, toast});
  }
};

export const GoogleSigninAction = async ({idToken, navigation, toast}) => {
  console.log('idToken', idToken);
  // store.dispatch({type: ActionType.LOADING, Loading: true});
  try { 

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log("googleCredential",googleCredential)
    const userCredential = await firebase.auth().signInWithCredential(googleCredential);

    console.log("userCredential",userCredential)

    const user = userCredential.user;

    console.log("user",user)

    const usersRef = firebase.app().firestore().collection('users');

    const firestoreDocument = await usersRef.doc(user.uid).get();
    
    if (firestoreDocument.exists) { 
      console.log('Google Data:', firestoreDocument.data());
      store.dispatch({
        type: ActionType.USER_AUTH,
        data: firestoreDocument.data(),
        login_type: 'Google',
      }); 
    } else {
      console.log('Creating New Account For User In Firestore');
      await firebase.app().firestore().collection('users').doc(user.uid).set({
        id: user.uid,
        Token: idToken,
        email: user.email,
        name: user.displayName,
      });
      store.dispatch({
        type: ActionType.USER_AUTH,
        data: {
          id: user.uid,
          Token: idToken,
          email: user.email,
          name: user.displayName,
        },
        login_type: 'Google',
      }); 
    }

    Success({ navigation, toast });
    // LoggerAction({
    //   Method: 'POST',
    //   ArticalClick: false,
    //   ArticalID: '',
    //   ApiName: 'Google Login 🔗',
    //   APIResponse: 'Success',
    //   CustomTitle: `${data.username} Login Account With Google`,
    //   CustomDescription: `${data.username} Login With Google at ${new Date().toString()}. Thanks For Your Time ${data.username} 🙇`,
    // })
  } catch (error) {
    console.log("error",error)
    store.dispatch({type: ActionType.LOADING, Loading: false});
  }
};

export const Signin = async userData => {
  store.dispatch({type: ActionType.LOADING, Loading: true});
  try {
    const res = await auth().signInWithEmailAndPassword(
      userData.data.Email,
      userData.data.Password,
    );
    console.log(res);
    store.dispatch({type: ActionType.LOADING, Loading: false});
    await GetAccountDetail(userData);
  } catch (err) {
    Errors({
      error: 'Cant Login Right Now',
      navigation: userData.navigation,
      toast: userData.toast,
    });
  }
};

export const GetAccountDetail = async userData => {
  const user = await auth().currentUser;
  if (user) {
    const userDoc = await firestore().collection('users').doc(user.uid).get();
    if (userDoc.exists) {
      store.dispatch({
        type: ActionType.USER_AUTH,
        login_type: 'Email',
        data: {
          username: userDoc.data().username,
          email: userDoc.data().email,
          password: userDoc.data().password,
        },
      });
      Success({navigation: userData.navigation, toast: userData.toast});
      LoggerAction({
        Method: 'POST',
        ArticalClick: false,
        ApiName: 'Firebase Email Login 🔗',
        APIResponse: 'Success',
        CustomTitle: 'Login With Email And Passowrd',
        CustomDescription: `${
          userDoc.data().username
        } Login Account at ${new Date().toString()}. Thanks For Your Time ${
          userDoc.data().username
        } 🙇`,
      });
    } else {
      Errors({
        error: 'No such user!',
        navigation: userData.navigation,
        toast: userData.toast,
      });
    }
  } else {
    console.log('User not logged in.');
  }
};

export const Logout = async userData => {
  if (store.getState().auth.login_type === 'Google') {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('Error signing out from Google:', error);
    }
  }
  store.dispatch({type: 'RESET_STATE'});
  userData.navigation.replace('Auth', {screen: 'SignIn'});
  store.dispatch({type: ActionType.LOADING, Loading: false});
};

export const setHasSeenNavTooltip = hasSeenNavTooltip => ({
  type: ActionType.SET_HAS_SEEN_NAV_TOOLTIP,
  payload: {hasSeenNavTooltip},
});
