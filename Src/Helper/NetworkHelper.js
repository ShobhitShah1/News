import axios from 'axios';
import {store} from '../Redux/Store/Store';

class NetworkHelper {
  static post(url, params, headers = null) {
    return NetworkHelper.httpRequest('post', url, params, headers);
  }

  static get(url, headers = null) {
    return NetworkHelper.httpRequest('get', url, null, headers);
  }

  static httpRequest(method, url, params, headers) {
    return new Promise((resolve, reject) => {
      var options = {
        method,
        headers: {Accept: 'application/json'},
      };

      if (params) {
        options.data = params;
      }

      axios
        .request({url, ...options})
        .then(response =>
          resolve({statusCode: response.status, body: response.data}),
        )
        .catch(error => reject(error));
    });
  }
}

export default NetworkHelper;
