import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../Global/Icons';
import {Normalize} from '../../Global/Normalize';
import Images from '../../Global/Images';
import Modal from 'react-native-modal';
import SwipeButton from 'rn-swipe-button';
import {COLORS, FONTS} from '../../Global/Theme';
import {DEAL_DETAIL_TOUR_INDEX} from '../../Redux/Action/ActionType';
import {useDispatch} from 'react-redux';

const TourDealPopupModal = ({
  TourApplyDealPopupModal,
  setTourApplyDealPopupModal,
  setTourApplyRedeemedModal,
}) => {
  const [SwipeDone, setSwipeDone] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      setSwipeDone(false);
    });
  }, []);

  const CheckoutButton = () => {
    return (
      <Image
        source={Icons.Fast_Forward}
        resizeMode="contain"
        style={{height: Normalize(40), width: Normalize(40)}}
      />
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        propagateSwipe={true}
        hasBackdrop={true}
        backdropOpacity={0.7}
        coverScreen={true}
        transparent={true}
        onBackdropPress={() => {
          setTourApplyDealPopupModal(false);
          dispatch({
            type: DEAL_DETAIL_TOUR_INDEX,
            DealsDetailScreenTourIndex: 4,
          });
        }}
        onBackButtonPress={() => {
          setTourApplyDealPopupModal(false);
          dispatch({
            type: DEAL_DETAIL_TOUR_INDEX,
            DealsDetailScreenTourIndex: 4,
          });
        }}
        isVisible={TourApplyDealPopupModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={1000}
        animationOutTiming={900}
        backdropTransitionInTiming={1500}
        backdropTransitionOutTiming={1500}
        style={[{backgroundColor: 'rgba(0, 0, 0, 0)'}]}>
        <View style={styles.modalView}>
          <Image
            source={Images.Subtract}
            resizeMode="contain"
            style={styles.offterMenu}
          />

          <View style={styles.offterMenuWrapper}>
            <ImageBackground
              source={Images.ModalofferMenu}
              resizeMode="contain"
              style={styles.ModalofferMenu}>
              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                <Text style={styles.TotalOff}>5%</Text>
                <Text style={styles.OffText}>off</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.subTitleSection}>
            <Text style={styles.titleText}>You Got a Deal!</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Image
                source={Images.LineLeft}
                resizeMode="contain"
                style={styles.lineWrapper}
              />
              <Text style={styles.text}>Sonny’s BBQ</Text>
              <Image
                source={Images.LineRight}
                resizeMode="contain"
                style={styles.lineWrapper}
              />
            </View>

            <SwipeButton
              height={50}
              width={'70%'}
              title={'SLIDE TO REDEEM'}
              railBorderColor="transparent"
              titleStyles={styles.slideText}
              onSwipeFail={() => setSwipeDone(false)}
              onSwipeSuccess={() => {
                setTimeout(() => {
                  setSwipeDone(true);
                  dispatch({
                    type: DEAL_DETAIL_TOUR_INDEX,
                    DealsDetailScreenTourIndex: 4,
                  });
                  setTimeout(() => {
                    setTourApplyRedeemedModal(true);
                  }, 1000);
                }, 1000);
              }}
              thumbIconComponent={CheckoutButton}
              containerStyles={{marginVertical: 18}}
              thumbIconStyles={{
                left: Normalize(3),
                borderWidth: 0,
                borderColor: 'transparent',
              }}
              railBackgroundColor={'rgba(255, 255, 255, 0.8)'}
              railFillBackgroundColor={'rgba(255, 255, 255, 0.8)'}
              railFillBorderColor="transparent"
              thumbIconBorderColor="transparent"
              disabledThumbIconBorderColor="transparent"
              disabledRailBackgroundColor="transparent"
              thumbIconBackgroundColor="transparent"
            />

            <Text onPress={() => {}} style={styles.subText}>
              Redeem Later
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TourDealPopupModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    width: '100%',
    overflow: 'visible',
    height: Normalize(255),
    borderRadius: Normalize(15),
  },
  offterMenu: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offterMenuWrapper: {
    top: -60,
    position: 'absolute',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  offterMenuText: {
    textAlign: 'center',
    color: COLORS.Black,
    right: Normalize(2),
    fontSize: Normalize(24),
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
  },
  TotalOff: {
    right: Normalize(4),
    color: COLORS.Black,
    textAlign: 'center',
    fontSize: Normalize(25),
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
  },
  OffText: {
    top: -5,
    fontSize: Normalize(17),
    color: COLORS.Black,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    right: Normalize(4),
  },
  ModalofferMenu: {
    height: Normalize(135),
    width: Normalize(135),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  lineWrapper: {
    height: Normalize(7),
    width: Normalize(30),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: COLORS.Black,
    fontSize: Normalize(19),
    fontFamily: FONTS.MontserratSemiBold,
  },
  subTitleSection: {
    left: 0,
    right: 0,
    bottom: 20,
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: 6,
    color: COLORS.Black,
    fontSize: Normalize(14),
    fontFamily: FONTS.MontserratRegular,
  },
  subText: {
    color: COLORS.White,
    fontSize: Normalize(14),
    fontFamily: FONTS.MontserratMedium,
  },
  slideText: {
    left: Normalize(50),
    color: COLORS.Black,
    fontSize: Normalize(15),
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratMedium,
  },
  sliderSection: {
    flexDirection: 'row',
    width: '70%',
    marginVertical: 18,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 30,
    backgroundColor: 'rgba(195,243,248,255)',
  },
});
