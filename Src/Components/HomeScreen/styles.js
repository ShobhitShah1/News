import {StyleSheet} from 'react-native';
import {
  COLORS,
  DimensionsSize,
  FAMILY,
  FONTS,
  SIZES,
} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  HeaderView: {
    width: '100%',
    height: normalize(150),
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.subRedius,
    borderBottomRightRadius: SIZES.subRedius,
  },
  mainFlex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderTopView: {
    height: '45%',
    width: DimensionsSize.width,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },
  HeaderFlexView: {
    left: SIZES.size10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ImageAndNameView: {
    marginTop: SIZES.size20,
    borderRadius: SIZES.size50,
  },
  ProfileImage: {
    width: normalize(45),
    height: normalize(45),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: SIZES.size50,
  },
  ProfileAddView: {
    bottom: normalize(15),
    alignSelf: 'flex-end',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.size50,
  },
  AddIcon: {
    width: SIZES.h4,
    height: SIZES.h4,
    borderRadius: SIZES.size50,
  },
  ProfileNameView: {
    width: '68%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: SIZES.base,
    marginLeft: SIZES.size10,
  },
  ProfileWelcome: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  Username: {
    ...FONTS.h2,
    color: COLORS.white,
  },

  // Button
  ButtonView: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: SIZES.subRedius,
    backgroundColor: COLORS.NotificationButton,
    marginHorizontal: normalize(3),
    marginRight: normalize(5),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Icons: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
