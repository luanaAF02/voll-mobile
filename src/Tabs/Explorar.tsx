import { Text, ScrollView, Box, VStack } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";

export default function Explorar() {
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
                    <EntradaTexto placeholder="Digite a especialidade" />
                    <EntradaTexto placeholder="Digite sua localização" />
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>
                <Text color="blue.500" fontSize={25} textAlign="center" alignSelf="center" mb={5} mt={3}>Resultado da Busca</Text>
                {[1, 2, 3, 4].map((_, index) => (
                    <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index} mb={10}>
                        <CardConsulta especialidade="Angiologista" nome="Dra. Ana Lúcia" foto="https://github.com/arthurlmr2004.png" />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    );
}