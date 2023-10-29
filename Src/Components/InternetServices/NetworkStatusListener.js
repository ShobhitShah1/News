import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';

const NetworkStatusListener = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('🛜 Connected:', state.isConnected);
      if (!state.isConnected) {
        navigation.navigate('NoNet');
      }
    });

    return () => {
      // Clean up the event listener when the component unmounts.
      unsubscribe();
    };
  }, []);

  return null; // You can render anything here, or return null if you don't want to render anything.
};

export default NetworkStatusListener;
