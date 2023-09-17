import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import ToastStyle from './Src/Common/ToastStyle';
import { store } from './Src/Redux/Store/Store';
import AKIONavigation from './Src/Routes/AKIONavigation';
import { name as appName } from './app.json';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <ToastProvider
            placement='bottom'
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
    </QueryClientProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
