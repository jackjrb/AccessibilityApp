import { View, TouchableOpacity , Text} from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  text: string;
}

const Button = ({text}:ButtonProps) => {
    return(
        <View >
          <TouchableOpacity style={styles.button} >
            <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button