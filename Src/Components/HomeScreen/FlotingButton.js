import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize} from '../../Common/GlobalSize';
import {COLORS, SIZES} from '../../Common/Global';
import * as Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FlotingButton = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.ButtonContainer}>
      <Icon.default
        name="text-box-plus-outline"
        color={COLORS.white}
        size={normalize(28)}
        style={styles.ButtonIcon}
      />
    </TouchableOpacity>
  );
};

export default FlotingButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    position: 'absolute',
    bottom: normalize(15),
    right: normalize(15),
    width: normalize(45),
    height: normalize(45),
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
  },
  ButtonIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
