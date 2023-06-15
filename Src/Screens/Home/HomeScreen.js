import dynamicLinks from '@react-native-firebase/dynamic-links';
import React, { useEffect, useState } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import CommonStyles from '../../Common/CommonStyles';
import ChatButton from '../../Components/ChatButton';
import { Logout } from '../../Redux/Actions/AuthAction';
import styles from './styles';
import { COLORS, FONTS } from '../../Common/Global';

export default function HomeScreen({navigation}) {
  const UserData = useSelector(state => state.auth.user);
  const [generateLink, setGeneratedLink] = useState('');

  const BuildLink = async () => {
    const link = await dynamicLinks().buildLink({
      link: 'https://invertase.io/offer',
      domainUriPrefix: 'https://newakio.page.link',
      analytics: {
        campaign: 'banner',
      },
    });

    console.log(link);
    setGeneratedLink(link);
  };

  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    if (link.url === 'https://invertase.io/offer') {
      // ...navigate to your offers screen
      navigation.navigate('Offer');
    } else {
      alert('not matched ');  r
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log("link -->",link);
        if (link.url === 'https://invertase.io/offer') {
          // ...navigate to your offers screen
          navigation.navigate('Offer');
        } else {
          alert('not matched ');
        }
      });
  }, []);

  return (
    <View style={CommonStyles.container}>
      <TouchableOpacity
        onPress={() => Logout({navigation: navigation})}
        style={styles.HeaderNameView}>
        <Text numberOfLines={1} style={styles.headerName}>
          Hello, {UserData?.username} 👋
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{justifyContent: 'center', alignSelf:'center'}} onPress={() => BuildLink()}>
        <Text style={{color: COLORS.white, ...FONTS.h2, textAlign:'center'}}>Create Link</Text>
      </TouchableOpacity>

        <Text onPress={() => Linking.openURL(generateLink)} style={{color: COLORS.white, ...FONTS.h2, textAlign:'center'}}>{generateLink}</Text>


      <ChatButton size={60} onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}
