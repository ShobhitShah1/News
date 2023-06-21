import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Normalize} from '../Global/Normalize';
import {COLORS, FONTS} from '../Global/Theme';

const CustomTourCard = ({
  bgImage,
  image,
  icon,
  category,
  title,
  text,
  subText,
  logo,
  eventBy,
  onPress,
  month,
  date,
  save,
  style,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: Normalize(10),
        width: '100%',
        borderRadius: Normalize(10),
      }}
      activeOpacity={1}
      onPress={onPress}>
      <Image
        source={{uri: bgImage}}
        resizeMode="cover"
        style={styles.bgImage}
      />    
      {/* save alert */}
      {/* {save && (
        <View style={styles.alertSection}>
          <Image
            source={{uri: logo}}
            resizeMode={'contain'}
            style={styles.logoImage}
          />
          <Text style={[styles.text, {paddingLeft: 5}]}>{`Save ${save}`}</Text>
        </View>
      )} */}

      {/* eventby alert */}
      {eventBy && (
        <View style={[styles.alertSection, {paddingVertical: 5}]}>
          <Image
            source={{uri: logo}}
            resizeMode={'contain'}
            style={styles.logoImage}
          />
          <Text
            style={[
              styles.text,
              {paddingLeft: 5},
            ]}>{`Event by: ${eventBy}`}</Text>
        </View>
      )}

      <View style={styles.detailSection}>
        {image ? (
          <Image
            source={{uri: image}}
            resizeMode={'contain'}
            style={styles.image}
          />
        ) : (
          <View style={styles.eventTimeWrapper}>
            <Text style={styles.monthText}>{month}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        )}

        <View style={[styles.textWrapper, style]}>
          <Text style={styles.categoryText} numberOfLines={1}>
            {category}
          </Text>
          <Text style={styles.titleText} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.row}>
            <Text style={styles.text} numberOfLines={1}>
              {text}
            </Text>
            <Text style={[styles.text, {paddingHorizontal: 5}]}>.</Text>
            <Text style={styles.text} numberOfLines={1}>
              {subText}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomTourCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  bgImage: {
    width: '100%',
    height: Normalize(157),
    alignItems: 'center',
    justifyContent: 'center',
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
