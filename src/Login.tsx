import { VStack, Image, Text, Box, Link, useToast } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Titulo } from "./componentes/Titulo";
import { useEffect, useState } from "react";
import { fazerLogin } from "./servicos/AutenticacaoServico";
import { background} from "native-base/lib/typescript/theme/styled-system";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const toast = useToast();
  const [carregando, setCarregado] = useState(true)

  useEffect(() => {
    AsyncStorage.removeItem('token')
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs')
      }
      setCarregado(false)
    }
    verificarLogin()
  }, [])

  async function login() {
    const resultado = await fazerLogin(email, senha);
    if (resultado) {
      const {token} = resultado
      AsyncStorage.setItem('token', token)
      const tokenDecodificado = jwtDecode(token)as any
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs');
    } else {
      toast.show({
        title: "Erro no login",
        description: "Email ou senha não conferem",
        backgroundColor: "red.500",
      });
    }
  }
  if(carregando){
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Login"></Image>
      <Titulo>Faça Login em sua conta</Titulo>
      <Box>
        <EntradaTexto
          placeholder="Insira seu email"
          value={email}
          onChangeText={setEmail}
          label="Email"
        ></EntradaTexto>
        <EntradaTexto
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          label="Senha"
          secureTextEntry={true}
        ></EntradaTexto>
      </Box>
      <Botao onPress={login}>Entrar</Botao>
      <Link href="https://google.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={2}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color={"blue.500"}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
