import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas() {
    return (
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta nome="Dr.Arthur Larangeiras Maurício da Rocha" data="20/06/2024" especialidade="Urologista" foto="https://github.com/arthurlmr2004.png" foiAgendado foiAtendido />
        </VStack>
    );
}