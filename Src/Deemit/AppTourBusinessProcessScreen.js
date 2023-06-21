import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
// import BusinessHeader from '../Business/BusinessHeader';
// import {COLORS, DummyText, FONTS} from '../../Global/Theme';
// import CustomDetailSection from '../CustomDetailSection';
// import Images from '../../Global/Images';
// import Icons from '../../Global/Icons';
import {  normalize } from '../Common/GlobalSize';
import { COLORS, FONTS } from '../Common/Global';
import { useNavigation } from '@react-navigation/native';

const AppTourBusinessProcessScreen = () => {
  const scrollviewRef = useRef();
  const [selectedId, setSelectedId] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const Navigation = useNavigation()

  // Tour Data State
  const [WalkThrought, setWalkThrought] = useState(false);
  const [WalkThroughtIndex, setWalkThroughtIndex] = useState(-1);
  const [DealsDetailScreenTourIndex, setDealsDetailScreenTourIndex] =
    useState(-1);

  const Linkdata = [
    {
      id: 1,
      // icon: Icons.ContactCall,
      name: 'Phone Call',
    },
    {
      id: 2,
      // icon: Icons.Navigate,
      name: 'Directions',
    },
    {
      id: 3,
      // icon: Icons.Website,
      name: 'Website',
    },
  ];

  const DATA = [
    {
      id: 0,
      title: 'All Deals',
    },
    {
      id: 1,
      title: 'Limited Time',
    },
    {
      id: 2,
      title: 'Trending',
    },
  ];

  const Item = ({title, onPress, borderBottomColor, textColor}) => {
    return (
      <View
        style={{
          paddingVertical: normalize(8),
          paddingHorizontal: normalize(10),
          paddingBottom: 0,
          // marginHorizontal: normalize(12),
          // paddingRight : normalize(23),
          // paddingHorizontal: 20,
          // justifyContent: 'center',
          // alignSelf: 'center',
        }}
        onPress={onPress}>
        <View
          style={{
            paddingBottom: 8,
            borderBottomColor,
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontSize: normalize(14),
              textTransform: 'capitalize',
              fontFamily: FONTS.MontserratMedium,
              color: textColor,
            }}>
            {title}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Item
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        borderBottomColor={
          item.id === selectedId ? COLORS.Secondary : 'transparent'
        }
        borderBottomWidth={item.id === selectedId ? 1 : 0}
        textColor={
          item.id === selectedId ? COLORS.Secondary : 'rgba(174, 175, 182, 1)'
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollviewRef}
        bounces={false}
        showsVerticalScrollIndicator={false}
        onPress={() => Navigation.Navigate('Deal')}>
        <StatusBar backgroundColor={COLORS.White} barStyle={'dark-content'} />
        {/* <BusinessHeader
          saveImage={Icons.Saved}
          headerText={'Business Details'}
        /> */}
        <View>
          {/* image */}
          <View style={{paddingHorizontal: 30}}>
            {/* <Image
              resizeMode="cover"
              source={Images.DealTourImage}
              style={styles.topImage}
            /> */}
            <View
              style={[
                styles.row,
                {paddingVertical: 15, alignItems: 'flex-start'},
              ]}>
              {/* <Image
                source={Images.event_deemit}
                resizeMode={'contain'}
                style={styles.topTitleImage}
              /> */}
              <View style={{paddingLeft: 10, width: '80%'}}>
                <Text style={styles.mainTitleText}>Deem-it! Marketing</Text>
                <View style={[styles.row, {paddingVertical: 2}]}>
                  {/* <Image
                    source={Icons.Food_Icon}
                    resizeMode={'contain'}
                    style={[styles.topSubSection, {tintColor: COLORS.Black}]}
                  /> */}
                  <Text style={styles.text}>Service</Text>
                </View>
                <View style={[styles.row, {paddingVertical: 2}]}>
                  {/* <Image
                    source={Icons.MapOutline}
                    resizeMode={'contain'}
                    style={styles.topSubSection}
                  /> */}
                  <Text style={styles.text}>Ocala, FL</Text>
                </View>
                <View style={[styles.row, {paddingVertical: 2}]}>
                  {/* <Image
                    source={Icons.Colock}
                    resizeMode={'contain'}
                    style={[styles.topSubSection, {tintColor: COLORS.Black}]}
                  /> */}
                  <Text
                    style={[
                      styles.text,
                      {
                        textDecorationLine: 'underline',
                        textDecorationColor: COLORS.Primary,
                      },
                    ]}>
                    Open Now
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* social category */}
          <View style={styles.scrollTabBar}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              style={styles.ButtonContainerView}>
              {Linkdata.map((res, index) => {
                return (
                  <View key={index} style={styles.FlexView}>
                    <Image
                      resizeMode="contain"
                      style={styles.Icon}
                      source={res.icon}
                    />
                    <Text style={styles.IconText}>{res.name}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          {/* about */}
          <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
            <View
              style={[styles.aboutSection, {paddingBottom: isOpen ? 7 : 1}]}>
              <Text style={[styles.titleText, {color: COLORS.Black}]}>
                About
              </Text>
              {/* <Image
                source={isOpen ? Icons.AboutUp : Icons.AboutDown}
                resizeMode="contain"
                style={styles.aboutArrow}
              /> */}
            </View>
            {isOpen ? (
              <Text style={styles.subText}>
                We are a USA based digital marketing company with a twist!
                Deem-it! is committed to providing the best digital marketing
                services available. We also believe in matchmaking by bringing
                businesses and consumers together through focused marketing
                strategies
              </Text>
            ) : null}
          </View>
        </View>
        {/* <CustomDetailSection
          WalkThrought={DealsDetailScreenTourIndex !== 0 ? true : false}
          // image={
          //   DealsDetailScreenTourIndex !== 0
          //     ? Images.event_deemit
          //     : Images.event_deemit
          // }
          // topImage={
          //   DealsDetailScreenTourIndex !== 0
          //     ? Images.TourBackground
          //     : Images.DealTourImage
          // }
          mainTitleText={'Deem-it! Marketing'}
          icon1={Icons.Food_Icon}
          icon2={Icons.MapOutline}
          icon3={Icons.Colock}
          title1={'services'}
          title2={'Ocala, FL'}
          title3={'Open Now'}
          socialIcon={Icons.ContactCall}
          socialIcon1={Icons.Navigate}
          socialIcon2={Icons.Website}
          socialItem={'Phone Call'}
          socialItem1={'Directions'}
          socialItem2={'Website'}
          tintColor={COLORS.Black}
          aboutDetail={DummyText.AppTourPlaceHolderDetail}
          setWalkThrought={setWalkThrought}
          setWalkThroughtIndex={setWalkThroughtIndex}
          WalkThroughtIndex={DealsDetailScreenTourIndex}
          onPhoneCallClick={() => {}}
          onDireactionClick={() => {}}
          onWebsiteClick={() => {}}
          OpenTime={''}
        /> */}
        {/* scrollTabBar */}

        <View
          style={[
            styles.scrollTabBar,
            {
              marginTop: WalkThrought ? normalize(480) : 0,
              paddingBottom: 0,
              alignItems: 'center',
            },
          ]}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            extraData={selectedId}
            renderItem={renderItem}
            bounces={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignSelf: 'center',
              width: '85%',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          />
        </View>

        <View style={styles.textWrapper}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View style={{width: '85%'}}>
              <Text numberOfLines={2} style={styles.titleText}>
                Get $5 Worth of Deem-it! Dollars for your next use
              </Text>
              <View style={styles.row}>
                <Text style={[styles.text, {color: COLORS.White}]}>$0</Text>
                {/* <Image
                  source={Icons.GoldCoin}
                  resizeMode={'contain'}
                  style={styles.image}
                /> */}
              </View>
            </View>
            <View style={styles.button}>
              {/* <Image
                source={Icons.RightArrow}
                resizeMode="contain"
                style={styles.icon}
              /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppTourBusinessProcessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  // image
  topImage: {
    width: '100%',
    height: normalize(120),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topTitleImage: {
    height: normalize(55),
    width: normalize(55),
  },
  topSubSection: {
    height: normalize(15),
    width: normalize(15),
    marginRight: normalize(5),
  },
  mainTitleText: {
    fontSize: normalize(18),
    color: COLORS.Black,
    textTransform: 'capitalize',
    marginBottom: 3,
    fontFamily: FONTS.MontserratSemiBold,
  },
  text: {
    fontSize: normalize(12),
    color: '#333549',
    textTransform: 'capitalize',
    fontFamily: FONTS.MontserratRegular,
  },

  // social category
  scrollTabBar: {
    width: '100%',
    paddingVertical: normalize(7),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'rgba(230, 230, 230, 1)',
    borderBottomColor: 'rgba(230, 230, 230, 1)',
    backgroundColor: 'rgba(230, 230, 230, 0.3)',
  },
  ButtonContainerView: {
    width: Platform.OS == 'ios' ? '82%' : '85%',
    alignSelf: 'center',
  },
  FlexView: {
    flexDirection: 'row',
    height: normalize(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: normalize(20),
    marginHorizontal: Platform.OS == 'ios' ? normalize(2) : normalize(4),
    borderColor: COLORS.Black,
    backgroundColor: COLORS.White,
  },
  Icon: {
    width: normalize(15),
    height: normalize(15),
    marginLeft: normalize(6),
  },
  IconText: {
    color: COLORS.Black,
    marginLeft: normalize(5),
    marginRight: normalize(10),
    fontFamily: FONTS.MontserratSemiBold,
  },

  // about
  aboutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    width: '92%',
    fontSize: normalize(16),
    color: COLORS.White,
    textTransform: 'capitalize',
    marginBottom: 3,
    fontFamily: FONTS.MontserratMedium,
  },
  aboutArrow: {
    height: normalize(13),
    width: normalize(13),
    paddingRight: normalize(10),
    marginBottom: 0,
  },
  subText: {
    fontSize: normalize(14),
    color: '#333549',
    lineHeight: normalize(20),
    marginBottom: normalize(10),
    fontFamily: FONTS.MontserratRegular,
  },

  // scrollTabBar
  textWrapper: {
    padding: 13,
    paddingRight: 20,
    marginHorizontal: 25,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: COLORS.Primary,
  },

  button: {
    height: 43,
    width: 33,
    borderRadius: normalize(12),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.transparentWhite,
  },
  icon: {
    height: normalize(14),
    width: normalize(14),
    tintColor: COLORS.White,
  },
  image: {
    height: normalize(18),
    width: normalize(18),
    marginLeft: 4,
  },
});
