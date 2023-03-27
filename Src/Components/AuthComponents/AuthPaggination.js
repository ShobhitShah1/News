import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../Common/Global';

const {width, height} = Dimensions.get('window');

export default function AuthPaggination({data, scrollX}) {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 25, 12],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [COLORS.pagginColor, COLORS.white, COLORS.pagginColor],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index.toString()}
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor: backgroundColor},
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dot: {
    width: 25,
    height: 5,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    marginHorizontal: 2,
  },
});
