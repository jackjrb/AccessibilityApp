import { View, TextInput} from 'react-native';

import { useState } from 'react';
import { styles } from './styles';

interface InputProps {
  placeholder: string;
}

const Input = ({placeholder}:InputProps) => {
      const [value, onChangeText] = useState('')

    return(
        <View >
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder}/>
        </View>
    )
}

export default Input