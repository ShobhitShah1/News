import React from 'react';
import {Animated, Dimensions, StyleSheet, TextInput} from 'react-native';
import {COLORS, FAMILY, SIZES} from './Global';
import {normalize} from './GlobalSize';

const {width, height} = Dimensions.get('window');

const CommonTextInput = ({
  placeholder,
  value,
  placeholderTextColor,
  onChangeText,
  renderRightView,
  secureTextEntry,
  customStyleView,
  onFocus,
  onBlur,
  onPressIn,
}) => {
  return (
    <Animated.View style={[styles.View, {...customStyleView}]}>
      <Animated.View style={[styles.textInputView]}>
        <TextInput
          onPressIn={onPressIn}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.Textinput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
        />
      </Animated.View>
      <Animated.View style={styles.renderRightView}>
        {renderRightView}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - normalize(50),
    height: 50,
    backgroundColor: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.textInputBorder, //activeBorderColor
    borderRadius: SIZES.radius,
  },
  Textinput: {
    top: 2,
    fontFamily: FAMILY.PoppinsRegular,
    color: COLORS.white,
    fontSize: 17,
  },
  textInputView: {
    width: '87%',
    marginLeft: '3%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  renderRightView: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '10%',
    alignItems: 'center',
  },
});

export default CommonTextInput;
