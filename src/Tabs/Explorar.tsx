import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { useState } from "react";
import { buscarEspecialidadePorEstado } from "../servicos/EspecialistaServicos";

export default function Explorar(){
  const [estado, setEstado]= useState('')
  const[especialidade, setEspecialidade] = useState('')
  const[resultadoBusca, setResultadoBusca] = useState ([])

  async function buscar(){
    if(!estado || !especialidade) return null
    const resultado = await buscarEspecialidadePorEstado(estado, especialidade)
    if(resultado){
      setResultadoBusca(resultado)
      console.log(resultado)
    }
 
  }
 
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
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
        {resultadoBusca?.map((especialidade, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta 
              especialidade={especialidade.especialista}
              foto={especialidade.imagem}
              nome={especialidade.nome}
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}