import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonStyles from '../../Common/CommonStyles';
import {COLORS, Opacity} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import VisiblityButtonsView from '../../Components/CreateArticals/VisiblityButtonsView';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const CreateArtical: FC = () => {
  const SheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['37%'], []);
  const navigation = useNavigation();
  const [ArticalText, setArticalText] = useState<string>('');
  const [isArticalPublica, setisArticalPublica] = useState<boolean>(false);

  const hanndleOnOpen = () => {
    SheetRef.current?.present();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (ArticalText.length !== 0) {
          Alert.alert(
            'Unsaved Changes',
            'Are you sure you want to leave without saving your article?',
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                  navigation.goBack();
                  return true;
                },
              },
            ],
          );
          return true;
        }
        return false;
      },
    );

    return () => {
      backHandler.remove();
    };
  }, [ArticalText, navigation]);

  const handleCloseClick = () => {
    if (ArticalText.length !== 0) {
      Alert.alert('You have unsave things', 'cant go back sorry');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[CommonStyles.container]}>
      <View style={styles.createContainer}>
        <View style={styles.headerView}>
          <View style={styles.VisibilityView}>
            <TouchableOpacity
              onPress={handleCloseClick}
              activeOpacity={Opacity.ActiveOpacity}
              style={styles.CloseButtonView}>
              <AntDesign
                style={{alignSelf: 'center'}}
                name="close"
                size={normalize(20)}
                color={COLORS.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={Opacity.ActiveOpacity}
              style={styles.VisibilityButton}
              onPress={() => {
                Keyboard.dismiss();
                hanndleOnOpen();
              }}>
              <Text style={styles.VisibilityText}>
                {isArticalPublica ? 'Public' : 'Private'}
              </Text>
              <AntDesign name="caretdown" color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={Opacity.ActiveOpacity}
            style={[styles.PostButton, {backgroundColor: COLORS.primary}]}>
            <Text style={styles.PostButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          multiline={true}
          maxLength={1200}
          autoFocus={false}
          scrollEnabled={true}
          textAlignVertical="top"
          cursorColor={COLORS.primary}
          placeholder="What's happening?"
          style={styles.DescriptionStyle}
          placeholderTextColor={COLORS.gray}
          onChangeText={text => {
            setArticalText(text);
          }}
        />

        <View style={styles.TotalWordTextView}>
          <TouchableOpacity activeOpacity={Opacity.ActiveOpacity}>
            <AntDesign
              style={{alignSelf: 'center'}}
              name="setting"
              size={normalize(20)}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <Text
            style={styles.TotalWordText}>{`${ArticalText.length}/1200`}</Text>
        </View>

        <BottomSheetModalProvider>
          <BottomSheetModal
            index={0}
            ref={SheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            enableContentPanningGesture={true}
            backgroundStyle={{backgroundColor: COLORS.black}}
            handleIndicatorStyle={{backgroundColor: COLORS.white}}
            containerStyle={{
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <VisiblityButtonsView
              isArticalPublica={isArticalPublica}
              setisArticalPublica={setisArticalPublica}
            />
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </View>
  );
};

export default CreateArtical;
