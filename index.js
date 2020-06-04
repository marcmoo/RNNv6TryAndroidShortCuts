import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';
import { isAndroid } from './src/js/helpers';
import colors from './src/ui/colors';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  getUiSettings();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HOMESCREEN_ID',
            },
          },
        ],
      },
    },
  });
});

function getUiSettings() {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'red'
    },
    topBar: {
      visible: true,
      drawBehind: isAndroid,
      title: {
        color: 'blue'
      },
      backButton: {
        color: 'red'
      },
      background: {
        color: colors.white
      }
    }
  });
}