import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ArticleType } from '../../../types/ArticleType';

interface LatestNewsCardProps {
  data: ArticleType;
  isArticleLoading: boolean;
  index: number
}

const LatestNewsCard: FC<LatestNewsCardProps> = ({data, isArticleLoading, index}) => {
  return (
    <View key={index}>
      <Text>{data.title}</Text>
    </View>
  )
}

export default LatestNewsCard

const styles = StyleSheet.create({})