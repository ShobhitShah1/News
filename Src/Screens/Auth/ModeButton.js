import {MotiView} from 'moti';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../Common/Global';

export default function ModeButton({navigation}) {
  const dispatch = useDispatch();
  const [isActive, setisActive] = useState(false);
  const [ModeDetail, setModeDetail] = useState();

  useEffect(() => {
    setModeDetail(isActive ? 'Dark' : 'Light');
  }, [isActive]);

  const onButtonPress = () => {
    setisActive(!isActive);
  };

  const onNextClick = () => {
    if (ModeDetail === 'Dark') {
      dispatch({
        type: 'APP_MODE',
        BackgroundColoe: COLORS.primary,
        TextColor: COLORS.white,
      });
    } else {
      dispatch({
        type: 'APP_MODE',
        BackgroundColoe: COLORS.white,
        TextColor: COLORS.black,
      });
    }
    navigation.replace('Auth', {screen: 'SignIn'});
  };

  const transition = {
    type: 'timing',
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  };

  const BGCOLORS = {
    dark: COLORS.primary,
    light: COLORS.white,
  };

  const Switch = ({isActive, onPress, size}) => {
    const TrackWidth = useMemo(() => {
      return size * 1.5;
    }, [size]);
    const TrackHeight = useMemo(() => {
      return size * 0.4;
    }, [size]);
    const ModeHeight = useMemo(() => {
      return size * 0.7;
    }, [size]);

    return (
      <Pressable onPress={onPress}>
        <View style={styles.SwitchView}>
          <MotiView
            transition={transition}
            from={{
              backgroundColor: isActive ? BGCOLORS.dark : BGCOLORS.light,
            }}
            animate={{
              backgroundColor: isActive ? BGCOLORS.light : BGCOLORS.dark,
            }}
            style={[
              styles.MotiView,
              {
                width: TrackWidth,
                height: TrackHeight,
                borderRadius: TrackHeight / 2,
                backgroundColor: BGCOLORS.dark,
              },
            ]}
          />

          <MotiView
            transition={transition}
            animate={{
              translateX: isActive ? TrackWidth / 4 : -TrackWidth / 4,
            }}
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: COLORS.white,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <MotiView
              transition={transition}
              animate={{
                width: isActive ? 0 : ModeHeight,
                backgroundColor: isActive ? BGCOLORS.dark : BGCOLORS.light,
              }}
              style={{
                width: ModeHeight,
                height: ModeHeight,
                borderRadius: ModeHeight / 2,
                borderWidth: size * 0.1,
                borderColor: BGCOLORS.dark,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: isActive ? BGCOLORS.dark : BGCOLORS.light,
              }}
            />
          </MotiView>
        </View>
      </Pressable>
    );
  };

  return (
    <MotiView
      transition={transition}
      animate={{
        backgroundColor: isActive ? BGCOLORS.dark : BGCOLORS.light,
      }}
      style={[styles.container]}>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          margin: SIZES.size20,
        }}>
        <Text
          style={{
            color: isActive ? BGCOLORS.light : BGCOLORS.dark,
            ...FONTS.h2,
          }}>
          I Want App In {ModeDetail} Mode
        </Text>
      </View>
      <Switch size={60} onPress={onButtonPress} isActive={isActive} />
      <TouchableOpacity
        onPress={() => onNextClick()}
        activeOpacity={0.9}
        style={{
          position: 'absolute',
          top: SIZES.size20,
          right: SIZES.size20,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: isActive ? BGCOLORS.light : BGCOLORS.dark,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.InviteButton,
  },
  SwitchView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  MotiView: {
    position: 'absolute',
  },
});
