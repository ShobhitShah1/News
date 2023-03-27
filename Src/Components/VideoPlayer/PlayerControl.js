import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import Icons from '../../Common/Icons';

const PlayerControls = props => {
  const {playing, onPlay, onPause, skipForwards, skipBackwards} = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.touchable, {flexDirection: 'row'}]}
        onPress={skipBackwards}>
        <Image source={Icons.Backward} style={styles.Images} />
        <Text style={styles.Text}>10s</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          <Image source={Icons.Pause} style={styles.Images} />
        ) : (
          <Image source={Icons.Play} style={styles.Images} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchable, {flexDirection: 'row'}]}
        onPress={skipForwards}>
        <Text style={styles.Text}>10s</Text>
        <Image source={Icons.Forward} style={styles.Images} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
  Images: {
    width: 30,
    height: 30,
  },
  Text: {
    justifyContent: 'center',
    alignSelf: 'center',
    ...FONTS.h4,
    color: COLORS.white,
    marginHorizontal: normalize(5),
  },
});

export default PlayerControls;
