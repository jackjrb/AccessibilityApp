import { View, TouchableOpacity} from 'react-native';
import { useCallback, useState } from 'react';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';

import { styles } from './styles';

import Visibility from '../../../assets/Visibility.svg';
import VisibilityOff from '../../../assets/VisibilityOff.svg';


export type InputProps = MaskInputProps & {
    placeholder: string;
  type?: string; 
}

const Input = ({placeholder, type}:InputProps) => {
      const [value, onChangeText] = useState('')
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      const handleVisibilityToggle = useCallback(() => {
            return (
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    {isPasswordVisible ? (
                       
                        <Visibility height={20} width={20}/>
                    ):(
                       
                        <VisibilityOff height={20} width={20}/>
                    )}
                </TouchableOpacity>
            )
      },[isPasswordVisible]);

    return(
        <View style={styles.input}>
            <MaskInput placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={!isPasswordVisible && type ==='password'}/>
            {type === 'password' ? (
               <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    {handleVisibilityToggle()}
               </TouchableOpacity>
            ):null}
        </View>
    )
}

export default Input