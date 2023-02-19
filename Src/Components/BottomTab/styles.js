import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  ActiveimageView: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: normalize(50),
    height: normalize(40),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
  },
  InActiveimageView: {
    width: normalize(50),
    height: normalize(40),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: normalize(25),
    height: normalize(25),
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default styles;
