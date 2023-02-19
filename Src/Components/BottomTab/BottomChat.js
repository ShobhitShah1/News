import React from 'react';
import {Image, View} from 'react-native';
import Icons from '../../Common/Icons';
import styles from './styles';

const BottomChat = ({focused}) => {
  return focused ? (
    <View style={styles.ActiveimageView}>
      <Image source={Icons.ChatWhite} style={styles.image} />
    </View>
  ) : (
    <View style={styles.InActiveimageView}>
      <Image source={Icons.ChatGray} style={styles.image} />
    </View>
  );
};

export default BottomChat;
