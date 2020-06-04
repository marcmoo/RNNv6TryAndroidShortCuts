/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';

registerScreens();

let uiLoaded = false;

Navigation.events().registerAppLaunchedListener(async () => {
  startApp();
});

function startApp() {
  if (uiLoaded) {
    setNavigationDefaultOptions();
  } else {
    uiLoaded = !uiLoaded
  }
}

function setNavigationDefaultOptions() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HOMESCREEN_ID'
            }
          }
        ]
      }
    }
  })
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a'
    },
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    }
  });
}