import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  ActiveimageView: {
    justifyContent: 'center',
    // paddingHorizontal: SIZES.size15,
    alignSelf: 'center',
    width: normalize(130),
    height: normalize(40),
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
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
