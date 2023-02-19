import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, ImageURL, SIZES} from '../../Common/Global';
import styles from './styles';

const HomeHeaderView = ({username}) => {
  return (
    <View style={styles.HeaderView}>
      <View style={styles.HeaderTopView}>
        <View style={styles.mainFlex}>
          {/* Image And Name View */}
          <View style={[styles.HeaderFlexView, {width: '70%'}]}>
            <View style={styles.ImageAndNameView}>
              <Image
                source={{uri: ImageURL.random}}
                style={styles.ProfileImage}
              />
              <View style={styles.ProfileAddView}>
                <MaterialIcons
                  name="add"
                  size={SIZES.h3}
                  color={COLORS.white}
                />
              </View>
            </View>
            <View style={styles.ProfileNameView}>
              <Text style={styles.ProfileWelcome}>Hi there!</Text>
              <Text style={styles.Username} numberOfLines={1}>
                {username}! 👋
              </Text>
            </View>
          </View>

          {/* Notification Buttons */}
          <View style={[styles.HeaderFlexView, {width: '30%'}]}>
            <TouchableOpacity style={styles.ButtonView}>
              <Ionicons
                name="notifications"
                size={SIZES.h2}
                color={COLORS.white}
                style={styles.Icons}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonView}>
              <Feather
                name="menu"
                size={SIZES.h2}
                color={COLORS.white}
                style={styles.Icons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
        {/* Search */}
        <View>
          <View></View>
          <TextInput placeholder="Search" />
          <View></View>
        </View>
    </View>
  );
};

export default HomeHeaderView;
