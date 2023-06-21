import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../Global/Images';
import { Normalize } from '../../Global/Normalize';
import { COLORS, FONTS } from '../../Global/Theme';

const TourDealCard = () => {
  return (
    <View style={styles.eventSection}>
      <TouchableOpacity
        style={styles.TourEventView}
        activeOpacity={1}
        onPress={() => {}}>
        <Image
          source={Images.TourBackground}
          resizeMode="cover"
          style={styles.TourbgImage}
        />
        {/* save alert */}
        {/* <View style={styles.TouralertSection}>
          <Image
            source={Images.event_deemit}
            resizeMode="contain"
            style={styles.logoImage}
          />
          <Text
            style={[styles.Tourtext, {paddingLeft: 5}]}>{`Save ${20}`}</Text>
        </View> */}

        {/* eventby alert */}

        {/* <View style={[styles.TouralertSection, {paddingVertical: 5}]}>
          <Image
            source={Images.event_deemit}
            resizeMode={'contain'}
            style={styles.logoImage}
          />
          <Text
            style={[
              styles.Tourtext,
              {paddingLeft: 5},
            ]}>{`Event by: ${21}`}</Text>
        </View> */}

        <View style={styles.TourdetailSection}>
          <Image
            source={Images.deem_tour}
            resizeMode={'contain'}
            style={styles.Tourimage}
          />

          <View style={[styles.TourtextWrapper]}>
            <Text style={styles.TourcategoryText} numberOfLines={1}>
              {'SERVICE'}
            </Text>
            <Text style={styles.TourtitleText} numberOfLines={2}>
              {'Deem-it! Marketing'}
            </Text>
            <View style={styles.Tourrow}>
              <Text style={styles.Tourtext} numberOfLines={1}>
                {'Ocala, FL'}
              </Text>
              <Text style={[styles.Tourtext, {paddingHorizontal: 5}]}>.</Text>
              <Text style={styles.Tourtext} numberOfLines={1}>
                {'12 Miles'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TourDealCard;

const styles = StyleSheet.create({
  eventSection: {
    paddingHorizontal: 20,
  },
  Tourrow: {
    flexDirection: 'row',
  },
  TourEventView: {
    marginBottom: Normalize(10),
    width: '100%',
    borderRadius: Normalize(10),
  },
  TourbgImage: {
    width: '100%',
    height: Normalize(157),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  TouralertSection: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 3, 27, 0.90)',
  },
  TourdetailSection: {
    padding: 10,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.Primary,
  },
  TourtextWrapper: {
    marginLeft: 10,
    width: '80%',
  },
  ToureventTimeWrapper: {
    marginLeft: Normalize(5),
    margin: Normalize(2),
    paddingVertical: Normalize(10),
    paddingHorizontal: Normalize(13),
    justifyContent: 'center',
    borderRadius: Normalize(5),
    backgroundColor: COLORS.Secondary,
  },
  TourmonthText: {
    fontSize: Normalize(12),
    lineHeight: Normalize(12),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    color: COLORS.Primary,
  },
  TourdateText: {
    fontSize: Normalize(18),
    lineHeight: Normalize(18),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    color: COLORS.Primary,
  },
  TourcategoryText: {
    fontSize: Normalize(12),
    color: COLORS.Secondary,
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratRegular,
  },
  TourtitleText: {
    fontSize: Normalize(16),
    color: COLORS.White,
    textTransform: 'capitalize',
    marginBottom: 5,
    fontFamily: FONTS.MontserratMedium,
  },
  TourlogoImage: {
    height: Normalize(25),
    width: Normalize(25),
    zIndex: 1,
  },
  Tourimage: {
    height: Normalize(50),
    width: Normalize(50),
  },
  Tourtext: {
    fontSize: Normalize(10),
    color: COLORS.Gray,
    // textTransform: 'capitalize',
    fontFamily: FONTS.MontserratRegular,
  },
  logoImage: {
    height: Normalize(25),
    width: Normalize(25),
    zIndex: 1,
  },
});
