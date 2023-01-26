/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AKIONavigation from './Src/Routes/AKIONavigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Src/Redux/Store/Store';
import PushNotification, { Importance } from 'react-native-push-notification';
import Index from './Src/Screens/Notifications/Index';

PushNotification.createChannel(
    {
        channelId: "AKIOMAIN", // (required)
        channelName: "AkioLocal", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        // soundName: "C:\Users\shobh\Documents\Projects\AKIO\android\app\src\main\res\raw\noti.mp3", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.createChannel(
    {
        channelId: 'promotions',
        channelName: 'Promotions',
        channelDescription: 'Notifications for promotional offers',
        soundName: 'default',
        importance: 4
    },
    (created) => console.log('Channel created', created)
);

PushNotification.createChannel(
    {
        channelId: 'news',
        channelName: 'News',
        channelDescription: 'Notifications for latest news',
        soundName: 'default',
        importance: 4
    },
    (created) => console.log('Channel created', created)
);

const App = () => {
    return (
        <Provider store={store} >
            <AKIONavigation />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
