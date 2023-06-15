import React from 'react';

import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../Common/Global';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
});
