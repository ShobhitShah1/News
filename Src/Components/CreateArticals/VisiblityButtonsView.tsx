import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import VisibleButtonUI from './VisibleButtonUI';

const {width, height} = Dimensions.get('window');
interface VisibilityButtonsProps {
  isArticalPublica: Boolean;
  setisArticalPublica: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisiblityButtonsView: React.FC<VisibilityButtonsProps> = ({
  isArticalPublica,
  setisArticalPublica,
}) => {
  return (
    <View style={styles.Container}>
      <VisibleButtonUI 
        name={'Public'}
        description={"It can be seen by everyone."}
        textStyle={{
          ...FONTS.h4,
          color: isArticalPublica ? 'white' : COLORS.primary,
        }}
        fillViewStyle={{
          borderColor: isArticalPublica ? COLORS.white : COLORS.primary,
          backgroundColor:  isArticalPublica ? COLORS.white :'transparent',
        }}
        containerStyle={[
          styles.ButtonStyle,
          {
            backgroundColor: isArticalPublica ? COLORS.primary : 'transparent',
            borderColor: isArticalPublica ? 'transparent' : COLORS.primary,
          },
        ]}
        onButtonPress={() => setisArticalPublica(true)}
      />
      <VisibleButtonUI 
        name={'Private'}
        description={"It is only visible to you"}
        textStyle={{
          ...FONTS.h4,
          color: isArticalPublica ? COLORS.primary : 'white',
        }}
        fillViewStyle={{
          borderColor: isArticalPublica ? COLORS.primary : COLORS.white,
          backgroundColor:isArticalPublica ? 'transparent' : COLORS.white,
        }}
        containerStyle={[
          styles.ButtonStyle,
          {
            backgroundColor: isArticalPublica ? 'transparent' : COLORS.primary,
            borderColor: isArticalPublica ? COLORS.primary : 'transparent',
          },
        ]}
        onButtonPress={() => setisArticalPublica(false)}
      />
    </View>
  );
};

export default VisiblityButtonsView;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  ButtonStyle: {
    alignSelf: 'center',
    height: normalize(50),
    width: width - normalize(50),
    marginVertical: normalize(10),
    borderRadius: SIZES.subRedius,
    borderWidth: normalize(2),
  },
});
