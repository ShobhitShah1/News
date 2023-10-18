import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {normalize} from '../../Common/GlobalSize';
import {COLORS} from '../../Common/Global';

interface ButtonUIProps {
  name: string;
  description: string;
  onButtonPress: () => void;
  containerStyle: object;
  textStyle: object;
  fillViewStyle: object;
}

const VisibleButtonUI: React.FC<ButtonUIProps> = ({
  name,
  onButtonPress,
  containerStyle,
  textStyle,
  fillViewStyle,
  description
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onButtonPress}>
      <View style={styles.FlexView}>
        <View style={{...styles.FillView, ...fillViewStyle}} />

        <View style={{margin: normalize(10)}}>
          <Text style={textStyle}>{name}</Text>
          <Text numberOfLines={1} style={textStyle}>{description}</Text>
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
    marginHorizontal: normalize(10)
  },
  FillView: {
    width: normalize(18),
    height: normalize(18),
    borderWidth: normalize(2),
    borderColor: COLORS.primary,
    borderRadius: normalize(50)
  },
});
