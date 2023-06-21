import React from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../Global/Theme';

const TourCustomEventCard = ({
  modalPress,
  skipButtonPress,
  bgImage,
  eventlogo,
  eventByText,
  eventImage,
  month,
  date,
  detailSecstyle,
  category,
  title,
  text,
  subText,
  TourIndexOneImage,
  TourWelcomeText,
  TourDetailText,
  Top,
  Left,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.TourContainer}
      onPress={modalPress}
    >
      <React.Fragment>
        <SafeAreaView />
        {skipButtonPress && (
          <TouchableOpacity
            style={[styles.skipButton, { top: Platform.OS === 'ios' ? 35 : 20 }]}
            onPress={skipButtonPress}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        )}
        <View style={[styles.TourCardWrapper, { top: Top || 0, left: Left || 0 }]}>
          <View style={styles.TourCardView}>
            <View style={styles.eventSection}>
              <View style={styles.cardWrapper}>
                <Image source={bgImage} style={styles.bgImage} />

                {eventByText && (
                  <View style={[styles.alertSection, { paddingVertical: 5 }]}>
                    <Image source={eventlogo} resizeMode="contain" style={styles.logoImage} />
                    <Text style={styles.text}>{`Event by: ${eventByText}`}</Text>
                  </View>
                )}

                <View style={styles.detailSection}>
                  {eventImage ? (
                    <Image source={eventImage} resizeMode="contain" style={styles.image} />
                  ) : (
                    <View style={styles.eventTimeWrapper}>
                      <Text style={styles.monthText}>{month}</Text>
                      <Text style={styles.dateText}>{date}</Text>
                    </View>
                  )}

                  <View style={[styles.textWrapper, detailSecstyle]}>
                    <Text style={styles.categoryText} numberOfLines={1}>{category}</Text>
                    <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
                    <View style={styles.row}>
                      <Text style={styles.text} numberOfLines={1}>{text}</Text>
                      <Text style={styles.text}>.</Text>
                      <Text style={styles.text} numberOfLines={1}>{subText}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <BottomAppTourModal
          title={TourWelcomeText}
          image={TourIndexOneImage}
          detailText={TourDetailText}
        />
      </React.Fragment>
    </TouchableOpacity>
  );
};

export default TourCustomEventCard;

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
  TourCardWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  TourCardView: {
    marginHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(93,95,110,255)',
  },
  eventSection: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.White,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  cardWrapper: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
  },
  bgImage: {
    width: '100%',
    height: 157,
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
  logoImage: {
    height: 25,
    width: 25,
    zIndex: 1,
  },
  detailSection: {
    padding: 10,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.Primary,
  },
  image: {
    height: 50,
    width: 50,
  },
  eventTimeWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.Secondary,
  },
  monthText: {
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    color: COLORS.Primary,
  },
  dateText: {
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratBold,
    color: COLORS.Primary,
  },
  row: {
    flexDirection: 'row',
  },
  textWrapper: {
    paddingLeft: 10,
    width: '80%',
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.Secondary,
    textTransform: 'uppercase',
    fontFamily: FONTS.MontserratRegular,
  },
  titleText: {
    fontSize: 16,
    color: COLORS.White,
    textTransform: 'capitalize',
    marginBottom: 5,
    fontFamily: FONTS.MontserratMedium,
  },
  text: {
    fontSize: 10,
    color: COLORS.Gray,
    fontFamily: FONTS.MontserratRegular,
  },
  skipButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 35 : 20,
    right: 10,
    zIndex: 1,
  },
  skipButtonText: {
    color: COLORS.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
