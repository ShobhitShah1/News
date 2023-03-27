import {StyleSheet} from 'react-native';
import {COLORS, DimensionsSize, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  // WeekPasswordModal
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainerView: {
    width: DimensionsSize.width - normalize(30),
    margin: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    ...FONTS.h1,
    textAlign: 'center',
  },
  iconStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  // Password Info
  PasswordInfoContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: normalize(5),
    width: DimensionsSize.width,
    backgroundColor: COLORS.black,
  },
  PasswordInfoHeaderText: {
    ...FONTS.h2,
    color: COLORS.white,
    textAlign: 'center',
  },
  PasswordInfoViewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: normalize(18),
  },
  PasswordInfoPoint: {
    marginHorizontal: normalize(10),
    marginTop: normalize(20),
  },
  PasswordInfoTxtInputView: {
    width: DimensionsSize.width - normalize(20),
    marginVertical: normalize(5),
    // height: normalize(25)
  },
  PasswordInfoRedTextInput: {
    borderColor: COLORS.red,
    borderWidth: 1,
    borderRadius: normalize(10),
  },
  PasswordInfoPointRedText: {
    ...FONTS.h3,
    marginTop: normalize(5),
    color: COLORS.red,
  },
  PasswordInfoPointYellowText: {
    ...FONTS.h3,
    marginTop: normalize(5),
    color: COLORS.yellow,
  },
  PasswordInfoPointOrangeText: {
    ...FONTS.h3,
    marginTop: normalize(5),
    color: COLORS.orange,
  },
  PasswordInfoPointGreenText: {
    ...FONTS.h3,
    marginTop: normalize(5),
    color: COLORS.green,
  },
  barstyle: {
    marginHorizontal: normalize(8),
  },
});

export default styles;
