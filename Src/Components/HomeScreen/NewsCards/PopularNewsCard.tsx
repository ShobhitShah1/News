import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ArticleType} from '../../../types/ArticleType';
import Animated from 'react-native-reanimated';

interface PopularNewsCardProps {
  data: ArticleType;
  isArticleLoading: boolean;
  index: number;
}

const PopularNewsCard: FC<PopularNewsCardProps> = ({
  data,
  index,
  isArticleLoading,
}) => {
  console.log('Top Data:', data, 'IsLoading:', isArticleLoading);
  return (
    <Animated.View style={styles.PostContainer} key={index}>
      <Text>{data.title}</Text>
    </Animated.View>
  );
};

export default PopularNewsCard;

const styles = StyleSheet.create({
  PostContainer: {},
});
