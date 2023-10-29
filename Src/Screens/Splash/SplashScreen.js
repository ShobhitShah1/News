import React, {useEffect} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
const {width, height} = Dimensions.get('window');

export default function SplashScreen({navigation}) {
  const Status = useSelector(state => state?.auth?.user);

  useEffect(() => {
    console.log(
      '======================== 👋 UserInfo 🚀 =======================',
    );
    console.log('Status', Status);
    const timeout = setTimeout(() => {
      if (Status !== null && Status !== undefined) {
        navigation.replace('BottomSheet', {screen: 'HomeScreen'});
      } else {
        navigation.replace('Auth', {screen: 'AuthHome'});
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [Status, navigation]);

  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.black}
        animated={true}
        networkActivityIndicatorVisible={true}
        translucent={true}
      />
      <View style={styles.ImageView}>
        <Text style={{...FONTS.h1, textAlign: 'center', color: COLORS.primary}}>
          {Status !== null && Status !== undefined
            ? `Hy, Welcome ${Status.name ? Status.name : Status.username} 🚀`
            : 'Hy, Welcome 👋'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  ImageView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  splashImage: {
    width: normalize(250),
    height: normalize(250),
  },
  TextView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    // ...FONTS.h1,
    fontSize: normalize(50),
    color: COLORS.black,
    margin: normalize(50),
  },
  ThugLifeImage: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
