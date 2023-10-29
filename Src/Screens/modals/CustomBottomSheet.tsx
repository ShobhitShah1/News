import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {FC, ReactNode, useMemo} from 'react';
import {COLORS} from '../../Common/Global';

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

  return (
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
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetView;
