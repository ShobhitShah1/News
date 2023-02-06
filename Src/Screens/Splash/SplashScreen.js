import auth from '@react-native-firebase/auth';
import React, { useEffect, useRef } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../Common/Global';
import { normalize } from '../../Common/GlobalSize';
import Images from '../../Common/Images';
import { login, setUser } from '../../Redux/Actions/AuthAction';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (isMounted.current) {
                if (user) {
                    console.log("Hy");
                    navigation.replace('Home', { screen: 'HomeScreen' });
                } else {
                    console.log('Else');
                    navigation.replace('Auth', { screen: 'AuthHome' });
                }
            }
        });
    }, [navigation]);


    return (
        <View style={styles.Container}>
            <View style={styles.ImageView}>
                <Image source={Images.Rocket} style={styles.splashImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white
    },
    ImageView: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    splashImage: {
        width: normalize(250),
        height: normalize(250)
    },
    TextView: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        // ...FONTS.h1,
        fontSize: normalize(50),
        color: COLORS.black,
        margin: normalize(50),
    },
    ThugLifeImage: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignSelf: 'center'
    }
}) 