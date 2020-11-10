import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import Login from './components/Login.js'
import RegForm from './components/RegForm.js'
import Welcome from './components/Welcome.js'

export default class App extends React.Component{
  render(){
   return (
      <View style={styles.container}>
            <Login/>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43CCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});