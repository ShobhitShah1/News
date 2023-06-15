import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  LoadEarlier,
  Send,
} from 'react-native-gifted-chat';
import CommonStyles from '../../Common/CommonStyles';
import { COLORS } from '../../Common/Global'; 

export default function ChatScreen({ }) {

  const [messages, setMessages] = useState([]);
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  const [isLoadEarlierVisible, setIsLoadEarlierVisible] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [limit, setLimit] = useState(20);
  const navigation = useNavigation();
  const route = useRoute();
  const { chatId } = '0d8GOOjf7AnJv351H8F2';

  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('chats')
      .doc('0d8GOOjf7AnJv351H8F2')
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();
          const data = {
            _id: doc.id,
            text: firebaseData.text,
            createdAt: new Date().getTime(),
            ...firebaseData,
          };
          return data;
        });
        setMessages(messages);
      });

    return () => unsubscribeListener();
  }, []);

  const onSend = useCallback((messages = []) => {
    messages.forEach(message => {
      const { text, user, createdAt } = message;
      firestore()
        .collection('chats')
        .doc('0d8GOOjf7AnJv351H8F2')
        .collection('messages')
        .add({
          text,
          createdAt,
          user,
        })
        .then(res => {
          console.log('Message sent successfully!');
        })
        .catch(error => {
          console.log('Error sending message: ', error);
        });
    });
  }, []);

  const onLoadEarlier = useCallback(() => {
    setIsLoadingEarlier(true);
    firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .endBefore(lastVisible)
      .limit(limit)
      .get()
      .then(snapshot => {
        const newMessages = snapshot.docs.map(doc => {
          const firebaseData = doc.data();
          return {
            _id: doc.id,
            text: firebaseData.text,
            createdAt: firebaseData.createdAt.toDate(),
            user: firebaseData.user,
          };
        });
        setMessages(GiftedChat.prepend(messages, newMessages.reverse()));
        setIsLoadingEarlier(false);
        setIsLoadEarlierVisible(snapshot.docs.length === limit);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      })
      .catch(error => {
        console.log('Error loading earlier messages:', error);
        setIsLoadingEarlier(false);
      });
  }, [chatId, lastVisible, limit, messages]);

  const renderLoading = () => {
    return <ActivityIndicator size="large" color="#00ff00" />;
  };

  const renderLoadEarlier = () => {
    return (
      <LoadEarlier
        onPress={onLoadEarlier}
        isLoadingEarlier={isLoadingEarlier}
        isLoadEarlierVisible={isLoadEarlierVisible}
      />
    );
  };

  return (
    <View style={CommonStyles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: '1',
        }}
        loadEarlier={isLoadEarlierVisible}
        onLoadEarlier={onLoadEarlier}
        isLoadingEarlier={isLoadingEarlier}
        renderLoading={renderLoading}
        renderLoadEarlier={renderLoadEarlier}
        renderAvatarOnTop={true}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: COLORS.primary,
                },
                left: {
                  backgroundColor: '#E5E5EA',
                },
              }}
              textStyle={{
                right: {
                  color: COLORS.white,
                },
              }}
            />
          );
        }}
        renderInputToolbar={props => {
          return (
            <InputToolbar
              {...props}
              containerStyle={{
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: '#E5E5EA',
              }}
            />
          );
        }}
        renderComposer={props => {
          return (
            <Composer
              {...props}
              textInputStyle={{
                color: '#000',
                backgroundColor: '#F4F4F4',
                borderRadius: 10,
                paddingHorizontal: 16,
              }}
            />
          );
        }}
        renderSend={props => {
          return (
            <Send {...props}>
              <Text>Hello</Text>
              {/* <Icon name="send" size={28} color="#007AFF" /> */}
            </Send>
          );
        }}
      />
    </View>
  );
}
