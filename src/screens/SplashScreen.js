// In index.js of a new project
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { setTabNavigationStack } from '../../index';

const SplashScreen = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (loggedIn) {
      setTabNavigationStack();
    } 
  }, [loggedIn])
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => setLoggedIn(true)} title ='Sign In'>  </Button>
      </View>
  );
};

export default SplashScreen;