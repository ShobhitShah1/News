import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {ArticleType} from '../../../types/ArticleType';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import { normalize } from '../../../Common/GlobalSize';

interface PopularNewsCardProps {
  data: ArticleType;
  isArticleLoading: boolean;
  index: number;
  isFocused: boolean;
}

const PopularNewsCard: FC<PopularNewsCardProps> = ({
  data,
  index,
  isArticleLoading,
  isFocused,
}) => {
  const translateX = useSharedValue(-100);

  useEffect(() => {
    if (isFocused) {
      // Define your animation
      translateX.value = withSpring(0, {damping: 2, stiffness: 40});
    }
  }, [isFocused]);

  // Create an animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  // console.log('Top Data:', data, 'IsLoading:', isArticleLoading);
  return (
    <Animated.View style={[styles.PostContainer, animatedStyle]} key={index}>
      {isArticleLoading ? (
        <Text>Loading....</Text>
      ) : (
        <View>
          <FastImage
            source={{uri: data.urlToImage}}
            resizeMode="cover"
            style={styles.ArticlePoster}
          />
          <Text>{data.title}</Text>
        </View>
      )}
    </Animated.View>
  );
};

export default PopularNewsCard;

const styles = StyleSheet.create({
  PostContainer: {
    width: scale(200),
    marginHorizontal: verticalScale(3), 
    height: verticalScale(150),
  },

  ArticlePoster: {
    width: '90%',
    height: verticalScale(80),
  },
});
