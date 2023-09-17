import React, { useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import CommonStyles from '../../Common/CommonStyles';
import { COLORS } from '../../Common/Global';
import { normalize } from '../../Common/GlobalSize';
import { Logout } from '../../Redux/Actions/AuthAction';
import styles from './styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const HomeScreen = ({ navigation }) => {
  const userData = useSelector(state => state.auth.user);
  const CarouselRef = useRef();

  const slideHeight = viewportHeight * 0.5;
  const slideWidth = wp(75);
  const itemHorizontalMargin = wp(2);

  const renderCarouselItem = ({ item, index }, parallaxProps) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate(item.screen)
        }}
        style={{
          width: slideWidth,
          height: slideHeight,
          borderRadius: normalize(10),
          backgroundColor: COLORS.white,
        }}>
        <ParallaxImage
          source={item.Image}
          containerStyle={{
            flex: 1,
            borderRadius: normalize(10),
            overflow: 'hidden',
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'cover',
          }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.ProjectName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={CommonStyles.container}>
      <TouchableOpacity
        onPress={() => Logout({ navigation })}
        style={styles.HeaderNameView}>
        <Text numberOfLines={1} style={styles.headerName}>
          {userData?.username}
        </Text>
        <Ionicons
          name="ios-menu-outline"
          size={30}
          color={COLORS.white}
          style={{ bottom: 2 }}
        />
      </TouchableOpacity>

      {/* <View style={styles.WorkView}>
        <Text style={styles.WorkText}>WORK</Text>
      </View>

      <View>
        <Carousel
          activeSlideAlignment="center"
          scrollEnabled
          ref={CarouselRef}
          data={ProjectData}
          pagingEnabled
          sliderWidth={400}
          itemWidth={300}
          renderItem={renderCarouselItem}
        />
      </View> */}
    </View>
  );
};

export default HomeScreen;
