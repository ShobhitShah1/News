import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import VisibleButtonUI from './VisibleButtonUI';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

interface VisibilityButtonsProps {
  Ref: React.RefObject<BottomSheetModal>;
  isArticlePublic: boolean;
  setisArticlePublic?: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibilityButtonsView: React.FC<VisibilityButtonsProps> = ({
  Ref,
  isArticlePublic, 
}) => {
  const close = () => Ref.current && Ref.current.close();
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
          isFocused={isArticlePublic ? true : false}
          containerStyle={styles.ButtonStyle}
          onButtonPress={() => close()}
        />
        <VisibleButtonUI
          name={'Private'}
          isFocused={isArticlePublic ? false : true}
          containerStyle={styles.ButtonStyle}
          onButtonPress={() => close()}
        />
      </View>
    </LinearGradient>
  );
};

export default VisibilityButtonsView;

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
    width: normalize(120),
    height: normalize(100),
    justifyContent: 'center',
    borderRadius: normalize(10),
    marginVertical: normalize(10),
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
