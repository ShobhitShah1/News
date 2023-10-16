import React, {useState} from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, DimensionsSize, FAMILY, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import Images from '../../Common/Images';

const RenderHomeNews = props => {
  const {data, key, ViewPosition} = props;
  const Image = data.item.urlToImage
    ? {
        uri: data.item.urlToImage,
        priority: FastImage.priority.high,
      }
    : Images.ImageNotFound;
  const [isImageLoading, setisImageLoading] = useState(false);

  const SkeletonView = () => {
    return (
      <View style={{position: 'absolute', top: 0}}>
        <SkeletonPlaceholder
          enabled
          speed={800}
          backgroundColor={COLORS.primary}
          highlightColor={COLORS.white}
          borderRadius={SIZES.radius}>
          <SkeletonPlaceholder.Item alignItems="center">
            <SkeletonPlaceholder.Item
              width={185}
              height={160}
              borderRadius={SIZES.radius}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  };

  const onNewsPress = () => {
    if (data.item?.url) Linking.openURL(data.item.url);
  };

  return ViewPosition === 'horizontal' ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onNewsPress}
      key={data.index}
      style={styles.LetestNewsTitleView}>
      <View style={styles.ArticalView}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          onLoad={() => setisImageLoading(true)}
          onLoadStart={() => setisImageLoading(true)}
          onLoadEnd={() => setisImageLoading(false)}
          source={Image}
          style={styles.ArticalImage}
        />
        {isImageLoading && <SkeletonView />}
        <Text numberOfLines={2} style={styles.LetestNewsTitle}>
          {data.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onNewsPress}
      key={data.index}
      style={styles.VerticalView}>
      <View style={styles.VerticalFlexView}>
        <View style={styles.VerticalImageView}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            onLoad={() => setisImageLoading(true)}
            onLoadStart={() => setisImageLoading(true)}
            onLoadEnd={() => setisImageLoading(false)}
            source={Image}
            style={styles.VerticalImage}
          />
        </View>

        <View style={styles.VerticalTextView}>
          <Text numberOfLines={3} style={styles.LetestNewsTitle}>
            {data.item.title}
          </Text>

          <View style={styles.VerticalDateTimeView}>
            <Feather
              name="clock"
              color={COLORS.lightGray}
              size={normalize(13)}
              style={styles.VerticalDateTimeViewIcon}
            />
            <Text style={styles.DateAndTimeText}>
              {new Date(data.item.publishedAt).toDateString()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderHomeNews;

const styles = StyleSheet.create({
  LetestNewsTitleView: {
    width: normalize(180),
    marginVertical: normalize(5),
  },
  ArticalView: {
    overflow: 'hidden',
    width: normalize(180),
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  ArticalImage: {
    width: normalize(165),
    height: 160,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
  },
  LetestNewsTitle: {
    width: normalize(170),
    marginTop: 10,
    lineHeight: normalize(22),
    fontFamily: FAMILY.PoppinsMedium,
    fontSize: normalize(14),
    color: COLORS.white,
  },

  // Vertical View
  VerticalView: {
    width: DimensionsSize.width,
    overflow: 'hidden',
  },
  VerticalFlexView: {
    flexDirection: 'row',
  },
  VerticalImageView: {
    width: '30%',
    // width: normalize(100),
    height: normalize(90),
    justifyContent: 'center',
    marginVertical: normalize(10),
    marginHorizontal: normalize(1),
  },
  VerticalImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  VerticalTextView: {
    width: '70%',
    marginVertical: normalize(2),
    marginHorizontal: normalize(10),
  },
  VerticalDateTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  VerticalDateTimeViewIcon: {
    marginRight: normalize(5),
    justifyContent: 'center',
    alignContent: 'center',
  },
  DateAndTimeText: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: normalize(2),
    fontFamily: FAMILY.PoppinsMedium,
    fontSize: normalize(12),
    color: COLORS.lightGray,
  },
});
