import create from './Index';
import axios from 'axios';
import ApiConfig from '../Config/ApiConfig';
import createAxiosInstance from './Index';
import {useSelector} from 'react-redux';

export const GetEverythingNews = async () => {
  try {
    const axiosInstance = await createAxiosInstance('business', 'in');
    const response = await axiosInstance.get('everything');
    if (response.status === 200) {
      return response.data;
    } else {
      console.log('Something Went Wrong With Everything API');
      throw new Error('API request failed');
    }
  } catch (error) {
    console.error('Error fetching Everything API:', error);
    throw error;
  }
};

export const GetTopHeadlinesNews = async () => {
  // const selectedCountry = useSelector(state => state.auth.country);
  try {
    const axiosInstance = await createAxiosInstance('business', 'in');
    const response = await axiosInstance.get('top-headlines');

    if (response.status === 200) {
      return response.data;
    } else {
      console.log('Something Went Wrong With Everything API');
      throw new Error('API request failed');
    }
  } catch (error) {
    console.error('Error fetching Everything API:', error);
    throw error;
  }
};

export default {
  GetEverythingNews,
  GetTopHeadlinesNews,
};
