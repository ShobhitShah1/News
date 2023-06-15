import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View, Modal, ScrollView, Platform, UIManager, LayoutAnimation, StyleSheet } from 'react-native';
// import styles from './styles';

const SimpleAppTourSolo = () => {
  const [showTour1, setShowTour1] = useState(false);
  const [showTour2, setShowTour2] = useState(false);
  const [showTour3, setShowTour3] = useState(false);
  const [boxPosition1, setBoxPosition1] = useState({});
  const [boxPosition2, setBoxPosition2] = useState({});
  const [boxPosition3, setBoxPosition3] = useState({});
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const scrollViewRef = useRef();

  const handleShowTour1 = () => {
    scrollToModal1();
  };

  const handleShowTour2 = () => {
    scrollToModal2();
  };

  const handleShowTour3 = () => {
    scrollToModal3();
  };

  const handleHideTour = () => {
    setShowTour1(false);
    setShowTour2(false);
    setShowTour3(false);
  };

  const scrollToModal1 = () => {
    handleBoxLayout1()
    if (scrollViewRef.current && boxPosition1) {
      scrollViewRef.current.scrollTo({ y: boxPosition1.y, animated: true });
      setTimeout(() => {
          setShowTour1(true);
      }, 300);
    }
  };

  const scrollToModal2 = () => {
    handleBoxLayout2()
    if (scrollViewRef.current && boxPosition2) {
      scrollViewRef.current.scrollTo({ y: boxPosition2.y, animated: true });
      setTimeout(() => {
          setShowTour2(true); 
      }, 300);
    }
  };

  const scrollToModal3 = () => {
    handleBoxLayout3()
    if (scrollViewRef.current && boxPosition3) {
      scrollViewRef.current.scrollTo({ y: boxPosition3.y, animated: true });
      setTimeout(() => {
        setShowTour3(true);
      }, 300);
    }
  };

  const handleBoxLayout1 = () => {
    boxRef1.current.measure((x, y, width, height, pageX, pageY) => {
      setBoxPosition1({ x: pageX, y: pageY });
    });
  };

  const handleBoxLayout2 = () => {
    boxRef2.current.measure((x, y, width, height, pageX, pageY) => {
      setBoxPosition2({ x: pageX, y: pageY });
    });
  };

  const handleBoxLayout3 = () => {
    boxRef3.current.measure((x, y, width, height, pageX, pageY) => {
      setBoxPosition3({ x: pageX, y: pageY });
    });
  };

  useEffect(() => {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    handleBoxLayout1();
    handleBoxLayout2();
    handleBoxLayout3();
  }, []);

  useEffect(() => {
    handleBoxLayout1();
  }, [showTour1]);

  useEffect(() => {
    handleBoxLayout2();
  }, [showTour2]);

  useEffect(() => {
    handleBoxLayout3();
  }, [showTour3]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
      ref={scrollViewRef}
    >
      {/* View 1 */}
      <TouchableOpacity
        style={styles.box}
        onPress={handleShowTour1}
        ref={boxRef1}
        onLayout={handleBoxLayout1}
      >
        <Text style={styles.boxText}>Tour 1</Text>
      </TouchableOpacity>

      {showTour1 && (
        <Modal visible={showTour1} transparent={true}>
          <View style={styles.overlayContainer}>
            <View style={[styles.overlay, { top: boxPosition1.y, left: boxPosition1.x }]}>
              {/* <YourCustomView1 /> */}
              <Text style={styles.tourText}>Welcome to the app tour 1!</Text>
              <TouchableOpacity style={styles.tourButton} onPress={handleHideTour}>
                <Text style={styles.tourButtonText}>Next, Make It Scroll</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* View 2 */}
      <TouchableOpacity
        style={[styles.box, { left: 120 }]}
        onPress={handleShowTour2}
        ref={boxRef2}
        onLayout={handleBoxLayout2}
      >
        <Text style={styles.boxText}>Tour 2</Text>
      </TouchableOpacity>

      {showTour2 && (
        <Modal visible={showTour2} transparent={true}>
          <View style={styles.overlayContainer}>
            <View style={[styles.overlay, { top: boxPosition2.y, left: boxPosition2.x }]}>
              {/* <YourCustomView2 /> */}
              <Text style={styles.tourText}>Welcome to the app tour 2!</Text>
              <TouchableOpacity style={styles.tourButton} onPress={handleHideTour}>
                <Text style={styles.tourButtonText}>Next, Make It Scroll</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* View 3 */}
      <TouchableOpacity
        style={[styles.box, { left: 20 }]}
        onPress={handleShowTour3}
        ref={boxRef3}
        onLayout={handleBoxLayout3}
      >
        <Text style={styles.boxText}>Tour 3</Text>
      </TouchableOpacity>

      {showTour3 && (
        <Modal visible={showTour3} transparent={true}>
          <View style={styles.overlayContainer}>
            <View style={[styles.overlay, { top: boxPosition3.y, left: boxPosition3.x }]}>
              {/* <YourCustomView3 /> */}
              <Text style={styles.tourText}>Welcome to the app tour 3!</Text>
              <TouchableOpacity style={styles.tourButton} onPress={handleHideTour}>
                <Text style={styles.tourButtonText}>Next, Make It Scroll</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

export default SimpleAppTourSolo;

const styles = StyleSheet.create({
    box: {
        width: 200,
        height: 300,
        marginTop: 20,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
      },
      boxText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
      },
      overlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: 200,
        height: 300,
        borderWidth: 2,
        borderColor: 'red', 
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
})