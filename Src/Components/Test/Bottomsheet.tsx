
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FONTS } from '../../Common/Global';

const Bottomsheet = ({

}) => {

    const SheetRef = React.useRef<BottomSheet>(null);
    const [isOpen, setIsopen] = React.useState(true);

    const snapPoints = ["40%", "80%"];

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheet
                ref={SheetRef}
                snapPoints={snapPoints}
                enableContentPanningGesture={true}
                enablePanDownToClose={true}
            >
                <BottomSheetView>
                    <View>
                        <Text style={{ ...FONTS.h1 }}>Hello</Text>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Bottomsheet;