import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {COLORS, FONTS} from '../Common/Global';
import {normalize} from '../Common/GlobalSize';

const NoNetAnimation = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [connectionStatusAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    Animated.timing(connectionStatusAnim, {
      toValue: isConnected ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isConnected, connectionStatusAnim]);

  const notConnectedTranslateY = connectionStatusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -normalize(20)],
  });

  const connectedTranslateY = connectionStatusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [normalize(20), 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.statusContainer,
          {transform: [{translateY: notConnectedTranslateY}]},
        ]}>
        <Text style={styles.notConnectedText}>Not connected</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.statusContainer,
          {transform: [{translateY: connectedTranslateY}]},
        ]}>
        <Text style={styles.connectedText}>Connected</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 20,
    // alignSelf: 'center',
  },
  statusContainer: {
    backgroundColor: COLORS.red,
    borderRadius: normalize(20),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(6),
    marginVertical: normalize(10),
  },
  notConnectedText: {
    ...FONTS.body3,
    color: COLORS.white,
  },
  connectedText: {
    ...FONTS.body3,
    color: COLORS.green,
  },
});

export default NoNetAnimation;
