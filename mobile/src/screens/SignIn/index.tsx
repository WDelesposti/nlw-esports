import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameController } from 'phosphor-react-native'; 
import AuthContext from '../../contexts/auth';

import { THEME } from '../../theme';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { useContext } from 'react';

export function SignIn() {
  const { signed, signIn } = useContext(AuthContext)

  console.log(signed)

  function handleDiscordSignIn() {    
    signIn();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title="Entrar" 
          subtitle="Encontre o seu duo e bora jogar!"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleDiscordSignIn}
        >
          <GameController
            color={THEME.COLORS.TEXT}
            size={20}
          />

          <Text style={styles.buttonTitle}>
            Entrar com Discord
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
