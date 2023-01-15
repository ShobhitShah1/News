import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Global'
import Entypo from 'react-native-vector-icons/Entypo'

const { width, heigth } = Dimensions.get('window')

const ButtonView = ({
    onPressNext,
    onPressSkip,
    index
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.FlexView}>

                {
                    index !== 3 &&
                    <TouchableOpacity style={styles.BTNView} onPress={onPressSkip}>
                        <Text style={styles.BTNtext}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity style={[styles.BTNView, { backgroundColor: COLORS.white, width: index !== 3 ? width / 2.4 : width - 50  }]} onPress={onPressNext}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={[styles.BTNtext, { color: COLORS.tinBlack }]}>{index !== 3 ? "Next" : "Sign In" }</Text>

                        {index !== 3 && <Entypo name='chevron-small-right' size={20} color={COLORS.tinBlack} style={styles.Icon} />}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonView

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 15,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    FlexView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    BTNView: {
        width: width / 2.4,
        height: 50,
        backgroundColor: COLORS.skipBTN,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10
    },
    BTNtext: {
        textAlign: 'center',
        ...FONTS.h3,
        color: COLORS.white
    },
    Icon: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
})