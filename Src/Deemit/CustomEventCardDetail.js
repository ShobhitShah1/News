import {Link, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import { Normalize } from '../../Global/Normalize';
import { COLORS, FONTS } from '../../Global/Theme';

const CustomEventCardDetail = ({
  headerText,
  topImage,
  image,
  mainTitleText,
  icon1,
  icon2,
  icon3,
  title1,
  title2,
  title3,
  socialIcon,
  socialIcon1,
  socialIcon2,
  socialItem,
  socialItem1,
  socialItem2,
  tintColor,
  setWalkThroughtIndex,
  WalkThroughtIndex,
  onPhoneCallClick,
  onDireactionClick,
  onWebsiteClick,
  aboutDetail,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [DynamicLink, setDynamicLink] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [ApplyOpeningHoursModal, setApplyOpeningHoursModal] = useState(false);

  const Linkdata = [
    {
      id: 1,
      icon: socialIcon,
      name: socialItem,
    },
    {
      id: 2,
      icon: socialIcon1,
      name: socialItem1,
    },
    {
      id: 3,
      icon: socialIcon2,
      name: socialItem2,
    },
  ];


  return (
    <View>
      <View style={{paddingHorizontal: 30}}>
        <Image
          resizeMode="cover"
          source={{uri: topImage}}
          style={styles.topImage}
        />
        </View>
      {/* image */}
      {/* <View style={{paddingHorizontal: 30}}>
        <Image
          resizeMode="cover"
          source={{uri: topImage}}
          style={styles.topImage}
        /> */}
        {/* <View
          style={[styles.row, {paddingVertical: 15, alignItems: 'flex-start'}]}>
          <Image
            source={{uri: image}}
            resizeMode={'contain'}
            style={styles.topTitleImage}
          />
          <View style={{paddingLeft: 10, width: '80%'}}>
            <Text style={styles.mainTitleText}>{mainTitleText}</Text>
            <View style={[styles.row, {paddingVertical: 2}]}>
              <Image
                source={icon1}
                resizeMode={'contain'}
                style={[styles.topSubSection, {tintColor: tintColor}]}
              />
              <Text style={styles.text}>{title1}</Text>
            </View>
            <View style={[styles.row, {paddingVertical: 2}]}>
              <Image
                source={icon2}
                resizeMode={'contain'}
                style={styles.topSubSection}
              />
              <Text style={styles.text}>{title2}</Text>
            </View>
            {title3 && (
              <TouchableOpacity
                style={[styles.row, {paddingVertical: 2}]}
                onPress={() => {
                  setApplyOpeningHoursModal(!ApplyOpeningHoursModal);
                }}>
                <Image
                  source={icon3}
                  resizeMode={'contain'}
                  style={[styles.topSubSection, {tintColor: COLORS.Black}]}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      textDecorationLine: 'underline',
                      textDecorationColor: COLORS.Primary,
                    },
                  ]}>
                  {title3}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View> */}

      {/* social category */}
      {/* <View style={styles.scrollTabBar}> */}
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.ButtonContainerView}>
          {Linkdata.map((res, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (res.name == socialItem) {
                    onPhoneCallClick();
                  } else if (res.name == socialItem1) {
                    onDireactionClick();
                  } else {
                    onWebsiteClick();
                  }
                }}
                activeOpacity={0.7}
                key={index}
                style={styles.FlexView}>
                <Image
                  resizeMode="contain"
                  style={styles.Icon}
                  source={res.icon}
                />
                <Text style={styles.IconText}>{res.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View> */}

      {/* about */}
      {/* <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
        <TouchableOpacity
          onPress={() => handleAboutDetail()}
          style={[styles.aboutSection, {paddingBottom: isOpen ? 7 : 1}]}>
          <Text style={[styles.titleText, {color: COLORS.Black}]}>About</Text>
          <Image
            source={isOpen ? Icons.AboutUp : Icons.AboutDown}
            resizeMode="contain"
            style={[styles.clock, {marginBottom: 0}]}
          />
        </TouchableOpacity>
        {isOpen ? <Text style={styles.subText}>{aboutDetail}</Text> : null}
      </View>

      {/* OpeningHoursModal */}
      {/* <OpeningHoursModal
        ApplyOpeningHoursModal={ApplyOpeningHoursModal}
        setApplyOpeningHoursModal={setApplyOpeningHoursModal}
      /> */} 
    </View>
  )
};
export default CustomEventCardDetail;

const styles = StyleSheet.create({
  HeaderFlexView: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: Normalize(5),
    paddingHorizontal: Normalize(20),
    justifyContent: 'space-between',
  },
  BackAndTitleFlex: {
    width: '80%',
    flexDirection: 'row',
  },
  BackButton: {
    width: Normalize(35),
    height: Normalize(35),
    tintColor: COLORS.Primary,
  },
  HeaderTitleView: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: Normalize(10),
  },
  HeaderTitle: {
    width: Normalize(180),
    color: COLORS.Primary,
    fontSize: Normalize(20),
    fontFamily: FONTS.MontserratSemiBold,
  },
  IconsFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '20%',
  },
  IconView: {
    height: Normalize(37),
    width: Normalize(30),
    marginLeft: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  HeaderIcons: {
    width: Normalize(20),
    height: Normalize(20),
    tintColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ShareIcons: {
    width: Normalize(25),
    height: Normalize(25),
    tintColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: Normalize(120),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  topTitleImage: {
    height: Normalize(55),
    width: Normalize(55),
  },
  topSubSection: {
    height: Normalize(15),
    width: Normalize(15),
    marginRight: Normalize(5),
  },
  mainTitleText: {
    fontSize: Normalize(18),
    color: COLORS.Black,
    textTransform: 'capitalize',
    marginBottom: 3,
    fontFamily: FONTS.MontserratSemiBold,
  },
  buttonSection: {
    flexDirection: 'row',
    paddingVertical: Normalize(10),
    paddingHorizontal: Normalize(25),
    justifyContent: 'space-between',
  },
  // buttonWrapper: {
  //   flexDirection: 'row',
  //   padding: Normalize(10),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 1,
  //   borderColor: COLORS.Black,
  //   borderRadius: 30,
  // },
  // buttonContain: {
  //   flexDirection: 'row',
  //   padding: Normalize(10),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 1,
  //   borderColor: COLORS.Black,
  //   borderRadius: 30,
  // },
  // buttonIcon: {
  //   height: Normalize(14),
  //   width: Normalize(14),
  //   marginRight: 3,
  // },
  text: {
    fontSize: Normalize(12),
    color: '#333549',
    textTransform: 'capitalize',
    fontFamily: FONTS.MontserratRegular,
  },
  FlexView: {
    flexDirection: 'row',
    height: Normalize(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Normalize(20),
    marginHorizontal: Normalize(5),
    borderColor: COLORS.Black,
    backgroundColor: COLORS.White,
  },
  Icon: {
    width: Normalize(15),
    height: Normalize(15),
    marginLeft: Normalize(6),
  },
  ButtonContainerView: {
    width: '90%',
    alignSelf: 'center',
  },
  IconText: {
    color: COLORS.Black,
    marginLeft: Normalize(5),
    marginRight: Normalize(10),
    fontFamily: FONTS.MontserratSemiBold,
  },
  // SocialText: {
  //   fontSize: Normalize(12),
  //   lineHeight: 14,
  //   color: 'rgba(51, 53, 73, 1)',
  //   textTransform: 'capitalize',
  //   fontFamily: FONTS.MontserratSemiBold,
  // },
  subText: {
    fontSize: Normalize(14),
    color: '#333549',
    lineHeight: Normalize(20),
    marginBottom: Normalize(10),
    fontFamily: FONTS.MontserratRegular,
  },
  aboutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollTabBar: {
    paddingVertical: Normalize(10),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'rgba(230, 230, 230, 1)',
    borderBottomColor: 'rgba(230, 230, 230, 1)',
    backgroundColor: 'rgba(230, 230, 230, 0.3)',
  },
  clock: {
    height: Normalize(13),
    width: Normalize(13),
    marginRight: Normalize(3),
  },
  titleText: {
    width: '80%',
    fontSize: Normalize(16),
    color: COLORS.White,
    textTransform: 'capitalize',
    marginBottom: Normalize(3),
    fontFamily: FONTS.MontserratMedium,
  },
  BottomIntoView: {
    position: 'absolute',
    bottom: Normalize(230),
    // top: Normalize(45),
    justifyContent: 'center',
    width: '100%',
  },
  donkeyImageView: {
    alignSelf: 'center',
    marginVertical: Normalize(10),
  },
  donkeyImage: {
    width: Normalize(140),
    height: Normalize(140),
  },
  WelcomeTextView: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: Normalize(10),
    borderRadius: Normalize(10),
    backgroundColor: 'rgba(213, 243, 246, 1)',
  },
  TourWelcomeText: {
    color: COLORS.Primary,
    fontSize: Normalize(17),
    marginHorizontal: Normalize(10),
    fontFamily: FONTS.MontserratSemiBold,
  },
  TourSubText: {
    color: 'rgba(0, 3, 27, 0.8)',
    fontSize: Normalize(11),
    marginVertical: Normalize(5),
    marginHorizontal: Normalize(12),
    fontFamily: FONTS.MontserratRegular,
  },
  DismissView: {
    alignSelf: 'center',
    marginVertical: Normalize(10),
  },
  DismissText: {
    color: COLORS.White,
    fontSize: Normalize(12),
    fontFamily: FONTS.MontserratRegular,
  },
  TourButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Normalize(8),
    alignSelf: 'center',
    marginTop: Normalize(60),
    marginHorizontal: Normalize(8),
    backgroundColor: 'rgba(94,96,111,255)',
    borderRadius: Normalize(10),
  },
  TourIndexOneTextView: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: Normalize(12),
    borderRadius: Normalize(10),
    backgroundColor: 'rgba(213, 243, 246, 1)',
  },
  TourIndexOneImageView: {
    position: 'absolute',
    left: Normalize(-18),
    top: Normalize(-32),
  },
  TourIndexOneImage: {
    width: Normalize(45),
    height: Normalize(45),
    alignSelf: 'center',
  },
  TourCardView: {
    marginHorizontal: Normalize(15),
    backgroundColor: 'rgba(93,95,110,255)',
    marginTop: Normalize(195),
    borderRadius: Normalize(20),
    paddingVertical: Normalize(10),
  },
});
