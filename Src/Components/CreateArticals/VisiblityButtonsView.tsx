import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Data {
  visibilityStatus: String;
}

const VisiblityButtonsView:React.FC<Data> = ({visibilityStatus}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Public</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Private</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VisiblityButtonsView;

const styles = StyleSheet.create({});
