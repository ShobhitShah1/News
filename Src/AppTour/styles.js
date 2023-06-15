import {StyleSheet} from 'react-native'; 
 import { COLORS, FONTS, SIZES } from '../Common/Global';
import { normalize } from '../Common/GlobalSize';

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
    color: COLORS.black
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
});

export default styles;
