import {StyleSheet} from 'react-native';
import {COLORS, FAMILY, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  HomeContainer: {
    marginVertical: SIZES.size20,
    paddingBottom: normalize(40),
  },
  HeaderNameView: {
    flexDirection: 'row',
    marginHorizontal: SIZES.size15,
    justifyContent: 'space-between',
  },
  headerName: {
    ...FONTS.h2,
    color: COLORS.primary,
  },

  // News View style
  AllNewsContainerView: {},
  NewsContainer: {
    marginVertical: normalize(10),
  },
});

export default styles;
