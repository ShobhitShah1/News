import BottomSheet from '@gorhom/bottom-sheet';
import { View } from 'moti';
import React from 'react';
import { Button, Text } from 'react-native';
import styles from './Styles';

// Icons

const WeekPasswordModal = () => {

    const bottomSheetRef = React.useRef(null);
    const snapPoints = React.useMemo(() => ['25%'], []);

    const handlePresentModalPress = React.useCallback(() => {
        // bottomSheetRef.current?.present();
        bottomSheetRef.current?.present();
    }, []);

    const handleSheetChanges = React.useCallback((number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <View style={styles.container}>
            <Button
                onPress={handlePresentModalPress}
                title="Present Modal"
                color="black"
            />
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                // add bottom inset to elevate the sheet
                bottomInset={46}
                // set `detached` to true
                detached={true}
                style={styles.sheetContainer}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
        </View>
    )
}

export default WeekPasswordModal;
