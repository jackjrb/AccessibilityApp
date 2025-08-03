import { Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../../global/components/button';
import Input from '../../global/components/input';

const Login = () => {

    return(
        <View style={styles.container}>
          <Text style={styles.title}>Seja bem vindo de volta</Text>
          <Input placeholder='E-mail'/>
          <Input placeholder='Senha'/>
          <Button text="Avancar" />
        </View>
    )
}

export default Login