import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icons from '../../Global/Icons';
import Images from '../../Global/Images';
import {Normalize} from '../../Global/Normalize';
import {COLORS, FONTS} from '../../Global/Theme';
import SkipButton from './SkipButton';
import {useDispatch} from 'react-redux';
import { DEAL_DETAIL_TOUR_INDEX } from '../../Redux/Action/ActionType';
const {width, height} = Dimensions.get('window');

const TourReddemDealsSheet = ({
  setRef,
  TourDealInfoModalRef,
  setWalkThroughtIndex,
  setTourApplyDealPopupModal,
  setWalkThrought,
}) => {
  const dispatch = useDispatch();
  return (
    <RBSheet
      ref={TourDealInfoModalRef}
      height={Platform.OS == 'android' ? Normalize(340) : Normalize(400)}
      closeOnDragDown={false}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: COLORS.AppTourBackground,
        },
        draggableIcon: {
          backgroundColor: 'transparent',
        },
        container: {
          width: '100%',
          overflow: 'visible',
          backgroundColor: 'rgba(0, 3, 27, 1)',
          borderTopLeftRadius: Normalize(20),
          borderTopRightRadius: Normalize(20),
        },
      }}>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: DEAL_DETAIL_TOUR_INDEX,
            DealsDetailScreenTourIndex: 3,
          }); 
          TourDealInfoModalRef.current.close();
        }}>
        <View
          style={{
            width: '100%',
            // position: 'absolute',
            // top: Normalize(-260),
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <SkipButton
            onPress={() => {
              dispatch({
                type: DEAL_DETAIL_TOUR_INDEX,
                DealsDetailScreenTourIndex: -1,
              });
            }}
            ContainerStyle={{
              top: Normalize(15),
            }}
          />
          <View
            style={{
              top: Normalize(50),
              left: 0,
              right: 0,
              paddingVertical: Normalize(15),
              borderRadius: Normalize(10),
              backgroundColor: 'rgba(213, 243, 246, 1)',
              width: '80%',
              alignSelf: 'center',
            }}>
            <View style={styles.TourIndexOneImageView}>
              <Image
                resizeMode="contain"
                source={Icons.GreenDonky}
                style={styles.TourIndexOneImage}
              />
            </View>
            <Text style={styles.TourWelcomeText}>Redeem Deals</Text>
            <Text style={styles.TourSubText}>
              Redeem deals in store or online with participating businesses.
            </Text>
          </View>
          <TouchableOpacity style={styles.DismissView}>
            <Text style={styles.DismissText}>Tap to Dismiss</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={styles.Container}>
        <View style={styles.ImageGlowView}>
          <View
            style={{
              marginTop: Normalize(50),
              width: Normalize(75),
              height: Normalize(75),
              borderRadius: Normalize(50),
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: COLORS.White,
            }}>
            <Image
              source={Images.event_deemit}
              resizeMode={'contain'}
              style={styles.imageWrapper}
            />
          </View>
        </View>
        <View style={[styles.HeaderView, {marginTop: 33}]}>
          <Text style={styles.HeaderText}>
            Free $5 added to your Deem-it! wallet for more savings.
          </Text>
        </View>

        <View style={styles.HeaderView}>
          <Text style={styles.SubText}>How to Redeem</Text>
          <View style={styles.redeemSection}>
            <View style={styles.redeemItemSection}>
              <View style={styles.redeemItem}>
                <Text style={styles.redeemNumber}>1</Text>
              </View>
              <Text style={[styles.detailText, {color: COLORS.White}]}>
                Click Below
              </Text>
            </View>

            <View style={styles.redeemItemSection}>
              <View style={styles.redeemItem}>
                <Text style={styles.redeemNumber}>2</Text>
              </View>
              <Text style={[styles.detailText, {color: COLORS.White}]}>
                Slide to Redeem
              </Text>
            </View>

            <View style={styles.redeemItemSection}>
              <View style={styles.redeemItem}>
                <Text style={styles.redeemNumber}>3</Text>
              </View>
              <Text style={[styles.detailText, {color: COLORS.White}]}>
                Show Code
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.HeaderView}>
          <Text style={styles.detailText}>
            This deal is not valid with other offers, discounts, specials,
            coupons, or promotions.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.SubscribeButton}
          onPress={() => {
            dispatch({
              type: DEAL_DETAIL_TOUR_INDEX,
              DealsDetailScreenTourIndex: 3,
            });
            TourDealInfoModalRef.current.close();
            setTimeout(() => {
              setTourApplyDealPopupModal(true);
            }, 1000);
          }}>
          <Text style={styles.SubscribeText}>Get it for $0</Text>
          <Image
            source={Icons.GoldCoin}
            resizeMode={'contain'}
            style={{marginLeft: 4, height: Normalize(30), width: Normalize(30)}}
          />
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default TourReddemDealsSheet;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageGlowView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -120,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageWrapper: {
    width: Normalize(75),
    height: Normalize(75),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  clockAlert: {
    position: 'absolute',
    top: -8,
    right: 30,
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 212, 234, 0.8)',
  },
  clock: {
    height: Normalize(12),
    width: Normalize(12),
    marginRight: 3,
  },
  HeaderView: {
    paddingVertical: Normalize(15),
    paddingHorizontal: Normalize(30),
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  HeaderText: {
    color: COLORS.White,
    fontSize: Normalize(18),
    fontFamily: FONTS.MontserratSemiBold,
  },
  SubText: {
    color: COLORS.White,
    fontSize: Normalize(16),
    fontFamily: FONTS.MontserratSemiBold,
  },
  redeemSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: Normalize(5),
    marginTop: Normalize(14),
  },
  redeemItemSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeemItem: {
    height: Normalize(20),
    width: Normalize(20),
    marginBottom: 5,
    borderRadius: Normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 226, 172, 1)',
  },
  redeemNumber: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: Normalize(12),
    fontFamily: FONTS.MontserratBold,
  },
  detailText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: Normalize(12),
    fontFamily: FONTS.MontserratRegular,
  },
  SubscribeButton: {
    flexDirection: 'row',
    width: '80%',
    height: Normalize(45),
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Normalize(30),
    backgroundColor: COLORS.Secondary,
  },
  SubscribeText: {
    textAlign: 'center',
    color: COLORS.Primary,
    fontSize: Normalize(15),
    fontFamily: FONTS.MontserratSemiBold,
  },

  // Donkey
  TourIndexOneTextView: {
    width: '80%',
    alignSelf: 'center',
    marginTop: Normalize(50),
    paddingVertical: Normalize(15),
    borderRadius: Normalize(10),
    backgroundColor: 'rgba(213, 243, 246, 1)',
  },
  TourIndexOneImageView: {
    position: 'absolute',
    left: Normalize(-18),
    top: Normalize(-35),
  },
  TourIndexOneImage: {
    width: Normalize(50),
    height: Normalize(50),
    alignSelf: 'center',
  },
  TourCardView: {
    marginHorizontal: Normalize(15),
    backgroundColor: 'rgba(93,95,110,255)',
    marginTop: Normalize(195),
    borderRadius: Normalize(20),
    paddingVertical: Normalize(10),
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
    marginTop: Normalize(55),
  },
  DismissText: {
    color: COLORS.White,
    fontSize: Normalize(12),
    fontFamily: FONTS.MontserratRegular,
  },
});
