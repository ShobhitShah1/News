import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonStyles from '../../Common/CommonStyles';
import {COLORS} from '../../Common/Global';
import styles from './styles';
import {normalize} from '../../Common/GlobalSize';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import VisiblityButtonsView from '../../Components/CreateArticals/VisiblityButtonsView';

const CreateArtical: FC = () => {
  const SheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%'], []);

  const [ArticalText, setArticalText] = useState<String>('');
  const [isArticalPublica, setisArticalPublica] = useState<boolean>(false)

  const hanndleOnOpen = () => {
    SheetRef.current?.present();
  };

  const onClose = () => {
    SheetRef.current?.close();
  };

  return (
    <View style={[CommonStyles.container]}>
      <View style={styles.createContainer}>
        <View style={styles.headerView}>
          <View style={styles.VisibilityView}>
            <View style={styles.CloseButtonView}>
              <AntDesign
                style={{alignSelf: 'center'}}
                name="close"
                size={normalize(20)}
                color={COLORS.white}
              />
            </View>
            <TouchableOpacity
              style={styles.VisibilityButton}
              onPress={() => {
                Keyboard.dismiss()
                hanndleOnOpen();
              }}>
              <Text style={styles.VisibilityText}>{isArticalPublica ? 'Public' : 'Private'}</Text>
              <AntDesign name="caretdown" color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {}}
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
          <TouchableOpacity>
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
              <VisiblityButtonsView visibilityStatus={isArticalPublica} />
            </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </View>
  );
};

export default CreateArtical;
