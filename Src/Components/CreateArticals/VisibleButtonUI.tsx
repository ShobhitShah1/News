import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, FONTS, Opacity} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

interface ButtonUIProps {
  name: string;
  onButtonPress: () => void;
  containerStyle: object;
  isFocused: Boolean;
}

const VisibleButtonUI: React.FC<ButtonUIProps> = ({
  name,
  onButtonPress,
  containerStyle,
  isFocused,
}) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={Opacity.ActiveOpacity}
      onPress={onButtonPress}>
      <View style={styles.FlexView}>
        <View style={styles.IconView}>
          <MaterialIcons
            name={name === 'Public' ? 'public' : 'lock'}
            color={COLORS.white}
            size={normalize(25)}
            style={styles.Icon}
          />
          {isFocused && (
            <Feather
              name="check-circle"
              color={COLORS.white}
              size={normalize(15)}
              style={styles.CheckMark}
            />
          )}
        </View>

        <View style={styles.NameView}>
          <Text style={styles.TextStyle}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VisibleButtonUI;

const styles = StyleSheet.create({
  FlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(25),
  },
  IconView: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    backgroundColor: COLORS.SearchBox,
  },
  Icon: {
    alignSelf: 'center',
  },
  TextStyle: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  NameView: {
    margin: normalize(10),
    marginLeft: normalize(13),
  },
  CheckMark: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});
