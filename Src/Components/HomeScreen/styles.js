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
    height: normalize(100),
    // height: normalize(140),
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.subRadius,
    borderBottomRightRadius: SIZES.subRadius,
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
  countView: {
    position: 'absolute',
    top: normalize(5),
    right: normalize(7),
    backgroundColor: COLORS.SearchButton,
    width: normalize(17),
    height: normalize(17),
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CountText: {
    color: COLORS.white,
    fontFamily: FAMILY.PoppinsRegular,
    fontSize: normalize(11),
  },

  // Button
  ButtonView: {
    alignSelf: 'center',
    width: normalize(40),
    height: normalize(40),
    justifyContent: 'center',
    marginRight: normalize(5),
    borderRadius: SIZES.subRadius,
    marginHorizontal: normalize(3),
    backgroundColor: COLORS.NotificationButton,
  },
  Icons: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  SearchBarStyle: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: normalize(43),
    borderRadius: SIZES.radius,
    marginVertical: SIZES.size15,
    marginHorizontal: SIZES.padding,
    backgroundColor: COLORS.SearchbarBackground,
  },
  leftImageView: {
    width: '5%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: SIZES.size10,
  },
  leftImage: {
    width: normalize(18),
    height: normalize(18),
  },
  TextInputStyle: {
    top: normalize(2),
    width: '75%',
    ...FONTS.body3,
    color: COLORS.white,
  },
  SearchButton: {
    width: '15%',
    alignSelf: 'center',
    width: normalize(30),
    height: normalize(30),
    borderRadius: SIZES.base,
    justifyContent: 'center',
    marginLeft: normalize(5),
    backgroundColor: COLORS.SearchButton,
    alignItems: 'center',
  },
  searchButtonIcon: {
    width: SIZES.size20,
    height: SIZES.size20,
  },

  // REMINDER VIEW //
  ReminderContainerView: {
    width: '100%',
    marginVertical: SIZES.size15,
    
  },
  ReminderView: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.taskView,
  },
  PeopleAndInvite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: COLORS.google,
  },
  PeopleImageView: {},
  PeopleImage: {
    alignSelf: 'center',
    width: normalize(25),
    height: normalize(25),
    justifyContent: 'center',
    borderRadius: SIZES.subRadius,
  },
  InviteDotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  InviteButton: {
    backgroundColor: COLORS.InviteButton,
    width: normalize(65),
    height: normalize(30),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: SIZES.base,
  },
  InviteText: {
    textAlign: 'center',
    ...FONTS.h4,
  },
  ButtonFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    overflow: 'hidden'
  },
  Plus: {
    width: SIZES.size10,
    height: SIZES.size10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: normalize(5),
    bottom: normalize(2)
  },
  dotButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: normalize(5),
    marginRight: normalize(10)
  },
  dot:{
    width: normalize(15),
    height: normalize(18)
  }
});

export default styles;
