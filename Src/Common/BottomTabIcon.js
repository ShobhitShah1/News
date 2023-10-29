import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from './Global';
import {normalize} from './GlobalSize';

const BottomTabIcon = ({focused, icon, label}) => {
  return (
    <View style={focused ? styles.ActiveimageView : styles.inactiveTab}>
      {icon && focused && <Image source={icon} style={styles.image} />}
      {label && !focused && (
        <Text style={{...FONTS.h2, color: COLORS.white}}>{label}</Text>
      )}
    </View>
  );
};

const styles = {
  ActiveimageView: {
    justifyContent: 'center',
    // paddingHorizontal: SIZES.size15,
    alignSelf: 'center',
    width: normalize(130),
    height: normalize(40),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  InActiveimageView: {
    width: normalize(50),
    height: normalize(40),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: normalize(25),
    height: normalize(25),
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
};

export default BottomTabIcon;
