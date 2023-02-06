/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import ToastStyle from './Src/Common/ToastStyle';
import Bottomsheet from './Src/Components/Test/Bottomsheet';
import { store } from './Src/Redux/Store/Store';
import AKIONavigation from './Src/Routes/AKIONavigation';

// PushNotification.createChannel(
//     {
//         channelId: "AKIOMAIN",
//         channelName: "AkioLocal",
//         channelDescription: "A channel to categorise your notifications",
//         playSound: true,
//         importance: Importance.HIGH,
//         vibrate: true,
//     },
// );

// PushNotification.createChannel(
//     {
//         channelId: 'promotions',
//         channelName: 'Promotions',
//         channelDescription: 'Notifications for promotional offers',
//         soundName: 'default',
//         importance: 4
//     },
// );

// PushNotification.createChannel(
//     {
//         channelId: 'news',
//         channelName: 'News',
//         channelDescription: 'Notifications for latest news',
//         soundName: 'default',
//         importance: 4
//     },
// );

const App = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store} >
            <ToastProvider
                placement="bottom"
                duration={4000}
                offset={30}
                animationType="zoom-in"
                renderType={{
                    custom_toast: (toast) => (
                        console.log(toast),
                        <ToastStyle title={toast.title} message={toast.message} status={toast.status} />
                    ),
                }}
            >
                <AKIONavigation />
            </ToastProvider>
        </Provider>
        </GestureHandlerRootView>
    )
}

AppRegistry.registerComponent(appName, () => App);
