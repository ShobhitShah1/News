import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PetConnect = () => {
  const petCount = 4; // Number of pets
  const minPets = 1; // Minimum number of pets

  // Calculate the layout positions based on the number of pets
  const getPetLayout = () => {
    switch (petCount) {
      case 1:
        return (
          <View style={styles.petsContainer}>
            <View style={styles.petItemCenter}>
              <Text style={styles.petText}>Pet 1</Text>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.petsContainer}>
            <View style={styles.petItemLeft}>
              <Text style={styles.petText}>Pet 1</Text>
            </View>
            <View style={styles.petItemRight}>
              <Text style={styles.petText}>Pet 2</Text>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.petsContainer}>
            <View style={styles.petItemLeft}>
              <Text style={styles.petText}>Pet 1</Text>
            </View>
            <View style={styles.petItemCenter}>
              <Text style={styles.petText}>Pet 2</Text>
            </View>
            <View style={styles.petItemRight}>
              <Text style={styles.petText}>Pet 3</Text>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.petsContainer}>
            <View style={styles.petItemLeft}>
              <Text style={styles.petText}>Pet 1</Text>
            </View>
            <View style={styles.petItemRight}>
              <Text style={styles.petText}>Pet 2</Text>
            </View>
            <View style={styles.petItemBottomLeft}>
              <Text style={styles.petText}>Pet 3</Text>
            </View>
            <View style={styles.petItemBottomRight}>
              <Text style={styles.petText}>Pet 4</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  // Validate the number of pets
  const validatePets = () => {
    if (petCount < minPets) {
      return (
        <Text style={styles.validationText}>
          Minimum {minPets} pet{minPets > 1 ? 's' : ''} required
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.userProfile}>
        <Text>User Profile</Text>
      </View>
      {validatePets()}
      {getPetLayout()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userProfile: {
    marginBottom: 20,
  },
  validationText: {
    color: 'red',
    marginBottom: 10,
  },
  petsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  petItemLeft: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  petItemRight: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  petItemCenter: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  petItemBottomLeft: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
  },
  petItemBottomRight: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  petText: {
    fontSize: 16,
  },
});

export default App;
