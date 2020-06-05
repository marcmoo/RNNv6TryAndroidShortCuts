import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
const isIOS = !isAndroid;

export {
    isAndroid,
    isIOS
}