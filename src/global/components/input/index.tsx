import { View, TextInput, Image} from 'react-native';
import { useState } from 'react';

import { styles } from './styles';

import Visibility from '../../../assets/Visibility.svg';


interface InputProps {
  placeholder: string;
  type?: string; 
}

const Input = ({placeholder, type}:InputProps) => {
      const [value, onChangeText] = useState('')
      console.log(Visibility)
      console.log('uhuu')

    return(
        <View style={styles.input}>
            <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder}/> 
            <Visibility height={20} width={20}/>
        </View>
    )
}

export default Input