/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, TextInput, TouchableOpacity } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [value, onChangeText] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder='E-mail'/>
      <TextInput style={styles.input} placeholder='Senha'/>
      <TouchableOpacity style={styles.button} >Avancar</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    borderRadius:8,
    borderColor:'#fefefefe',
    backgroundColor:'#434343',
    height: 40,
  }
});

export default App;
