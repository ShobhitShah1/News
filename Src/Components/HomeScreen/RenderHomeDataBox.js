import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderHomeDataBox = ({Data, Index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{Data.displayname}</Text>
    </View>
  )
}

export default RenderHomeDataBox

const styles = StyleSheet.create({
    container:{
        width: Dimensions.width - 50,
        height: 100,
        backgroundColor: 'black'
    }
})