// In index.js of a new project
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { setLoginNaviStack } from '../../../index';

const MyAccountScreen = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (!loggedIn) {
      setLoginNaviStack();
    }
  }, [loggedIn])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button onPress={() => setLoggedIn(false)} title ='Sign Out' />
    </SafeAreaView>
  );
};

MyAccountScreen.options = () => ({
 topBar: {
   title: {
     text: "My Screen"
   }
 },
 bottomTabs: {
   drawBehind: false
 }
});

export default MyAccountScreen;