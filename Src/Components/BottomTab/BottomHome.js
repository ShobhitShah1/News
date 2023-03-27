import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import Icons from '../../Common/Icons';
import styles from './styles';

const BottomHome = ({focused}) => {
  return focused ? (
    <View style={styles.ActiveimageView}>
      {/* <Image source={Icons.HomeBlack} style={styles.image} /> */}
      <Text style={{...FONTS.h2, color: COLORS.black}}>
        Home
      </Text>
    </View>
  ) : (
    <View style={styles.InActiveimageView}>
      <Image source={Icons.HomeWhite} style={styles.image} />
    </View>
  );
};

export default BottomHome;
