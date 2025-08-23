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
          <Input placeholder='E-mail'/>
          <Input placeholder='Senha' type='password' accessibilityHint="Digite sua senha. Você pode alternar a visibilidade do campo com o botão ao lado"/>
          <Button text="Entrar" accessibilityLabel='Entrar' accessibilityHint='Faz login e abre tela inicial' />
          <Checkbox text="Lembrar senha" accessibilityLabel='Lembrar senha' accessibilityHint='Lembra sua senha para a próxima vez que acessar o app'/>
        </View>
    )
}

export default Login