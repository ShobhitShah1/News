import { DeviceEventEmitter, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SHOW_TOAST_MESSAGE } from '../Common/Toast'
import { COLORS, FONTS } from '../Common/Global'

const Toast = () => {

    const onNewToast = (data) => {
        console.log("DATA", data);
    }

    React.useEffect(() => {
        DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast)
        return () => {
            DeviceEventEmitter.removeAllListeners()
        }
    }, [])


    return (
        <View style={styles.ToastAndroid}>
            <Text style={{ color: COLORS.white, textAlign:'center', ...FONTS.h3  }}>SHOW_TOAST_MESSAGE</Text>
        </View>
    )
}

export default Toast

const styles = StyleSheet.create({
    ToastAndroid: { 
        width: Dimensions.get('window').width - 50,
        height: 40,
        backgroundColor: COLORS.tinBlack,
        borderRadius: 5,
        justifyContent:'center',
        alignSelf:'center',
        position: 'absolute',
        bottom: '10%',
        zIndex: 1,
    }
})