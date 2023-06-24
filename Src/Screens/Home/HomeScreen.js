import React, { useRef } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import {TreeView} from 'react-native-final-tree-view';
import { useSelector } from 'react-redux';
import CommonStyles from '../../Common/CommonStyles';
import styles from './styles';
import LoggerAction from '../../Redux/Actions/LoggerAction';
import { Logout } from '../../Redux/Actions/AuthAction';
import { COLORS } from '../../Common/Global';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }) {
  const UserData = useSelector(state => state.auth.user);
  const UserActivity = useSelector(state => state.Activity.UserActivity); 

  return (
    <View style={CommonStyles.container}> 
      <TouchableOpacity
        onPress={() => {
          Logout({navigation: navigation});
        }}
        onLongPress={() => {
          LoggerAction({
            Method: 'POST',
            ArticalClick: false,
            ApiName: `${Math.floor(Math.random() * 10)}`,
            APIResponse: Math.random() < 0.5 ? 'Success' : 'Fail',
            CustomTitle: 'Fail Demo',
            CustomDescription: `Fail At ${new Date().toString()} 🙇`,
          });
        }}
        style={styles.HeaderNameView}>
        <Text numberOfLines={1} style={styles.headerName}>
          Hello, {UserData?.username} 👋
        </Text>
      </TouchableOpacity>

      <FlatList
        style={{alignSelf: 'center', width: '95%'}}
        data={UserActivity}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: COLORS.white,
                borderStyle: 'dashed',
              }}
            />
          );
        }}
        renderItem={({item, index}) => {
          return (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[
                'transparent',
                'rgba(0,0,0,0.5)',
                item.APIResponse === 'Success' ? 'green' : 'red',
              ]}>
              <View style={{marginVertical: 10}}>
                <View style={{justifyContent: 'center'}} key={index}>
                  <Text
                    style={[
                      styles.headerName,
                      {marginVertical: 5, width: '100%'},
                    ]}>{`API NAME: ${item.ApiName}`}</Text>
                  <Text
                    style={[
                      styles.headerName,
                      {marginVertical: 5, width: '100%'},
                    ]}>{`TITLE: ${item.CustomTitle}`}</Text>
                </View>
              </View>
            </LinearGradient>
          );
        }}
      />
    </View>
  );
}

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Svg, Path } from 'react-native-svg';
// import { COLORS } from '../../Common/Global';

// const HomeScreen = () => {
//   const [pets, setPets] = useState([1]);

