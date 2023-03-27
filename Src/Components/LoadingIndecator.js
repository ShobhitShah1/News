import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import {COLORS} from '../Common/Global';

const LoadingIndecator = ({size}) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: COLORS.white,
        shadowColor: COLORS.white,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        // elevation: 10,
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    />
  );
};

export default LoadingIndecator;

const styles = StyleSheet.create({});
