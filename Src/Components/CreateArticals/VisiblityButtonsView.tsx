import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
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
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Choose audience</Text>
      </View>

      <VisibleButtonUI
        name={'Public'}
        isFocused={isArticalPublica ? true : false}
        containerStyle={[styles.ButtonStyle]}
        onButtonPress={() => setisArticalPublica(true)}
      />
      <VisibleButtonUI
        name={'Private'}
        isFocused={isArticalPublica ? false : true}
        containerStyle={[styles.ButtonStyle]}
        onButtonPress={() => setisArticalPublica(false)}
      />
    </View>
  );
};

export default VisiblityButtonsView;

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
  ButtonStyle: {
    alignSelf: 'center',
    height: normalize(55),
    width: width + normalize(10),
    marginVertical: normalize(10),
    borderRadius: SIZES.subRedius,
    borderBottomWidth: normalize(2),
  },
});
