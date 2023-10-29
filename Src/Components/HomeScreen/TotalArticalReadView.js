import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../../Common/GlobalSize';
import {COLORS, SIZES} from '../../Common/Global';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const TotalArticalReadView = () => {
  return (
    <View style={styles.TotalArticalViewContainer}>
      <View style={styles.CountContainer}>
        <View>
          <Text></Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default TotalArticalReadView;

const styles = StyleSheet.create({
  TotalArticalViewContainer: {
    width: width - 40,
    alignSelf: 'center',
    marginTop: normalize(5),
    height: normalize(120),
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.SearchBox,
  },
  CountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
