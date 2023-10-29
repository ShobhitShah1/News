import * as NetInfo from '@react-native-community/netinfo';
import React, {FC, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import CommonStyles from '../../Common/CommonStyles';
import {COLORS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import FlotingButton from '../../Components/HomeScreen/FlotingButton';
import GreetingByTime from '../../Components/HomeScreen/GreetingByTime';
import HoriVertiButtons from '../../Components/HomeScreen/HoriVertiButtons';
import NewsLoadingView from '../../Components/HomeScreen/NewsLoadingView';
import RenderHomeNews from '../../Components/HomeScreen/RenderHomeNews';
import SearchBox from '../../Components/HomeScreen/SearchBox';
import {
  GetEverythingNews,
  GetTopHeadlinesNews,
} from '../../Services/HomeService';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const HomeScreen: FC = () => {
  const toast = useToast();
  const navigation = useNavigation();

  const userData = useSelector(state => state.auth.user);
  const userName = userData?.username ? userData?.username : userData?.name;

  const [RecentArticles, setRecentArticles] = useState<object>([]);
  const [TopArticales, setTopArticales] = useState<object>([]);
  const [ViewPosition, setViewPosition] = useState<string>('vertical');

  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isArticalsLoading, setisArticalsLoading] = useState<boolean>(false);

  const showToast = (message: string, status: string) => {
    toast.show(message, {
      type: 'custom_toast',
      title: 'Error',
      status: status,
    });
  };

  const FetchRecentAndTopArticles = async () => {
    setisArticalsLoading(true);
    try {
      const recentResponse = await GetEverythingNews();
      const topHeadlinesResponse = await GetTopHeadlinesNews();

      if (recentResponse && recentResponse.articles) {
        const latestRecentArticles = recentResponse.articles.slice(0, 15);
        setRecentArticles(latestRecentArticles);
      } else {
        showToast('Failed to fetch recent articles data', 'fail');
      }

      if (topHeadlinesResponse && topHeadlinesResponse.articles) {
        const latestTopHeadlines = topHeadlinesResponse.articles.slice(0, 15);
        setTopArticales(latestTopHeadlines);
      } else {
        showToast('Failed to fetch top headlines data', 'fail');
      }

      setisArticalsLoading(false);
    } catch (error) {
      showToast('An error occurred while fetching articles', 'fail');
      setTopArticales([]);
      setRecentArticles([]);
      setisArticalsLoading(false);
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
      setIsConnected(state.isConnected);
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

  function RenderHeaderTitle(title: string) {
    return (
      <View style={styles.SectionTitleView}>
        <Text style={styles.SectionTitleText}>{title.title}</Text>
        <Feather
          name="arrow-right"
          color={COLORS.primary}
          size={normalize(21)}
        />
      </View>
    );
  }

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
            <GreetingByTime userName={userName} />
          </View>

          <View style={styles.SearchView}>
            <SearchBox />
          </View>

          <View style={styles.ViewPositionButtonView}>
            <HoriVertiButtons
              position={ViewPosition}
              setViewPosition={setViewPosition}
            />
          </View>

          {isArticalsLoading ? (
            <NewsLoadingView />
          ) : (
            <React.Fragment>
              <View style={styles.NewsContainer}>
                <View style={styles.NewsWrapper}>
                  <RenderHeaderTitle title="Recent Articals" />

                  <FlatList
                    horizontal={ViewPosition === 'horizontal' ? true : false}
                    data={RecentArticles}
                    estimatedItemSize={15}
                    windowSize={50}
                    indicatorStyle="white"
                    initialNumToRender={15}
                    maxToRenderPerBatch={15}
                    removeClippedSubviews={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item, index) => {
                      return (
                        <RenderHomeNews
                          data={item}
                          ViewPosition={ViewPosition}
                        />
                      );
                    }}
                    ListEmptyComponent={() => {
                      return (
                        <View style={styles.EmptyDataView}>
                          <Text style={styles.EmptyDataText}>
                            {'Sorry, we unable to fetch Recent Articles'}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
                <View style={styles.NewsWrapper}>
                  <RenderHeaderTitle title="Trending Articals" />

                  <FlatList
                    horizontal={ViewPosition === 'horizontal' ? true : false}
                    data={TopArticales}
                    indicatorStyle="white"
                    estimatedItemSize={15}
                    windowSize={50}
                    indicatorStyle="white"
                    initialNumToRender={15}
                    maxToRenderPerBatch={15}
                    removeClippedSubviews={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item, index) => {
                      return (
                        <RenderHomeNews
                          data={item}
                          ViewPosition={ViewPosition}
                        />
                      );
                    }}
                    ListEmptyComponent={() => {
                      return (
                        <View style={styles.EmptyDataView}>
                          <Text style={styles.EmptyDataText}>
                            {'Sorry, we unable to fetch Top Articles'}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </React.Fragment>
          )}
        </View>
      </ScrollView>

      <FlotingButton
        onPress={() => {
          navigation.navigate('CreateArtical');
        }}
      />
    </React.Fragment>
  );
};

export default HomeScreen;