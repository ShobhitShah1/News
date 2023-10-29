import {StyleSheet} from 'react-native';
import {COLORS, FAMILY, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  createContainer: {
    alignContent: 'center',
    flex: 1,
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: normalize(20),
    marginBottom: normalize(15),
    justifyContent: 'space-between',
    marginHorizontal: normalize(13),
  },
  VisibilityView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  CloseButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(10),
  },
  VisibilityButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(25),
    padding: normalize(5),
    borderWidth: normalize(2),
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
    paddingHorizontal: normalize(10),
  },
  VisibilityText: {
    textAlign: 'center',
    color: COLORS.primary,
    marginRight: normalize(6),
    fontFamily: FAMILY.PoppinsBold,
  },
  PostButton: {
    alignItems: 'center',
    padding: normalize(5),
    height: normalize(25),
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    paddingHorizontal: normalize(15),
  },
  PostButtonText: {
    ...FONTS.h4,
    textAlign: 'center',
    color: COLORS.white,
  },
  headerText: {
    ...FONTS.h2,
    textAlign: 'center',
    color: COLORS.primary,
  },
  TextViewContainer: {
    backgroundColor: 'red',
    marginHorizontal: normalize(10),
  },
  DescriptionView: {
    width: '100%',
  },
  DescriptionStyle: {
    flex: 1,
    height: '100%',
    color: COLORS.white,
    fontSize: normalize(14),
    fontFamily: FAMILY.PoppinsBold,
    marginHorizontal: normalize(10),
  },
  TotalWordTextView: {
    marginHorizontal: normalize(10),
    marginBottom: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TotalWordText: {
    color: COLORS.white,
    fontSize: normalize(14),
    fontFamily: FAMILY.PoppinsBold,
  },
  contentContainer: {
    backgroundColor: COLORS.tinBlack,
  },
  ImageContainerView: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: COLORS.white,
    borderWidth: normalize(2),
    borderRadius: normalize(10),
    borderStyle: 'dotted',
    width: '95%',
    height: normalize(150),
    marginVertical: normalize(10),
  },
  NoImageContainerView: {
    margin: normalize(5),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  UploadImageIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  UploadImage: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(10),
  },
  UploadImageText: {
    ...FONTS.h3,
    textAlign: 'center',
    color: COLORS.white,
  },
  ImageLoadingView: {
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    height: normalize(150),
    overflow: 'hidden',
    borderRadius: normalize(10),
  },
});

export default styles;
