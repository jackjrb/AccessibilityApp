import { useState } from 'react';
import { StatusBar, View, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { styles } from './styles';

const Login = () => {
  const [value, onChangeText] = useState('')
    const isDarkMode = useColorScheme() === 'dark';

    return(
        <View style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder='E-mail'/>
          <TextInput style={styles.input} placeholder='Senha'/>
          <TouchableOpacity style={styles.button} >Avancar</TouchableOpacity>
        </View>
    )
}

export default Login