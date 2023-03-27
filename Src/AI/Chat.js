import {useNavigation} from '@react-navigation/native';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from '@react-native-firebase/firestore';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
// import {auth, database} from '../config/firebase';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const onSignOut = () => {
    // signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{
  //           marginRight: 10,
  //         }}
  //         onPress={onSignOut}>
  //         {/* <AntDesign
  //           name="logout"
  //           size={24}
  //           color={COLORS.black}
  //           style={{marginRight: 10}}
  //         /> */}
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  // useLayoutEffect(() => {
  //   const collectionRef = collection('users');
  //   const q = query(collectionRef, orderBy('createdAt', 'desc'));

  //   const unsubscribe = onSnapshot(q, querySnapshot => {
  //     console.log('querySnapshot unsusbscribe');
  //     setMessages(
  //       querySnapshot.docs.map(doc => ({
  //         _id: doc.data()._id,
  //         createdAt: doc.data().createdAt.toDate(),
  //         text: doc.data().text,
  //         user: doc.data().user,
  //       })),
  //     );
  //   });
  //   return unsubscribe;
  // }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    // setMessages([...messages, ...messages]);
    const {_id, createdAt, text, user} = messages[0];
    // addDoc(collection('users'), {
    //   _id,
    //   createdAt,
    //   text,
    //   user,
    // });
  }, []);

  return (
    <>
      {/* {messages.map(message => (
        <Text key={message._id}>{message.text}</Text>
      ))} */}
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: '#fff',
        }}
        textInputStyle={{
          backgroundColor: '#000',
          borderRadius: 20,
        }}
        user={{
          // _id: auth?.currentUser?.email,
          avatar: 'https://i.pravatar.cc/300',
        }}
      />
    </>
  );
}

// import React, {useState} from 'react';
// import {GiftedChat} from 'react-native-gifted-chat';

// const Chat = () => {
//   const apiUrl = 'http://localhost:3000/chat';

//   const sendMessage = async message => {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({message}),
//     });

//     const data = await response.text();

//     return data;
//   };

//   const [messages, setMessages] = useState([]);

//   const onSend = async (newMessages = []) => {
//     const message = newMessages[0].text;
//     const response = await sendMessage(message);

//     const responseMessage = {
//       _id: Math.random().toString(36).substring(7),
//       text: response,
//       createdAt: new Date(),
//       user: {
//         _id: 2,
//         name: 'ChatGPT',
//         avatar: 'https://placeimg.com/140/140/any',
//       },
//     };

//     setMessages(GiftedChat.append(messages, responseMessage));
//   };

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={newMessages => onSend(newMessages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   );
// };

// export default Chat;
