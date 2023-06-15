import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../Common/Global';
import { normalize } from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  HeaderNameView: {
    margin: SIZES.size20,
    width: '85%',
  },
  headerName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  PaymentButtonView: {
    width: '80%',
    height: normalize(40),
    marginVertical: normalize(20),
    borderRadius: normalize(10),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  PaymentButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: normalize(17),
  },
});

export default styles;
