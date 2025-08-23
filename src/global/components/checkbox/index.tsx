import { View, TouchableOpacity , Text } from 'react-native';

import { getStyles } from './styles';
import { useState } from 'react';

interface CheckboxProps {
  text: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const Checkbox = ({text, accessibilityHint, accessibilityLabel}:CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const styles = getStyles(isChecked);

    return(
        <TouchableOpacity style={styles.container} onPress={()=>{setIsChecked(!isChecked)}} accessibilityLabel={accessibilityLabel} accessibilityRole='checkbox' accessibilityState={{checked: isChecked}} accessibilityHint={accessibilityHint}>
          <View style={styles.button}/>
          <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Checkbox