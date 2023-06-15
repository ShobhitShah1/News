import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DemoWithFlatlistTour = () => {
    const [showTour, setShowTour] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemPosition, setSelectedItemPosition] = useState({});
    const flatListRef = useRef();

    useEffect(() => {
        if (selectedItem && flatListRef.current) {
            scrollToSelectedItem();
        }
    }, [selectedItem]);

    const handleShowTour = (item) => {
        setSelectedItem(item);
        setShowTour(true);
    };

    const handleHideTour = () => {
        setSelectedItem(null);
        setShowTour(false);
    };

    const scrollToSelectedItem = () => {
        const selectedItemIndex = selectedItem - 1; // Convert item value to index (1-based to 0-based)
        flatListRef.current.scrollToIndex({ index: selectedItemIndex, animated: true });
    };

    const handleItemLayout = (index, x, y, width, height) => {
        if (index === selectedItem - 1) {
            setSelectedItemPosition({ x, y, width, height });
        }
    };

    const renderItem = ({ item, index }) => {
        const isItemSelected = item === selectedItem;
        const itemStyle = isItemSelected ? styles.itemSelected : styles.item;
        const boxPositionStyle = isItemSelected ? { top: selectedItemPosition.y } : {};

        return (
            <TouchableOpacity
                style={itemStyle}
                onPress={() => handleShowTour(item)}
                onLayout={({ nativeEvent }) =>
                    handleItemLayout(index, nativeEvent.layout.x, nativeEvent.layout.y, nativeEvent.layout.width, nativeEvent.layout.height)
                }>
                <Text style={styles.boxText}>{item}</Text>
                {isItemSelected && showTour && (
                    <View style={[styles.overlay, boxPositionStyle]}>
                        <Text style={styles.tourText}>Welcome to the app tour!</Text>
                        <TouchableOpacity style={styles.tourButton} onPress={handleHideTour}>
                            <Text style={styles.tourButtonText}>Next, Make It Scroll</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={['1', '2', '3', '4', '5']}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.scrollView}
                ref={flatListRef}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
    item: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    itemSelected: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
    },
    boxText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    tourText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
    },
    tourButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    tourButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default DemoWithFlatlistTour;
