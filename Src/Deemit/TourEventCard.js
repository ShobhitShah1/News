import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '../../Global/Images';
import {Normalize} from '../../Global/Normalize';
import {COLORS, FONTS} from '../../Global/Theme';
const {width} = Dimensions.get('window');

const TourEventCard = () => {
  return (
    <View style={styles.eventSection}>
      <TouchableOpacity
        style={{
          marginBottom: Normalize(10),
          borderRadius: Normalize(10),
        }}
        activeOpacity={1}>
        <Image
          source={Images.EventTourImage}
          resizeMode='stretch'
          style={styles.bgImage}
        />

        {/* eventby alert */}
        <View style={[styles.alertSection, {paddingVertical: 5}]}>
          <Image
            source={Images.event_deemit}
            resizeMode={'contain'}
            style={styles.logoImage}
          />
          <Text
            style={[
              styles.text,
              {paddingLeft: 5},
            ]}>{`Event by: ${'Deem-it!'}`}</Text>
        </View>

        <View style={styles.detailSection}>
          <View style={styles.eventTimeWrapper}>
            <Text style={styles.monthText}>{'apr'}</Text>
            <Text style={styles.dateText}>{'2'}</Text>
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.categoryText} numberOfLines={1}>
              food
            </Text>
            <Text style={styles.titleText} numberOfLines={2}>
              Truck Off Deem-it! Food Truck Competition
            </Text>
            <View style={styles.row}>
              <Text style={styles.text} numberOfLines={1}>
                Apr 2, 2022
              </Text>
              <Text style={[styles.text, {paddingHorizontal: 5}]}>.</Text>
              <Text style={styles.text} numberOfLines={1}>
                Ocala, FL
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TourEventCard;

const styles = StyleSheet.create({
  eventSection: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  bgImage: {
    width: width - 40,
    maxWidth: width - 40,
    minHeight: Normalize(157),
    height: Normalize(157),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  alertSection: {
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
  detailSection: {
    padding: 10,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.Primary,
  },
  textWrapper: {
    marginLeft: 10,
    width: '80%',
  },
  eventTimeWrapper: {
    marginLeft: Normalize(5),
    margin: Normalize(2),
    paddingVertical: Normalize(10),
    paddingHorizontal: Normalize(13),
    justifyContent: 'center',
    borderRadius: Normalize(5),
    backgroundColor: COLORS.Secondary,
  },
  monthText: {
    fontSize: Normalize(12),
    lineHeight: Normalize(12),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    color: COLORS.Primary,
  },
  dateText: {
    fontSize: Normalize(18),
    lineHeight: Normalize(18),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    color: COLORS.Primary,
  },
  categoryText: {
    fontSize: Normalize(12),
    color: COLORS.Secondary,
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratRegular,
  },
  titleText: {
    fontSize: Normalize(16),
    color: COLORS.White,
    textTransform: 'capitalize',
    marginBottom: 5,
    fontFamily: FONTS.MontserratMedium,
  },
  logoImage: {
    height: Normalize(25),
    width: Normalize(25),
    zIndex: 1,
  },
  image: {
    height: Normalize(50),
    width: Normalize(50),
  },
  text: {
    fontSize: Normalize(10),
    color: COLORS.Gray,
    // textTransform: 'capitalize',
    fontFamily: FONTS.MontserratRegular,
  },
});
