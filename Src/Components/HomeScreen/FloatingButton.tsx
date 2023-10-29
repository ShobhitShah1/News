import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {normalize} from '../../Common/GlobalSize';
import {COLORS, SIZES} from '../../Common/Global';
import * as Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const FloatingButton: FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('CreateArticle');
      }}
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

export default FloatingButton;

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
