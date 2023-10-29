import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS, DimensionsSize, FONTS, SIZES} from '../Global';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AuthButton = ({lable, onPress, isLoading}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      {isLoading ? (
        <Animated.View style={styles.LoadingView}>
          <ActivityIndicator size={'large'} color={COLORS.black} />
        </Animated.View>
      ) : (
        <Animated.View style={styles.flex}>
          <Animated.Text style={styles.lable}>{lable}</Animated.Text>
          <AntDesign
            name="arrowright"
            color={COLORS.white}
            size={18}
            style={styles.icon}
          />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    width: DimensionsSize.width - 40,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  lable: {
    ...FONTS.h3,
    color: COLORS.white,
    textAlign: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 10,
  },
  LoadingView: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});
