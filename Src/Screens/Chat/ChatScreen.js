import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, TextInput, TouchableOpacity } from 'react-native';
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

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  const [isLoadEarlierVisible, setIsLoadEarlierVisible] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [limit, setLimit] = useState(20);
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const chatId = '0d8GOOjf7AnJv351H8F2'; // Replace with the actual chat ID
    const unsubscribeListener = firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();
          const data = {
            _id: doc.id,
            text: firebaseData.text,
            createdAt: firebaseData.createdAt.toDate(),
            user: firebaseData.user,
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
      const chatId = '0d8GOOjf7AnJv351H8F2'; // Replace with the actual chat ID
      firestore()
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add({
          text,
          createdAt: firestore.Timestamp.fromDate(createdAt),
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
    const chatId = '0d8GOOjf7AnJv351H8F2'; // Replace with the actual chat ID
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
        setMessages(previousMessages =>
          GiftedChat.prepend(previousMessages, newMessages.reverse())
        );
        setIsLoadingEarlier(false);
        setIsLoadEarlierVisible(snapshot.docs.length === limit);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      })
      .catch(error => {
        console.log('Error loading earlier messages:', error);
        setIsLoadingEarlier(false);
      });
  }, [lastVisible, limit]);

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

  const renderComposer = props => {
    return (
      <View style={styles.composerContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor="#9B9B9B"
          multiline
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => onSend([{ text, user: { _id: '1' }, createdAt: new Date() }])}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
        renderComposer={renderComposer}
        renderSend={props => {
          return (
            <Send {...props}>
              <Text>Send</Text>
            </Send>
          );
        }}
      />
    </View>
  );
}

const styles = {
  composerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#FFF',
  },
};
