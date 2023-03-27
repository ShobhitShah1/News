import {StyleSheet, Animated, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, FAMILY, SIZES} from '../Global';
import {normalize} from '../GlobalSize';

const {width, height} = Dimensions.get('window');

const OrView = ({}) => {
  return (
    <Animated.View style={styles.orTextView}>
      <Animated.View style={styles.orTextLeftView} />
      <Animated.Text style={styles.orText}>Or</Animated.Text>
      <Animated.View style={styles.orTextRightView} />
    </Animated.View>
  );
};

export default OrView;

const styles = StyleSheet.create({
  orTextView: {
    flexDirection: 'row',
    marginTop: normalize(25),
    marginBottom: normalize(15),
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width,
  },
  orTextLeftView: {
    width: '43%',
    height: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  orText: {
    color: COLORS.white,
    fontFamily: FAMILY.PoppinsRegular,
    fontSize: 15,
    // marginHorizontal: 20,
    // width: '10%',
  },
  orTextRightView: {
    width: '43%',
    height: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
});
