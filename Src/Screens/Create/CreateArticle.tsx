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
import {COLORS, Opacity, SIZES} from '../../Common/Global';
import {normalize} from '../../Common/GlobalSize';
import SelectImageSheetView from '../../Components/CreateArticle/SelectImageSheetView';
import VisibilityButtonsView from '../../Components/CreateArticle/VisibilityButtonsView';
import useCameraAndGalleryPermission from '../../Hooks/useCameraAndGalleryPermission';
import BottomSheetView from '../BottomSheet/CustomBottomSheet';
import styles from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CreateArticle: FC = () => {
  const SheetRef = useRef<BottomSheetModal>(null);
  const SelectImageRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation();
  const [ArticleText, setArticleText] = useState<string>('');
  const [isArticlePublic, setisArticlePublic] = useState<boolean>(true);
  const [isImageLoading, setisImageLoading] = useState<boolean>(false);
  const [UploadImagePatch, setUploadImagePatch] = useState<string>('');
  console.log('UploadImagePatch', UploadImagePatch);
  
  //* Custom Hooks
  const {status, requestAndCheckPermissions} = useCameraAndGalleryPermission();

  const handleOnOpen = () => {
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
  }, [ArticleText, navigation]);

  const handleBackButton = useMemo(
    () => () => {
      if (ArticleText.length !== 0) {
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
    [ArticleText, navigation],
  );

  const handleCloseClick = () => {
    if (ArticleText.length !== 0) {
      Alert.alert('You have unsaved things', 'cant go back sorry');
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

  const Spacer = ({height = 16}) => <View style={{height}} />;

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
                handleOnOpen();
              }}>
              <Text style={styles.VisibilityText}>
                {isArticlePublic ? 'Public' : 'Private'}
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
              <Text style={styles.UploadImageText}>Upload 850*400 Image</Text>
            </View>
          ) : (
            <View style={{}}>
              <Image
                style={styles.UploadImage}
                resizeMethod="scale"
                resizeMode="cover"
                onLoad={() => setisImageLoading(true)}
                onLoadStart={() => setisImageLoading(true)}
                onLoadEnd={() => setisImageLoading(false)}
                source={{uri: UploadImagePatch}}
              />
              {isImageLoading && (
                <View style={styles.ImageLoadingView}>
                  <SkeletonPlaceholder
                    backgroundColor={COLORS.Loader}
                    highlightColor={COLORS.white}
                    borderRadius={SIZES.radius}
                    speed={1000}>
                    <SkeletonPlaceholder.Item
                      width={normalize(310)}
                      height={normalize(310)}
                    />
                  </SkeletonPlaceholder>
                </View>
              )}
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
            setArticleText(text);
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
            style={styles.TotalWordText}>{`${ArticleText.length}/1200`}</Text>
        </View>

        <BottomSheetView viewPoint={['28%']} SheetRef={SheetRef}>
          <VisibilityButtonsView
            Ref={SheetRef}
            isArticlePublic={isArticlePublic}
            setisArticlePublic={setisArticlePublic}
          />
        </BottomSheetView>

        <BottomSheetView viewPoint={['26%']} SheetRef={SelectImageRef}>
          <SelectImageSheetView handleImagePicker={handleImagePicker} />
        </BottomSheetView>
      </View>
    </View>
  );
};

export default CreateArticle;
