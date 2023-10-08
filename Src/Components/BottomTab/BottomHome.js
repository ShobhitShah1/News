import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import Icons from '../../Common/Icons';
import styles from './styles';

const BottomHome = ({focused}) => {
  return focused ? (
    <View style={styles.ActiveimageView}>
      <Text style={{...FONTS.h2, color: COLORS.white}}>Home</Text>
    </View>
  ) : (
    <View style={styles.InActiveimageView}>
      <Image source={Icons.HomeWhite} style={styles.image} />
    </View>
  );
};

export default BottomHome;
