import {useState, useEffect} from 'react';
import {GetEverythingNews, GetTopHeadlinesNews} from '../Services/HomeService';
import {ArticleType} from '../types/ArticleType';
import { useToast } from 'react-native-toast-notifications';
 
// Define the custom hook
export function useFetchRecentAndTopArticles() {
  const toast = useToast();
  const [isArticleLoading, setArticleLoading] = useState<boolean>(false);
  const [GetLatestNews, setLatestNews] = useState<ArticleType[]>([]);
  const [GetPopularNews, setPopularNews] = useState<ArticleType[]>([]);

  const showToast = (message: string, status: string) => {
    toast.show(message, {
      type: 'custom_toast',
      title: 'Error',
      status: status,
    });
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setArticleLoading(true);

    try {
      const recentResponse = await GetEverythingNews();
      const topHeadlinesResponse = await GetTopHeadlinesNews();

      if (recentResponse && recentResponse.articles) {
        const latestRecentArticles: ArticleType[] =
          recentResponse.articles.slice(0, 15);
        setLatestNews(latestRecentArticles);
      } else {
        showToast('Failed to fetch recent articles data', 'fail');
      }

      if (topHeadlinesResponse && topHeadlinesResponse.articles) {
        const latestTopHeadlines: ArticleType[] =
          topHeadlinesResponse.articles.slice(0, 15);
        setPopularNews(latestTopHeadlines);
      } else {
        showToast('Failed to fetch top headlines data', 'fail');
      }

      setArticleLoading(false);
    } catch (error) {
      showToast('An error occurred while fetching articles', 'fail');
      setArticleLoading(false);
      console.error('Error fetching articles:', error);
    }
  };

  return {isArticleLoading, GetLatestNews, GetPopularNews, fetchData};
}
