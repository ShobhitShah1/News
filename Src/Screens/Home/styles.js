import {StyleSheet} from 'react-native';
import {COLORS, FAMILY, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const styles = StyleSheet.create({
  HomeContainer: {
    marginVertical: SIZES.size20,
    marginHorizontal: SIZES.size15,
    paddingBottom: normalize(40)
  },
  HeaderNameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerName: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  welcomeTextView: {
    marginHorizontal: SIZES.size20,
    marginTop: SIZES.size20,
    width: '85%',
  },
  welcomeText: {
    ...FONTS.h2,
    color: COLORS.white,
    textAlign: 'center',
  },
  WorkView: {
    margin: SIZES.size20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  WorkText: {
    fontFamily: FAMILY.OutfitMedium,
    letterSpacing: 15,
    fontSize: normalize(60),
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
  ProjectName: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: COLORS.white,
    fontSize: normalize(16),
  },
  SearchView: {
    marginTop: normalize(15),
  },
  ViewPositionButtonView:{
    marginTop: normalize(15)
  },
  NewsContainer: {
    marginBottom: normalize(5),
  },
  NewsWrapper: {
    marginTop: normalize(10),
  },
  EmptyDataView: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: normalize(20),
  },
  EmptyDataText: {
    ...FONTS.h2,
    color: COLORS.white,
    textAlign: 'center',
    fontSize: normalize(16),
  },
  SectionTitleView: {
    marginTop: normalize(8),
    marginBottom: normalize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SectionTitleText: {
    fontSize: normalize(15),
    color: COLORS.primary,
    fontFamily: FAMILY.PoppinsMedium,
  },
});

export default styles;
