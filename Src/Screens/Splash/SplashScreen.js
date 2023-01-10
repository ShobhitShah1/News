import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
 
const { width, height } = Dimensions.get('window');

export default function SplashScreen({navigation}) {
 
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Auth',{screen: 'Signin'})
        }, 3800);
    }, [])

    return (
        <Image source={{ uri: "https://media.tenor.com/TcfWmY_MNDkAAAAd/thug-life.gif" }} style={styles.ThugLifeImage} />
    )
}

const styles = StyleSheet.create({
    ThugLifeImage: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignSelf: 'center'
    }
}) 