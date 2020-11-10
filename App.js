import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtLabel}>Username:</Text>
      <TextInput style={styles.txtInput}></TextInput>
      <Text style={styles.txtLabel}>Password:</Text>
      <TextInput style={styles.txtInput}></TextInput>
      <TouchableOpacity style={styles.butn}><Text style={styles.btntxt}>REGISTRUJ SE</Text></TouchableOpacity>
      <TouchableOpacity style={styles.butn}><Text style={styles.btntxt}>PRIJAVI SE</Text></TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43CCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  butn:{
    margin: 10,
    backgroundColor:'#061B5B',
    width: 220,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput:{
    backgroundColor:'#fff',
    borderRadius: 20,
    width: 220,
    height: 50,
    margin: 5,
    padding: 10,
    fontSize:20,
  },
  txtLabel:{
    color: '#061B5B',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btntxt:{
    color: '#fff',
    fontSize:20,
    fontWeight:'bold',
  },
});
