import { Navigation } from 'react-native-navigation';

// import Screens
import HomeScreen from './HomeScreen';

export const screenConstants = {
    HOMESCREEN_ID = 'HOMESCREEN_ID',
}

export const components = [
    { id: screenConstants.HOMESCREEN_ID, page: HomeScreen }
]

const registerScreens = () => {
    for (const component of components) {
        const { id, page } = component;
        Navigation.registerComponent(id, () => page);
    }
}

export default registerScreens;