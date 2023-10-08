import {Dimensions} from 'react-native';
import {normalize} from './GlobalSize';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: 'rgba(164, 99, 77, 1)',
  SearchBox: 'rgba(31,34,42,255)',
  SearchText: 'rgba(110,111,113,255)',
  secondary: '#5D2DFD',
  white: '#fff',
  textInputBackground: '#f5f7fc',
  textInputBorder: '#cad6fa',
  activeBorderColor: '#015cf5',
  socialButton: '#f9f9fd',
  socialButtonBorder: '#d9def2',
  facebook: '#3b5998',
  google: '#4285F4',
  twitter: '#00acee',
  tinBlack: '#1e1d2e',
  pagginColor: '#505062',
  skipBTN: '#404855',
  black: '#111111',
  green: '#37E39F',
  gray: '#6A6A6A',
  lightGray: '#dbdbdb',
  lightGray1: '#f5f6fa',
  yellow: '#FFFF00',
  orange: '#FF9900',
  red: '#FF0000',
  green: '#00FF00',
  NotificationButton: '#3c3b4d',
  SearchbarBackground: '#32313f',
  SearchButton: '#5b5a69',
  ReminderBackground: '#f8f9fd',
  InviteButton: '#e8e9fb',
  taskView: '#f8f9fd',
};
export const SIZES = {
  base: normalize(8),
  font: normalize(14),
  radius: normalize(12),
  subRedius: normalize(20),
  padding: normalize(24),
  bottombaricon: normalize(25),
  size10: normalize(10),
  size15: normalize(15),
  size20: normalize(20),
  size50: normalize(50),

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1,
    lineHeight: 36,
    color: COLORS.black,
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
    color: COLORS.black,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
    color: COLORS.black,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
    color: COLORS.black,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
    color: COLORS.black,
  },
};

export const FAMILY = {
  PoppinsBold: 'Poppins-Bold',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsMedium: 'Poppins-Medium',
  OutfitBold: 'Outfit-Bold',
  OutfitRegular: 'Outfit-Regular',
  OutfitMedium: 'Outfit-Medium', 
};

export const DimensionsSize = {
  width: width,
  height: height,
};

export const ImageURL = {
  random: 'https://picsum.photos/500',
};

const Global = {COLORS, SIZES, FONTS, FAMILY, DimensionsSize, ImageURL};

export default Global;
