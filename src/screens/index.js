import { Navigation } from 'react-native-navigation';
import ReduxProvider from '../components/ReduxProvider';
// import Screens
import SplashScreen from './SplashScreen';
import RadarScreen from './RadarStack/RadarScreen';
import MyAccountScreen from './ProfileStack/MyAccountScreen';

export const screenConstants = {
    SPLASHSCREEN_ID: 'SPLASHSCREEN_ID',

    RADARSCREEN_ID: 'RADARSCREEN_ID',

    PROFILESCREEN_ID: 'PROFILESCREEN_ID',
}

export const components = [
    { id: screenConstants.SPLASHSCREEN_ID, page: SplashScreen },

    { id: screenConstants.RADARSCREEN_ID, page: RadarScreen },

    { id: screenConstants.PROFILESCREEN_ID, page: MyAccountScreen },
]

const registerScreens = () => {
    for (const component of components) {
        const { id, page } = component;
        Navigation.registerComponent(id, () => ReduxProvider(page), () => page);
    }
}

export default registerScreens;