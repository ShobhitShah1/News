import {store} from '../Store/Store';
import {logActivity} from './AuthAction';

const LoggerAction = Data => {
  const activity = {
    Method: Data?.Method || '',
    ApiName: Data?.ApiName || '',
    APIResponse: Data?.APIResponse || '',
    CustomTitle: Data?.CustomTitle || '',
    CustomDescription: Data?.CustomDescription || '',
    Date: new Date().toISOString(),
  };
  store.dispatch(logActivity(activity));
};

export default LoggerAction;
