import { View, TouchableOpacity , Text } from 'react-native';
import { styles } from './styles';

interface CheckboxProps {
  text: string;
}

const Checkbox = ({text}:CheckboxProps) => {
    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}/>
            <Text style={styles.textButton}>{text}</Text>
        </View>
    )
}

export default Checkbox