//   // Calculate the layout positions based on the number of pets
//   const getPetLayout = () => {
//     const petCount = pets.length;
//     switch (petCount) {
//       case 1:
//         return (
//           <React.Fragment>
//             <View style={styles.petsContainer}>
//               <Svg style={styles.connectorLine}>
//                 <Path
//                   d="M50 100C50 0 50 0 50 0"
//                   stroke="lightgray"
//                   strokeWidth={4}
//                   fill="none"
//                 />
//               </Svg>
//               <View style={[styles.petsContainer, { width: 100, height: 50 }]}>
//                 <View style={styles.petItemCenter}>
//                   <Text style={styles.petText}>{pets[0]}</Text>
//                 </View>
//               </View>
//             </View>
//           </React.Fragment>
//         );
//       case 2:
//         return (
//           <View style={styles.petsContainer}>
//             <Svg style={styles.connectorLine}>
//               <Path
//                 d="M50 100C50 0 50 0 50 0"
//                 stroke="lightgray"
//                 strokeWidth={4}
//                 fill="none"
//               />
//             </Svg>
//             <View style={[styles.petItemLeft]}>
//               <Text style={styles.petText}>{pets[0]}</Text>
//             </View>
//             <Svg style={styles.connectorLine}>
//               <Path
//                 d="M50 100C50 0 50 0 50 0"
//                 stroke="lightgray"
//                 strokeWidth={4}
//                 fill="none"
//               />
//             </Svg>
//             <View style={[styles.petItemRight]}>
//               <Text style={styles.petText}>{pets[1]}</Text>
//             </View>
//           </View>
//         );
//       case 3:
//         return (
//           <View style={styles.petsContainer}>
//             <Svg style={styles.connectorLine}>
//               <Path
//                 d="M50 100C50 0 50 0 50 0"
//                 stroke="lightgray"
//                 strokeWidth={4}
//                 fill="none"
//               />
//             </Svg>
//             <View style={[styles.petItemLeft]}>
//               <Text style={styles.petText}>{pets[0]}</Text>
//             </View>
//             <View style={styles.petItemCenter}>
//               <Text style={styles.petText}>{pets[2]}</Text>
//             </View>
//             <Svg style={styles.connectorLine}>
//               <Path
//                 d="M50 100C50 0 50 0 50 0"
//                 stroke="lightgray"
//                 strokeWidth={4}
//                 fill="none"
//               />
//             </Svg>
//             <View style={[styles.petItemRight]}>
//               <Text style={styles.petText}>{pets[1]}</Text>
//             </View>
//           </View>
//         );
//       case 4:
//         return (
//           <React.Fragment>
//             <Svg style={styles.connectorLine}>
//               <Path
//                 d="M10 50C50 0 50 0 50 0"
//                 stroke="lightgray"
//                 strokeWidth={4}
//                 fill="none"
//               />
//             </Svg>
//             <View style={styles.petsContainer}>
//               <Svg style={styles.connectorLine}>
//                 <Path
//                   d="M50 100C50 0 50 0 50 0"
//                   stroke="lightgray"
//                   strokeWidth={4}
//                   fill="none"
//                 />
//               </Svg>
//               <View style={[styles.petItemLeft]}>
//                 <Text style={styles.petText}>{pets[0]}</Text>
//               </View>
//               <Svg style={styles.connectorLine}>
//                 <Path
//                   d="M50 100C50 0 50 0 50 0"
//                   stroke="lightgray"
//                   strokeWidth={4}
//                   fill="none"
//                 />
//               </Svg>
//               <View style={[styles.petItemRight]}>
//                 <Text style={styles.petText}>{pets[1]}</Text>
//               </View>
//             </View>
//             <View style={styles.petsContainer}>
//               <Svg style={styles.connectorLine}>
//                 <Path
//                   d="M50 0C50 0 50 100 50 100"
//                   stroke="lightgray"
//                   strokeWidth={4}
//                   fill="none"
//                 />
//               </Svg>
//               <View style={[styles.petItemBottomLeft]}>
//                 <Text style={styles.petText}>{pets[2]}</Text>
//               </View>
//               <Svg style={styles.connectorLine}>
//                 <Path
//                   d="M50 0C50 0 50 100 50 100"
//                   stroke="lightgray"
//                   strokeWidth={4}
//                   fill="none"
//                 />
//               </Svg>
//               <View style={[styles.petItemBottomRight]}>
//                 <Text style={styles.petText}>{pets[3]}</Text>
//               </View>
//             </View>
//           </React.Fragment>
//         );
//       default:
//         return null;
//     }
//   };

//   // Validate the number of pets
//   const validatePets = () => {
//     if (pets.length < 1) {
//       return (
//         <Text style={styles.validationText}>Minimum 1 pet required</Text>
//       );
//     }
//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.userProfile}>
//         <Text style={{ color: COLORS.black, textAlign: 'center' }}>User Profile</Text>
//       </View>
//       {validatePets()}
//       {getPetLayout()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primary,
//     alignItems: 'center',
//   },
//   userProfile: {
//     justifyContent: 'center',
//     overflow: 'hidden',
//     marginBottom: 20,
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: COLORS.white,
//   },
//   validationText: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   petsContainer: {
//     marginTop: 50,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   petItemLeft: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   petItemRight: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 20,
//   },
//   petItemCenter: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   petItemBottomLeft: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     marginRight: 20,
//   },
//   petItemBottomRight: {
//     flex: 1,
//     height: 100,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     marginLeft: 20,
//   },
//   petItemWithLine: {
//     position: 'relative',
//     backgroundColor: COLORS.secondary,
//   },
//   connectorLine: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     alignSelf: 'center',
//   },
//   petText: {
//     fontSize: 16,
//   },
// });

// export default HomeScreen;
