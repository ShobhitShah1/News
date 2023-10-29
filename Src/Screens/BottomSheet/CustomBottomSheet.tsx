import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import React, {FC, ReactNode, useMemo} from 'react';
import {COLORS} from '../../Common/Global';
import {Easing} from 'react-native-reanimated';

interface ViewButtonProps {
  SheetRef: React.RefObject<BottomSheetModal>;
  viewPoint: string[];
  children: ReactNode;
}

const BottomSheetView: FC<ViewButtonProps> = ({
  SheetRef,
  viewPoint,
  children,
}) => {
  const snapPoints = useMemo(() => viewPoint, []);
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 250,
    easing: Easing.cubic,
  });
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        index={0}
        ref={SheetRef}
        style={{zIndex: 9999}}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableDismissOnClose={true}
        enableContentPanningGesture={true}
        animationConfigs={animationConfigs}
        android_keyboardInputMode="adjustResize"
        backgroundStyle={{backgroundColor: COLORS.black}}
        handleIndicatorStyle={{backgroundColor: COLORS.white}}
        containerStyle={{
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetView;
