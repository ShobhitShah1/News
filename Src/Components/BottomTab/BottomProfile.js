import React from 'react';
import {Image, Text, View} from 'react-native';
import { COLORS, FONTS } from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import Icons from '../../Common/Icons';
import styles from './styles';

const BottomProfile = ({focused}) => {
  return focused ? (
    <View style={styles.ActiveimageView}>
       <Text style={{...FONTS.h2, color: COLORS.white}}>
        Profile
      </Text>
    </View>
  ) : (
    <View style={styles.InActiveimageView}>
      <Image
        source={Icons.ProfileWhite}
        style={[styles.image, {left: normalize(5)}]}
      />
    </View>
  );
};

export default BottomProfile;
