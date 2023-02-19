import React from 'react';
import {Image, View} from 'react-native';
import { normalize } from '../../Common/GlobalSize';
import Icons from '../../Common/Icons';
import styles from './styles';

const BottomProfile = ({focused}) => {
  return focused ? (
    <View style={styles.ActiveimageView}>
      <Image source={Icons.ProfileWhite} style={[styles.image,{left: normalize(2.5)}]} />
    </View>
  ) : (
    <View style={styles.InActiveimageView}>
      <Image source={Icons.ProfileGray} style={[styles.image,{left: normalize(2.5)}]} />
    </View>
  );
};

export default BottomProfile;