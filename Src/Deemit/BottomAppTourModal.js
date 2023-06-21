import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Normalize } from '../../Global/Normalize';
import { COLORS, FONTS } from '../../Global/Theme';

export default function BottomAppTourModal({
  title,
  image,
  detailText,
  dismissButtonPress,
  style,
  backgroundColor
}) {
  return (
    <SafeAreaView style={styles.BottomIntoView}>
      {/* Welcome Message */}
      <View style={[styles.TourIndexOneTextView, style]}>
        <View style={styles.TourIndexOneImageView}>
          <Image
            resizeMode="contain"
            source={image}
            style={styles.TourIndexOneImage}
          />
        </View>
        <Text style={styles.TourWelcomeText}>{title}</Text>
        <Text style={styles.TourSubText}>{detailText}</Text>
      </View>

      {/* Dismiss */}
      <View style={styles.DismissView} onPress={dismissButtonPress}>
        <Text style={styles.DismissText}>Tap to Dismiss</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    BottomIntoView: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        width: '100%',
      },
      TourIndexOneTextView: {
        width: '80%',
        alignSelf: 'center',
        paddingVertical: Normalize(12),
        borderRadius: Normalize(10),
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
});
