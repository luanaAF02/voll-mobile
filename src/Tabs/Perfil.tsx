import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar source={{ uri: "https://github.com/arthurlmr2004.png" }} mt={5} size="xl" />

                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg">Arthur Larangeiras Maurício da Rocha</Titulo>
                <Titulo>05/03/2004</Titulo>
                <Titulo>Votuporanga / SP</Titulo>

                <Divider mt={5} />

                <Titulo color="blue.500">Histórico Médico</Titulo>
                <Text fontSize={18}>Bronquite</Text>
                <Text fontSize={18}>Sinusite</Text>
            </VStack>
        </ScrollView>
    );
}