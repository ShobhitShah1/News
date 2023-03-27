/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import { COLORS } from './Src/Common/Global';
import ToastStyle from './Src/Common/ToastStyle';
import {store} from './Src/Redux/Store/Store';
import AKIONavigation from './Src/Routes/AKIONavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <ToastProvider
          placement="bottom"
          duration={4000}
          offset={30} 
          animationType="zoom-in"
          renderType={{
            custom_toast: toast => (
              <ToastStyle
                title={toast.title}
                message={toast.message}
                status={toast.status}
              />
            ),
          }}>
          <AKIONavigation />
        </ToastProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => App);
