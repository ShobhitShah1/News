import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Common/Global'
import messaging from '@react-native-firebase/messaging'

export default function HomeScreen() {

  React.useEffect(() => {
  }, [])


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
      <Text style={{ color: COLORS.black }}>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})