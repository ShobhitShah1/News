import NetworkHelper from './NetworkHelper';
import qs from 'querystring';

function WService() {}

WService.prototype.URI = (resource, params = null) => {
  var uri = 'API' + resource;
  const realParams = qs.stringify(params);
  return uri + '?' + realParams;
};

WService.prototype.getBanners = function () {
  return NetworkHelper.get(this.URI('get_banners'));
};

export default WService;
