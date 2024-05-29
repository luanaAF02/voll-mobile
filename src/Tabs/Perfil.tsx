import React, { useEffect, useState } from 'react';
import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pegarDadosPaciente } from '../servicos/PacienteServico';
import { Paciente } from '../interfaces/Paciente';
import { Botao } from '../componentes/Botao';
 

export default function Perfil({navigation}: any) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);
  
  useEffect(() => {
    async function obterDadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      if (!pacienteId) return;

      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setDadosPaciente(resultado);
        console.log(resultado);
      }
    }
    obterDadosPaciente();
  }, []);

  const deslogar = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('pacienteId');
    navigation.replace('Login'); // Redirecionar para a tela de login
  };

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: dadosPaciente.imagem }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>{dadosPaciente.nome}</Titulo>
        <Text>01/04/1988</Text>
        <Text>São Paulo</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Planos de Saúde</Titulo>
        {
          dadosPaciente.planosSaude && dadosPaciente.planosSaude.map((plano, index) => (
            <Text key={index}>{plano}</Text>
          ))
        }

        <Botao onPress={deslogar}>
          deslogar
        </Botao>
      </VStack>
    </ScrollView>
  );
}
