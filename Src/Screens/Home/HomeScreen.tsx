import * as NetInfo from '@react-native-community/netinfo';
import React, { FC, useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StatusBar, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useSelector } from 'react-redux';
import CommonStyles from '../../Common/CommonStyles';
import { COLORS } from '../../Common/Global';
import FloatingButton from '../../Components/HomeScreen/FloatingButton';
import GreetingByTime from '../../Components/HomeScreen/GreetingByTime';
import {
  GetEverythingNews,
  GetTopHeadlinesNews,
} from '../../Services/HomeService';
import styles from './styles';

const HomeScreen: FC = () => {
  const toast = useToast();

  const userData = useSelector(state => state?.auth.user);
  const userName = userData?.username ? userData?.username : userData?.name;

  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isArticleLoading, setisArticleLoading] = useState<boolean>(false);

  const showToast = (message: string, status: string) => {
    toast.show(message, {
      type: 'custom_toast',
      title: 'Error',
      status: status,
    });
  };

  const FetchRecentAndTopArticles = async () => {
    setisArticleLoading(true);
    try {
      const recentResponse = await GetEverythingNews();
      const topHeadlinesResponse = await GetTopHeadlinesNews();

      if (recentResponse && recentResponse.articles) {
        const latestRecentArticles = recentResponse.articles.slice(0, 15);
        // Set latestRecentArticles
      } else {
        showToast('Failed to fetch recent articles data', 'fail');
      }

      if (topHeadlinesResponse && topHeadlinesResponse.articles) {
        const latestTopHeadlines = topHeadlinesResponse.articles.slice(0, 15);
        // Set topHeadlinesResponse
      } else {
        showToast('Failed to fetch top headlines data', 'fail');
      }

      setisArticleLoading(false);
    } catch (error) {
      showToast('An error occurred while fetching articles', 'fail');
      setisArticleLoading(false);
      console.error('Error fetching articles:', error);
    }
  };

  const onRefresh = () => {
    if (isConnected) {
      FetchRecentAndTopArticles();
    } else {
      showToast('Please check your internet connection', 'fail');
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state && state.isConnected) {
        setIsConnected(state.isConnected);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
      FetchRecentAndTopArticles();
    } else {
      showToast('Please check your internet connection', 'fail');
    }
  }, [isConnected]);

  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.black} />
      <ScrollView
        style={[CommonStyles.container]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={[styles.HomeContainer]}>
          <View style={styles.HeaderNameView}>
            <GreetingByTime userName={userName} onPress={() => {}} />
          </View>
        </View>
      </ScrollView>

      <FloatingButton />
    </React.Fragment>
  );
};

export default HomeScreen;
