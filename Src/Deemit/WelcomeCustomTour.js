import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Normalize} from '../../Global/Normalize';
import {COLORS, FONTS} from '../../Global/Theme';
import SkipButton from './SkipButton';

const WelcomeCustomTour = ({
  modalPress,
  skipButtonPress,
  image,
  style,
  titleText,
  detailText,
  dismissButtonPress,
}) => {
  const {width, height} = useWindowDimensions();
  const [isShow, setIsShow] = useState(false);
    setTimeout(() => {
      setIsShow(true);
    }, 2000);

  return (
    <Modal visible={true} transparent>
      {isShow && <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.TourContainer,
          {
            width: width,
            height: height,
            zIndex: 1,
          },
        ]}
        onPress={modalPress}>
        <SkipButton
          onPress={skipButtonPress}
          ContainerStyle={{
            top: Normalize(15),
          }}
        />

        <View style={styles.BottomIntoView}>
          {/* Image */}
          <View style={styles.donkeyImageView}>
            <Image
              resizeMode="contain"
              source={image}
              style={styles.donkeyImage}
            />
          </View>

          {/* Welcome Message */}
          <View style={[styles.WelcomeTextView, style]}>
            <Text style={styles.TourWelcomeText} numberOfLines={2}>
              {titleText}
            </Text>
            <Text style={styles.TourSubText} numberOfLines={2}>
              {detailText}
            </Text>
          </View>

          {/* Dismiss */}
          <View style={styles.DismissView} onPress={dismissButtonPress}>
            <Text style={styles.DismissText}>Tap to Dismiss</Text>
          </View>
        </View>
      </TouchableOpacity>}
    </Modal>
  );
};

export default WelcomeCustomTour;

const styles = StyleSheet.create({
  TourContainer: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: COLORS.AppTourBackground,
  },
  BottomIntoView: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? Normalize(30) : 0,
    justifyContent: 'center',
    width: '100%',
  },
  donkeyImageView: {
    alignSelf: 'center',
    marginVertical: Normalize(10),
  },
  donkeyImage: {
    width: Normalize(100),
    height: Normalize(100),
  },
  WelcomeTextView: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: Normalize(10),
    borderRadius: Normalize(10),
  },
  TourWelcomeText: {
    color: COLORS.Primary,
    fontSize: Normalize(17),
    marginHorizontal: Normalize(10),
    fontFamily: FONTS.MontserratSemiBold,
  },
  TourSubText: {
    color: 'rgba(0, 3, 27, 0.8)',
    fontSize: Normalize(12),
    marginVertical: Normalize(5),
    marginHorizontal: Normalize(12),
    fontFamily: FONTS.MontserratMedium,
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
});
