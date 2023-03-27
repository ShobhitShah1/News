import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import {COLORS, SIZES} from '../Common/Global';
import {normalize} from '../Common/GlobalSize';
import Icons from '../Common/Icons';

const ChatButton = ({size, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: normalize(20),
        right: normalize(25),
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <MotiView
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: COLORS.white,
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: COLORS.white,
        }}>
        <Image
          source={Icons.ChatBlack}
          style={{
            width: normalize(22),
            height: normalize(22),
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
      </MotiView>
    </TouchableOpacity>
  );
};

export default ChatButton;

const styles = StyleSheet.create({});
