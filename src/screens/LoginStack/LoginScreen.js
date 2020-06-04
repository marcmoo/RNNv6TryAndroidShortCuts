// In index.js of a new project
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;