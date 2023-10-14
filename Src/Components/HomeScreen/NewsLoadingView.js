import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLORS, FAMILY, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const NewsLoadingView = () => {
  const TotalList = [1, 2, 3];
  const PlaceholderValue = [1, 2, 3, 4, 5];

  return (
    <View style={styles.LetestNewsTitleView}>
      {TotalList.map((item, index) => {
        return (
          <View key={index} style={styles.ArticalView}>
            <View style={{marginVertical: normalize(10)}}>
              <SkeletonPlaceholder
                backgroundColor={COLORS.Loader}
                highlightColor={COLORS.white}
                borderRadius={SIZES.radius}>
                <SkeletonPlaceholder.Item width={90} height={20} />
              </SkeletonPlaceholder>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              {PlaceholderValue.map((res, index) => {
                return (
                  <View
                    key={index}
                    style={[styles.ArticalView, {marginRight: normalize(10)}]}>
                    <SkeletonPlaceholder
                      enabled
                      speed={800}
                      backgroundColor={COLORS.Loader}
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
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  LetestNewsTitleView: {
    width: '100%',
    marginVertical: normalize(5),
  },
  ArticalView: {
    marginVertical: normalize(10),
    // overflow: 'hidden',
    width: normalize(154),
    // justifyContent: 'center',
    // alignSelf: 'center',
    // marginHorizontal: 5,
  },
  SectionTitleView: {
    marginTop: normalize(8),
    marginBottom: normalize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SectionTitleText: {
    fontSize: normalize(15),
    color: COLORS.Loader,
    fontFamily: FAMILY.PoppinsMedium,
  },
});

export default NewsLoadingView;
