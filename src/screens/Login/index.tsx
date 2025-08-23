import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import Button from '../../global/components/button';
import Input from '../../global/components/input';
import Checkbox from '../../global/components/checkbox';

const Login = () => {
  console.log('login')

    return(
        <View style={styles.container}>
          <Image source={require('../../assets/login.png')} style={styles.image}/>
          <Text style={styles.title}>Seja bem vindo de volta</Text>
          <Input placeholder='E-mail' accessibilityLabel='Digite o seu email'/>
          <Input placeholder='Senha' type='password' accessibilityLabel='Digite a sua senha'/>
          <Button text="Entrar" accessibilityLabel='Entrar' accessibilityHint='Faz login e abre tela inicial' />
          <Checkbox text="Lembrar senha" accessibilityLabel='Lembrar senha' accessibilityHint='Lembra sua senha para a próxima vez que acessar o app'/>
        </View>
    )
}

export default Login