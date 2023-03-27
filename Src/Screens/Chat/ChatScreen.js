import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import CommonStyles from '../../Common/CommonStyles';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback(message => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
  }, []);

  return (
    <View style={CommonStyles.container}>
      <GiftedChat
        messages={messages}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth()?.currentUser?.email,
          name: auth()?.currentUser?.displayName,
          avatar: auth()?.currentUser?.photoURL,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
