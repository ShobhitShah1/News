import * as NetInfo from '@react-native-community/netinfo';
import {Text} from 'moti';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Common/Global';
import FloatingButton from '../../Components/HomeScreen/FloatingButton';
import GreetingByTime from '../../Components/HomeScreen/GreetingByTime';
import LatestNewsCard from '../../Components/HomeScreen/NewsCards/LatestNewsCard';
import PopularNewsCard from '../../Components/HomeScreen/NewsCards/PopularNewsCard';
import {useFetchRecentAndTopArticles} from '../../Hooks/useFetchRecentAndTopArticles';
import styles from './styles';

const HomeScreen: FC = () => {
  const toast = useToast();
  const scrollY = useRef(new Animated.Value(0)).current;

  const userData = useSelector(state => state?.auth.user);
  const userName = userData?.username ? userData?.username : userData?.name;

  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Hooks
  const {isArticleLoading, GetLatestNews, GetPopularNews, fetchData} =
    useFetchRecentAndTopArticles();

  const showToast = (message: string, status: string) => {
    toast.show(message, {
      type: 'custom_toast',
      title: 'Error',
      status: status,
    });
  };

  const onRefresh = () => {
    if (isConnected) {
      fetchData();
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

  return (
    <View style={{backgroundColor: COLORS.black, flex: 1}}>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.black} />
        <View style={[styles.HomeContainer]}>
          {/* Top Header View */}
          <View style={[styles.HeaderNameView]}>
            <GreetingByTime userName={userName} onPress={() => {}} />
          </View>

          <View style={styles.AllNewsContainerView}>
            {/* Global News View */}
            <View style={styles.NewsContainer}>
              <FlatList
                horizontal
                data={GetPopularNews}
                ListHeaderComponent={<Text style={{paddingTop: 20}}>Popular News</Text>}
                renderItem={({item, index}) => (
                  <PopularNewsCard
                    data={item}
                    index={index}
                    isArticleLoading={isArticleLoading}
                  />
                )}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
              />
            </View>

            {/* User's News View */}
            <View style={styles.NewsContainer}>
              <FlatList
                horizontal
                data={GetPopularNews}
                ListHeaderComponent={<Text>Latest News</Text>}
                renderItem={({item, index}) => (
                  <LatestNewsCard
                    data={item}
                    index={index}
                    isArticleLoading={isArticleLoading}
                  />
                )}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <FloatingButton />
    </View>
  );
};

export default HomeScreen;
