import {MotiProgressBar} from 'moti';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {COLORS, FONTS} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import styles from './Styles';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const PasswordInfo = () => {
  const navigation = useNavigation();

  const [red, setred] = React.useState(0);
  const [orange, setorange] = React.useState(0);
  const [yellow, setyellow] = React.useState(0);
  const [green, setgreen] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setred(0.3);
      setorange(0.5);
      setyellow(0.7);
      setgreen(1);
    }, 200);
    navigation.addListener('blur', () => {
      setred(0);
      setorange(0);
      setyellow(0);
      setgreen(0);
    });
  }, [navigation]);

  const size = 80;

  return (
    <View style={styles.PasswordInfoContainer}>
      <Text style={styles.PasswordInfoHeaderText}>
        How Strong Is Your Password?
      </Text>

      <View style={styles.PasswordInfoViewContainer}>
        <Progress.Circle
          size={size}
          indeterminate={false}
          style={[styles.barstyle]}
          progress={red}
          color={COLORS.red}
          borderWidth={2}
          showsText={true}
          textStyle={{...FONTS.h2, color: COLORS.white}}
        />
        <Progress.Circle
          size={size}
          indeterminate={false}
          style={[styles.barstyle]}
          progress={orange}
          color={COLORS.orange}
          borderWidth={2}
          showsText={true}
          textStyle={{...FONTS.h2, color: COLORS.white}}
        />
        <Progress.Circle
          size={size}
          indeterminate={false}
          style={[styles.barstyle]}
          progress={yellow}
          color={COLORS.yellow}
          borderWidth={2}
          showsText={true}
          textStyle={{...FONTS.h2, color: COLORS.white}}
        />
        <Progress.Circle
          size={size}
          indeterminate={false}
          style={[styles.barstyle]}
          progress={green}
          color={COLORS.green}
          borderWidth={2}
          showsText={true}
          textStyle={{...FONTS.h2, color: COLORS.white}}
        />
      </View>
    </View>
  );
};

export default PasswordInfo;
