// In index.js of a new project
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;