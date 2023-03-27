import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const ProgressBar = props => {
  const {currentTime, duration, onSlideCapture, onSlideStart, onSlideComplete} =
    props;

  const getMinutesFromSeconds = time => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  const handleOnSlide = time => {
    onSlideCapture({seekTime: time});
  };

  return (
    <View style={styles.wrapper}>
      <Slider
        step={1}
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor={'#F44336'}
        maximumTrackTintColor={'#FFFFFF'}
        thumbTintColor={'#F44336'}
        collapsable={true}
      />
      <View style={styles.timeWrapper}>
        <Text style={styles.timeLeft}>{position}</Text>
        <Text style={styles.timeRight}>{fullDuration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  timeLeft: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 10,
    ...FONTS.h4,
    color: COLORS.white,
  },
  timeRight: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'right',
    paddingRight: 10,
    ...FONTS.h4,
    color: COLORS.white,
  },
});

export default ProgressBar;
