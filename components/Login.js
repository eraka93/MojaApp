import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends React.Component{
    render (){
        return (
            <View style={styles.container}>
              <TextInput 
                 style={styles.txtInput}
                 placeholder= 'username'
              />
              <TextInput 
                 style={styles.txtInput}
                 placeholder= 'password'
              />
              <TouchableOpacity style={styles.butn}><Text style={styles.btntxt}>PRIJAVI SE</Text></TouchableOpacity>
              <Text>Ukoliko nemate nalog</Text><TouchableOpacity style={styles.butnreg}><Text style={styles.btntxtreg}>Registrujte se</Text></TouchableOpacity>
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
            margin: 8,
            padding: 10,
            fontSize:18,
            textAlignVertical: 'center'
          },
          btntxt:{
            color: '#fff',
            fontSize:20,
            fontWeight:'bold',
          },
          butnreg:{
           backgroundColor:'#E0F5FD',
           width: 120,
           height: 30,
           borderRadius: 20,
           margin: 10,
           alignItems: 'center',
           justifyContent: 'center',
          },
        });
        