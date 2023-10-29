import {useEffect, useState} from 'react';
import {Linking, Platform} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  PermissionStatus,
} from 'react-native-permissions';

const cameraPermissionName =
  Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
const galleryPermissionName =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.PHOTO_LIBRARY
    : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

const useCameraAndGalleryPermission = () => {
  const [status, setStatus] = useState<PermissionStatus | null>(null);

  useEffect(() => {
    const checkPermissions = async () => {
      const cameraPermission = await check(cameraPermissionName);
      const galleryPermission = await check(galleryPermissionName);
      if (
        cameraPermission === RESULTS.GRANTED
        // &&  galleryPermission === RESULTS.GRANTED
      ) {
        setStatus(RESULTS.GRANTED);
      } else {
        setStatus(RESULTS.DENIED);
        // Linking.openSettings();
      }
    };

    checkPermissions();
  }, []);

  const requestAndCheckPermissions = async () => {
    const cameraPermission = await request(cameraPermissionName);
    const galleryPermission = await request(galleryPermissionName);

    if (
      cameraPermission === RESULTS.GRANTED
      // &&  galleryPermission === RESULTS.GRANTED
    ) {
      setStatus(RESULTS.GRANTED);
    } else {
      setStatus(RESULTS.DENIED);
      Linking.openSettings();
    }
  };

  return {status, requestAndCheckPermissions};
};

export default useCameraAndGalleryPermission;
