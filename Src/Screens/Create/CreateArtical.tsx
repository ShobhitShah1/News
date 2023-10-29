import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonStyles from '../../Common/CommonStyles';
import {COLORS, Opacity} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import VisiblityButtonsView from '../../Components/CreateArticals/VisiblityButtonsView';
import useCameraAndGalleryPermission from '../../Hooks/useCameraAndGalleryPermission';
import styles from './styles';
import BottomSheetView from '../modals/CustomBottomSheet';
import SelectImageSheetView from '../../Components/CreateArticals/SelectImageSheetView';

const CreateArtical: FC = () => {
  const SheetRef = useRef<BottomSheetModal>(null);
  const SelectImageRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation();
  const [ArticalText, setArticalText] = useState<string>('');
  const [isArticalPublica, setisArticalPublica] = useState<boolean>(false);
  const [SelectedImageMode, setSelectedImageMode] = useState<string>('');
  const [UploadImagePatch, setUploadImagePatch] = useState<string>('');

  //* Custom Hooks
  const {status, requestAndCheckPermissions} = useCameraAndGalleryPermission();

  const hanndleOnOpen = () => {
    SheetRef.current?.present();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return handleBackButton();
      },
    );

    return () => {
      backHandler.remove();
    };
  }, [ArticalText, navigation]);

  const handleBackButton = useMemo(
    () => () => {
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
    [ArticalText, navigation],
  );

  const handleCloseClick = () => {
    if (ArticalText.length !== 0) {
      Alert.alert('You have unsave things', 'cant go back sorry');
    } else {
      navigation.goBack();
    }
  };

  const handleImagePicker = async (mode: string) => {
    Keyboard.dismiss();

    if (status === 'denied') {
      requestAndCheckPermissions();
    } else {
      if (mode === 'camera') {
        const imagePickerResponse = await launchCamera({
          mediaType: 'photo',
        });

        if (imagePickerResponse.didCancel) {
          console.log('Image selection was canceled.');
        } else if (imagePickerResponse.assets?.length) {
          const firstAsset = imagePickerResponse.assets[0];
          if (firstAsset?.uri) {
            console.log('firstAsset?.uri:', firstAsset?.uri);
            setUploadImagePatch(firstAsset.uri);
            SelectImageRef.current?.close();
          } else {
            console.error('Invalid asset or missing URI.');
          }
        } else {
          console.error('No image selected or an error occurred.');
          setUploadImagePatch('');
        }
      } else {
        const imagePickerResponse = await launchImageLibrary({
          mediaType: 'photo', // Use launchImageLibrary for the gallery
        });

        if (imagePickerResponse.didCancel) {
          console.log('Image selection was canceled.');
        } else if (imagePickerResponse.assets?.length) {
          const firstAsset = imagePickerResponse.assets[0];
          if (firstAsset?.uri) {
            setUploadImagePatch(firstAsset.uri);
            SelectImageRef.current?.close();
          } else {
            console.error('Invalid asset or missing URI.');
            setUploadImagePatch('');
          }
        } else {
          console.error('No image selected or an error occurred.');
          setUploadImagePatch('');
        }
      }
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

        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            SelectImageRef.current?.present();
          }}
          onLongPress={() => {
            setUploadImagePatch('');
          }}
          delayLongPress={1000}
          activeOpacity={1}
          style={styles.ImageContainerView}>
          {UploadImagePatch.length === 0 ? (
            <View style={styles.NoImageContainerView}>
              <Entypo
                name="upload-to-cloud"
                size={normalize(45)}
                color={COLORS.primary}
                style={styles.UploadImageIcon}
              />
              <Text style={styles.UplaodImageText}>Upload 850*400 Image</Text>
            </View>
          ) : (
            <View>
              <Image
                style={styles.UplaodImage}
                resizeMethod="scale"
                resizeMode="cover"
                source={{uri: UploadImagePatch}}
              />
            </View>
          )}
        </TouchableOpacity>

        <TextInput
          multiline={true}
          maxLength={1200}
          autoFocus={true}
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

        <BottomSheetView viewPoint={['30%']} SheetRef={SheetRef}>
          <VisiblityButtonsView
            isArticalPublica={isArticalPublica}
            setisArticalPublica={setisArticalPublica}
          />
        </BottomSheetView>

        <BottomSheetView viewPoint={['30%']} SheetRef={SelectImageRef}>
          <SelectImageSheetView handleImagePicker={handleImagePicker} />
        </BottomSheetView>
      </View>
    </View>
  );
};

export default CreateArtical;
