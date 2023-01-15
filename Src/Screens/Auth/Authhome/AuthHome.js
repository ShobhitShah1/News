import { StyleSheet, Text, View, Animated, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Icons from '../../../Common/Icons';
import { COLORS, FAMILY, FONTS, SIZES } from '../../../Common/Global';
import AuthData from '../../../Components/AuthData';
import AuthPaggination from '../../../Components/AuthComponents/AuthPaggination';
import Images from '../../../Common/Images';
import { normalize } from '../../../Common/GlobalSize';
import ButtonView from '../../../Common/AuthComponents/ButtonView';

const { width } = Dimensions.get('window')

export default function AuthHome() {

    const [currentIndex, setcurrentIndex] = React.useState(0)

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const ViableItemChange = React.useRef(({ viewableItems }) => {
        setcurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const ref = React.useRef()

    const handleOnScroll = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    }
                }
            }
        ], { useNativeDriver: false })(event);
    }

    const renderItem = (item) => {
        return (
            <View style={styles.RenderView}>
                <Text style={styles.RenderText}>{item.item.title}</Text>
            </View>
        )
    }

    return (
        <Animated.View style={styles.container}>

            <Animated.View style={styles.topView}>
                <Animated.View style={styles.contain}>
                    <Animated.Image
                        style={styles.headerImage}
                        source={Images.AuthHome}
                    />
                    <Animated.Text
                        style={styles.headerText}
                    >
                        One Click Away From Your Destination 🚀
                    </Animated.Text>
                </Animated.View>
            </Animated.View>

            <Animated.View style={styles.bottomView}>
                <Animated.View style={styles.AuthPaggin}>
                    <AuthPaggination data={AuthData} scrollX={scrollX} />
                </Animated.View>

                <FlatList
                    ref={ref}
                    horizontal
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                    data={AuthData}
                    pagingEnabled
                    scrollEnabled
                    onViewableItemsChanged={ViableItemChange}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    renderItem={renderItem}
                    onScroll={handleOnScroll}
                />
                <ButtonView
                    index={currentIndex}
                    onPressSkip={() => {

                    }}
                    onPressNext={() => {
                        if (currentIndex < 3) {
                            ref?.current.scrollToIndex({ index: currentIndex + 1 })
                        }
                    }}
                />
            </Animated.View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    contain:{
        flex: 1,
        justifyContent: 'center',
        alignSelf:'center'
    },
    topView: {
        flex: 0.7,
        backgroundColor: COLORS.white
    },
    headerImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: normalize(250),
        height: normalize(250),
        margin: normalize(30)
    },
    headerText: {
        textAlign: 'center',
        ...FONTS.h1,
        color: COLORS.black,
        marginTop: normalize(25)
    },
    bottomView: {
        flex: 0.3,
        borderTopLeftRadius: normalize(30),
        borderTopRightRadius: normalize(30),
        backgroundColor: COLORS.tinBlack
    },
    AuthPaggin: {
        top: normalize(20)
    },
    RenderView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: normalize(30),
        width: width
    },
    RenderText: {
        color: COLORS.white,
        textAlign: 'center',
        width: width - normalize(50),
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: FAMILY.PoppinsBold, 
        fontSize: 19,
    }
})