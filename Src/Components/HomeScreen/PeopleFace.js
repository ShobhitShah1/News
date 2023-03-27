import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export default function ({item, index}) {
  const startWidth = index => {
    if (index == 0) {
      return 2;
    } else {
      return 0;
    }
  };

  const endWidth = index => {
    if (index == item.length - 1) {
      return 2;
    } else {
      return 0;
    }
  };

  const leftMargin = index => {
    if (index == 0) {
      return 10;
    } else if (index == 1) {
      return -5;
    } else if (index == 2) {
      return -20;
    } else {
      return -35;
    }
  };

  return (
    <View style={styles.PeopleImageView}>
      <Image
        style={[
          styles.PeopleImage,
          {
            borderStartWidth: startWidth(index),
            borderEndWidth: endWidth(index),
            left: leftMargin(index),
          },
        ]}
        source={{uri: item.people}}
      />
    </View>
  );
}
