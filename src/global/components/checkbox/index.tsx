import { View, TouchableOpacity , Text } from 'react-native';

import { getStyles } from './styles';
import { useState } from 'react';

interface CheckboxProps {
  text: string;
}

const Checkbox = ({text}:CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const styles = getStyles(isChecked);

    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={()=>{setIsChecked(!isChecked)}}/>
            <Text style={styles.textButton}>{text}</Text>
        </View>
    )
}

export default Checkbox