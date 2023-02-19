import React from 'react';
import {Image, View} from 'react-native';
import Icons from '../../Common/Icons';
import styles from './styles';

const BottomHome = ({focused}) => {
  return focused ? (
    <View style={styles.ActiveimageView}>
      <Image source={Icons.HomeWhite} style={styles.image} />
    </View>
  ) : (
    <View style={styles.InActiveimageView}>
      <Image source={Icons.HomeGray} style={styles.image} />
    </View>
  );
};

export default BottomHome;
