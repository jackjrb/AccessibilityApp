import { View, TouchableOpacity} from 'react-native';
import { useCallback, useState } from 'react';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';

import { styles } from './styles';

import Visibility from '../../../assets/Visibility.svg';
import VisibilityOff from '../../../assets/VisibilityOff.svg';
import colors from '../../styles/colors';


export type InputProps = MaskInputProps & {
    placeholder: string;
    type?: string; 
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

const Input = ({placeholder, type, accessibilityHint, accessibilityLabel}:InputProps) => {
      const [value, onChangeText] = useState('')
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      const handleVisibilityToggle = useCallback(() => {
            return (
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.button} accessibilityLabel={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"} accessibilityRole="button" accessibilityHint="Alterna a visibilidade do campo de senha">
                    {isPasswordVisible ? (
                       
                        <Visibility height={25} width={25} color={colors.text}/>
                    ):(
                       
                        <VisibilityOff height={25} width={25} color={colors.text}/>
                    )}
                </TouchableOpacity>
            )
      },[isPasswordVisible]);

    return(
        <View style={styles.input}>
            <MaskInput placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={!isPasswordVisible && type ==='password'} placeholderTextColor={colors.text} style={{flex:1}} accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint}/>
            {type === 'password' ? (
                handleVisibilityToggle()
            ) : null}
        </View>
    )
}

export default Input