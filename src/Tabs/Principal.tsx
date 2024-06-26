import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { depoimentos } from "../utils/mock";
import { useState } from "react";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { CardConsulta } from "../componentes/CardConsulta";


interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string,
}


export default function Principal({ navigation }) {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBuscar] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null
    const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
    if (resultado) {
      setResultadoBuscar(resultado)
      console.log(resultado)
    }
  }
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="blue.500">Boas-vindas!</Titulo>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
        <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Botao mt={3} mb={3} onPress={buscar}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
        {resultadoBusca?.map((especialista: Especialista, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta
              especialidade={especialista.especialidade}
              foto={especialista.imagem}
              nome={especialista.nome}
              onPress={() => navigation.navigate('Agendamento', { especialistaId: especialista.id })}
            />
          </VStack>
        ))}
     

        <Titulo color="blue.800" alignSelf="center">Depoimentos</Titulo>
        <VStack space={3} divider={<Divider />} w="100%">
          {
            depoimentos.map(depoimento => (
              <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {depoimento.text}
                </Text>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
              </Box>
            ))
            
          }
        </VStack>
         
      </VStack>
    </ScrollView>
  );
}