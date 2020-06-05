import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';
import { isAndroid } from './src/js/helpers';
import colors from './src/ui/colors';
import { screenConstants } from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  setLoginNaviStack();
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
        color: colors.themeBlue,
        fontSize: 18,
        alignment: 'center'
      },
      noBorder: true,
      backButton: {
        color: colors.themeBlue,
      },
      background: {
        color: colors.white
      }
    },
    bottomTab: {
      iconColor: colors.bottomTab.unSelected,
      textColor: colors.bottomTab.unSelected,
      selectedIconColor: colors.bottomTab.selected,
      selectedTextColor: colors.bottomTab.selected,
    },
    bottomTabs: {
      backgroundColor: colors.white
    }
  });
}

function setLoginNaviStack() {
  getUiSettings();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screenConstants.SPLASHSCREEN_ID,
            },
          },
        ],
      },
    },
  });
}

const TAB_NAMES = [{ title: 'radar' },{ title: 'profile' }]

function setTabNavigationStack(selectedTab = 0) {
  const radarStack = bottomTabChatRoot(radarRootComponent());
  const profileStack = bottomTabProfileRoot(profileRootComponent());
  const bottomTabArr = [radarStack, profileStack]
  getUiSettings();
  Navigation.setRoot({
    root: {
      bottomTabs: { 
        children: bottomTabArr,
        options: {
          bottomTabs: {
            currentTabIndex: selectedTab,
            titleDisplayMode: 'alwaysShow'
          }
        }
      }
    }
  })
}

function bottomTabChatRoot(children=[]) {
  return {
    stack: {
      children,
      options: {
        bottomTab: {
          text: TAB_NAMES[0].title,
          icon: require('./assets/images/radar.png'),
          selectedIcon: require('./assets/images/radar-selected.png')
        }
      }
    }
  }
}

function bottomTabProfileRoot(children=[]) {
  return {
    stack: {
      children,
      options: {
        bottomTab: {
          text: TAB_NAMES[1].title,
          // icon: require('./assets/images/profile.png'),
          selectedIcon: require('./assets/images/profile-selected.png')
        }
      }
    }
  }
}

function radarRootComponent(passProps) {
  return [{
      component: {
        name: screenConstants.RADARSCREEN_ID,
        ...passProps
      }
    }]
}

function profileRootComponent(passProps) {
  return [
    { component: {
      name: screenConstants.PROFILESCREEN_ID,
      ...passProps
    } }
  ]
}

export {
  setTabNavigationStack,
  setLoginNaviStack
}