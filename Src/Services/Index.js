import axios from 'axios';
import ApiConfig from '../Config/ApiConfig';

const createAxiosInstance = async (searchQuery, selectedCountry) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'X-API-Key': ApiConfig.APIKEY,
      'X-Country': selectedCountry,
    };

    const params = {
      q: searchQuery,
    };

    return axios.create({
      baseURL: ApiConfig.BASE_URL,
      headers: headers,
      params: params,
      timeout: 5000,
    });
  } catch (error) {
    console.error('Error creating Axios instance:', error);
    throw error;
  }
};

export default createAxiosInstance;
