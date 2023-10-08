import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FAMILY, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
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
    <View style={styles.VerticalView}></View>
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
    width: 185,
    height: 160,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
  },
  LetestNewsTitle: {
    width: normalize(170),
    marginTop: 10,
    lineHeight: normalize(22),
    fontFamily: FAMILY.PoppinsMedium,
    fontSize: normalize(15),
    color: COLORS.white,
  },

  // Vertical View
  VerticalView: {},
});
