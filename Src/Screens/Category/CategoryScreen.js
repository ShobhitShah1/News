import React, {useReducer} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';

const ITEM_DATA = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
  {id: 4, name: 'Item 4'},
  {id: 5, name: 'Item 5'},
  {id: 6, name: 'Item 6'},
  {id: 7, name: 'Item 7'},
  {id: 8, name: 'Item 8'},
  {id: 9, name: 'Item 9'},
];

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case 'DESELECT_ITEM':
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          item => item !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {selectedItems: []});
  function handleItemPress(item) {
    if (state.selectedItems.includes(item)) {
      dispatch({type: 'DESELECT_ITEM', payload: item});
    } else {
      dispatch({type: 'SELECT_ITEM', payload: item});
    }
  }

  function renderItem({item}) {
    const isSelected = state.selectedItems.includes(item);

    return (
      <TouchableOpacity
        onPress={() => handleItemPress(item)}
        style={[
          styles.itemContainer,
          isSelected && styles.selectedItemContainer,
        ]}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ITEM_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedItemContainer: {
    borderWidth: 2,
    borderColor: 'red',
  },
  itemText: {
    fontSize: 18,
  },
});
