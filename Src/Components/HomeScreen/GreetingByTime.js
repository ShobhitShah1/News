import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';

const {width} = Dimensions.get('window');

interface GreetingProps {
  onPress: () => void;
  userName: string;
}

const GreetingByTime: FC<GreetingProps> = ({userName, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.FlexView}>
        <View style={styles.TextView}>
          <Text style={styles.Text}>
            {'Hy'}, <Text style={styles.NameText}>{userName} 👋</Text>
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={styles.IconView}>
          <Ionicons
            name="settings-outline"
            color={COLORS.white}
            style={styles.Icon}
            size={normalize(25)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreetingByTime;

const styles = StyleSheet.create({
  container: {
    width: width - normalize(30),
  },
  FlexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextView: {
    width: '80%',
  },
  Text: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  NameText: {
    color: COLORS.primary,
  },
  IconView: {
    width: '20%',
    justifyContent: 'center',
  },
  Icon: {
    alignSelf: 'flex-end',
  },
});
