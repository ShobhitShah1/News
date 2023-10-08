import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FAMILY, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import * as Icon from 'react-native-vector-icons/Fontisto';

const SearchBox = ({placeholder, Search, setSearch}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {}}
      style={styles.SearchBox}>
      <View style={styles.SearchContant}>
        <Icon.default
          name="search"
          size={normalize(15)}
          color={COLORS.SearchText}
          style={styles.SearchIcon}
        />
        <Text style={styles.SearchText}>Search for artical or writter</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  SearchBox: {
    width: '100%',
    height: normalize(40),
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    marginVertical: normalize(5),
    backgroundColor: COLORS.SearchBox,
  },
  SearchContant: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: normalize(10),
  },
  SearchIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  SearchText: {
    textAlign: 'justify',
    justifyContent: 'center',
    alignSelf: 'center',
    color: COLORS.SearchText,
    width: '85%',
    fontFamily: FAMILY.PoppinsRegular,
    marginHorizontal: normalize(10),
  },
});
