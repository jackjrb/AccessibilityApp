import { View, TouchableOpacity , Text } from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  text: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const Button = ({text, accessibilityHint,accessibilityLabel}:ButtonProps) => {
    return(
        <View>
          <TouchableOpacity style={styles.button} accessibilityLabel={accessibilityLabel} accessibilityRole='button' accessibilityHint={accessibilityHint}>
            <Text style={styles.textButton}>{text}</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Button