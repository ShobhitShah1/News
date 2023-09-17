import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import {COLORS} from './Global';

const Loader = ({size}) => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={'rgba(0,0,0,1)'} barStyle={'light-content'} />
      <View style={styles.LoaderContainer}>
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            shadowOpacity: {width: 0, height: 0},
            elevation: 0
        }}
        animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            elevation: size / 10,
            shadowOpacity: {width: size / 10, height: size / 10}
          }}
          transition={{
              type: 'timing',
            duration: 1000,
            loop: true,
            // repeat: Infinity
        }}
          
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            borderColor: COLORS.primary,
            justifyContent: 'center',
            alignSelf: 'center',
            shadowColor: COLORS.primary,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 10,
          }}></MotiView>
      </View>
    </React.Fragment>
  );
};

export default Loader;

const styles = StyleSheet.create({
  LoaderContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
