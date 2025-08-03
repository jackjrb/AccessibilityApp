import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../../global/components/button';
import Input from '../../global/components/input';
import Checkbox from '../../global/components/checkbox';

const Login = () => {

    return(
        <View style={styles.container}>
          <Image source={require('../../assets/login.png')} style={styles.image}/>
          <Text style={styles.title}>Seja bem vindo de volta</Text>
          <Input placeholder='E-mail'/>
          <Input placeholder='Senha'/>
          <Button text="Avançar" />
          <Checkbox text="Lembrar-me" />
        </View>
    )
}

export default Login