import React from 'react';
import {View} from 'react-native';
import CommonStyles from '../../Common/CommonStyles';
import HomeHeaderView from '../../Components/HomeScreen/HomeHeaderView';

export default function HomeScreen() {
  const [Username, setUsername] = React.useState('Shobhit');

  return (
    <View style={CommonStyles.container}>
      <HomeHeaderView username={Username} />
    </View>
  );
}
