import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import LinearGradient from 'react-native-linear-gradient';

interface SelectImageProps {
  handleImagePicker: (mode: string) => void;
}
const SelectImageSheetView: React.FC<SelectImageProps> = ({
  handleImagePicker,
}) => {
  return (
    <LinearGradient
      start={{
        x: 0,
        y: 3,
      }}
      end={{
        x: 0,
        y: 0,
      }}
      style={styles.Container}
      colors={[COLORS.primary, 'transparent']}>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Upload Image With?</Text>
      </View>

      <View style={styles.BottomContainer}>
        {/* Camera View */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.ButtonView}
          onPress={() => {
            handleImagePicker('camera');
          }}>
          <Feather
            name="camera"
            size={normalize(40)}
            color={COLORS.white}
            style={styles.IconStyle}
          />
          <Text style={styles.TitleStyle}>Camera</Text>
        </TouchableOpacity>

        {/* Image Picker View */}
        <TouchableOpacity
          onPress={() => {
            handleImagePicker('gallery');
          }}
          style={styles.ButtonView}
          activeOpacity={1}>
          <Feather
            name="image"
            size={normalize(40)}
            color={COLORS.white}
            style={styles.IconStyle}
          />
          <Text style={styles.TitleStyle}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SelectImageSheetView;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TitleView: {
    alignSelf: 'center',
    marginVertical: normalize(18),
    justifyContent: 'center',
  },
  Title: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  BottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ButtonView: {
    width: '40%',
    marginHorizontal: normalize(10),
    height: normalize(120),
    borderStyle: 'dotted',
    justifyContent: 'center',
  },
  IconStyle: {
    textAlign: 'center',
  },
  TitleStyle: {
    ...FONTS.h3,
    lineHeight: normalize(20),
    fontSize: normalize(17),
    color: COLORS.white,
    textAlign: 'center',
    marginTop: normalize(5),
  },
});
