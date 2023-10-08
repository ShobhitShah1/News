import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS} from '../../Common/Global';

const GreetingByTime = ({userName}) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting('🌅 Good morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('🌤️ Good afternoon');
    } else {
      setGreeting('🌃 Good evening');
    }
  }, []);

  return (
    <View>
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.primary,
        }}>
        {greeting}, {userName}!
      </Text>
    </View>
  );
};

export default GreetingByTime;
