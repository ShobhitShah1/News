import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../Common/Global';

const styles = StyleSheet.create({
  HeaderNameView: {
    margin: SIZES.size20,
    width: '85%',
  },
  headerName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
});

export default styles;
