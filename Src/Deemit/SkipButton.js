import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icons from '../../Global/Icons';
import {Normalize} from '../../Global/Normalize';
import {COLORS, FONTS} from '../../Global/Theme';

const SkipButton = ({onPress, ContainerStyle}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.SkipButtonView, {...ContainerStyle}]}>
        <Text style={styles.SkipText}>Skip</Text>
        <Image style={styles.SkipArrow} source={Icons.RightArrow} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  SkipButtonView: {
    marginRight: Normalize(10),
    width: Normalize(62),
    height: Normalize(23),
    borderRadius: Normalize(15),
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    zIndex: 1,
  },
  SkipText: {
    fontFamily: FONTS.MontserratMedium,
    color: COLORS.White,
    fontSize: Normalize(13),
    textAlign: 'center',
    alignSelf: 'center',
  },
  SkipArrow: {
    width: Normalize(12),
    height: Normalize(12),
    justifyContent: 'center',
    alignSelf: 'center',
    tintColor: COLORS.White,
  },
});
