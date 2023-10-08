import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import {COLORS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const HoriVertiButtons = ({position, setViewPosition}) => {
  const handleHorizontalPress = useCallback(() => {
    const Positions = position === 'horizontal' ? 'vertical' : 'horizontal';
    setViewPosition(Positions);
    console.log('Position toggled to:', Positions);
  }, [position, setViewPosition]);

  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleHorizontalPress()}
        style={[styles.ButtonIconView]}>
        <FontAwesome5
          name={position === 'horizontal' ? 'more-horizontal' : 'more-vertical'}
          color={COLORS.white}
          size={normalize(18)}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HoriVertiButtons;

const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: normalize(5),
  },
  ButtonIconView: {
    marginLeft: normalize(10),
    width: normalize(25),
    height: normalize(25),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
