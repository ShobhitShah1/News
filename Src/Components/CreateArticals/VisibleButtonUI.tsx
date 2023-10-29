import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, FONTS, Opacity} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonUIProps {
  name: string;
  onButtonPress: () => void;
  containerStyle: object;
  isFocused: Boolean;
}

const VisibleButtonUI: React.FC<ButtonUIProps> = ({
  name,
  isFocused,
  onButtonPress,
  containerStyle,
}) => {
  return (
    <LinearGradient
      colors={
        isFocused ? [COLORS.red, 'transparent'] : ['transparent', 'transparent']
      }
      start={{
        x: 0,
        y: 5,
      }}
      end={{
        x: 0,
        y: 0,
      }} style={{borderRadius: normalize(10), marginVertical: normalize(10)}}>
      <TouchableOpacity
        style={containerStyle}
        activeOpacity={Opacity.ActiveOpacity}
        onPress={onButtonPress}>
        <View style={styles.FlexView}>
          <View style={styles.IconView}>
            <MaterialIcons
              name={name === 'Public' ? 'public' : 'lock'}
              color={COLORS.white}
              size={normalize(45)}
              style={styles.Icon}
            />
            {/* {isFocused && (
            <Feather
              name="check-circle"
              color={COLORS.white}
              size={normalize(15)}
              style={styles.CheckMark}
            />
          )} */}
          </View>

          <View style={styles.NameView}>
            <Text style={styles.TextStyle}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default VisibleButtonUI;

const styles = StyleSheet.create({
  FlexView: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: normalize(25),
  },
  IconView: {
    margin: normalize(10),
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  Icon: {
    alignSelf: 'center',
  },
  TextStyle: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  NameView: {
    // margin: normalize(10),
    // marginLeft: normalize(13),
  },
  CheckMark: {
    right: -5,
    bottom: -5,
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});
