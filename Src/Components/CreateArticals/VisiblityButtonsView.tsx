import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import VisibleButtonUI from './VisibleButtonUI';

interface VisibilityButtonsProps {
  isArticalPublica: boolean;
  setisArticalPublica: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisiblityButtonsView: React.FC<VisibilityButtonsProps> = ({
  isArticalPublica,
  setisArticalPublica,
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
        <Text style={styles.Title}>Choose audience</Text>
      </View>

      <View style={styles.FlexView}>
        <VisibleButtonUI
          name={'Public'}
          isFocused={isArticalPublica ? true : false}
          containerStyle={
            isArticalPublica ? styles.FocusButtonStyle : styles.ButtonStyle
          }
          onButtonPress={() => setisArticalPublica(true)}
        />
        <VisibleButtonUI
          name={'Private'}
          isFocused={isArticalPublica ? false : true}
          containerStyle={
            !isArticalPublica ? styles.FocusButtonStyle : styles.ButtonStyle
          }
          onButtonPress={() => setisArticalPublica(false)}
        />
      </View>
    </LinearGradient>
  );
};

export default VisiblityButtonsView;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TitleView: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: normalize(18),
  },
  FlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Title: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  FocusButtonStyle: {
    // flex: 1,
    width: normalize(120),
    height: normalize(100),
    justifyContent: 'center',
    borderRadius: normalize(10),
    // backgroundColor: COLORS.primary,
    marginHorizontal: normalize(10),
  },
  ButtonStyle: {
    // flex: 1,
    width: normalize(120),
    height: normalize(100),
    justifyContent: 'center',
    borderRadius: normalize(10),
    marginHorizontal: normalize(10),
  },
});
