import React, {useRef} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, ImageURL, SIZES} from '../../Common/Global';
import Icons from '../../Common/Icons';
import styles from './styles';

const HomeHeaderView = ({username, Count}) => {
  const TextInputRef = useRef();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                {Count !== null && Count > 0 ? (
                  <View style={styles.countView}>
                    <Text style={styles.CountText}>
                      {Count > 9 ? '9+' : Count}
                    </Text>
                  </View>
                ) : null}
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
        {/* <View style={styles.SearchBarStyle}>
          <View style={styles.leftImageView}>
            <Image source={Icons.WhiteSearch} style={styles.leftImage} />
          </View>
          <TextInput
            ref={TextInputRef}
            placeholder="Search"
            disableFullscreenUI={true}
            style={styles.TextInputStyle}
            placeholderTextColor={COLORS.white}
          />
          <TouchableOpacity style={styles.SearchButton}>
            <Image source={Icons.ChatWhite} style={styles.searchButtonIcon} />
          </TouchableOpacity>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeHeaderView;
