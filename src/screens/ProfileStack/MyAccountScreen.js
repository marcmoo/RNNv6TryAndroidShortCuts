// In index.js of a new project
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { setLoginNaviStack } from '../../../index';

const MyAccountScreen = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (!loggedIn) {
      setLoginNaviStack();
    }
  }, [loggedIn])
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => setLoggedIn(false)} title ='Sign Out' />
    </View>
  );
};

export default MyAccountScreen;