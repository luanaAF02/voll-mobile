import { VStack, Text, Box, Link, ScrollView, Avatar } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Explorar() {
  return (
    <ScrollView flex={1}>
      <VStack>
        <VStack flex={1} alignItems="center" p={5}>
          <Box
            w={"100%"}
            bg={"white"}
            p={"5"}
            borderRadius={"lg"}
            shadow={"2"}
            mt={"5"}
          >
            <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
            <EntradaTexto
              placeholder="Digite sua localização"
              secureTextEntry={true}
            ></EntradaTexto>
            <Botao mt={"3"} mb={"3"}>
              Buscar
            </Botao>
          </Box>
        </VStack>
        <Titulo color="blue.500" alignSelf="center" marginBottom={3}>
          Resultado da Busca
        </Titulo>
        {[1, 2, 3].map((_, index) => (
          <VStack
            flex={1}
            w={"100%"}
            p={5}
            marginBottom={5}
            alignItems="flex-start"
            key={index}
          >
            <CardConsulta
              nome="Dr.João"
              especialidade="Urologista"
              foto="https://github.com/juaomarcelo.png"
              data="20/06/2024"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
