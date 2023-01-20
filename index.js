/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AKIONavigation from './Src/Routes/AKIONavigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Src/Redux/Store/Store';
  
const App = () => {
    return (
        <Provider store={store} >
            <AKIONavigation />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
