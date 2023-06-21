import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import CommonStyles from '../../Common/CommonStyles';
import ChatButton from '../../Components/ChatButton';
import { Logout } from '../../Redux/Actions/AuthAction';
import styles from './styles';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function HomeScreen({ navigation }) {

  const UserData = useSelector((state) => state.auth.user);

  return (
    <View style={CommonStyles.container}>
      <TouchableOpacity
        onPress={() => Logout({ navigation: navigation })}
        style={styles.HeaderNameView}>
        <Text numberOfLines={1} style={styles.headerName}>
          Hello, {UserData?.username} 👋
        </Text>
      </TouchableOpacity>
    </View>
  );
}