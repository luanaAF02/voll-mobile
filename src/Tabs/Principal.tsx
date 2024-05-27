import { VStack, Text, Box, ScrollView, Divider, Image } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import Logo from '../assets/Logo.png';

export default function Principal() {
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt='Logo'></Image>
                <Text color="blue.500" fontSize={20} fontWeight="bold" mt={5}>Boas-Vindas!</Text>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
                    <EntradaTexto placeholder="Digite a especialidade" />
                    <EntradaTexto placeholder="Digite sua localização" />
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>
            </VStack>

            <Text color="blue.600" fontWeight="bold" fontSize={32} textAlign="center" alignSelf="center">Depoimentos</Text>

            <Box p={8} textAlign="center" flex={1} alignItems="center">
                <Text fontSize={15} color="gray.500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus, perferendis reprehenderit corrupti sit cumque provident numquam nulla qui iste cupiditate facilis repudiandae amet commodi eveniet porro a accusamus ducimus repellendus quia, fuga id voluptatem, molestiae optio? Adipisci dolores consequatur sed quis ratione eos exercitationem voluptate, similique pariatur iure maiores.
                </Text>
                <Text fontSize={15} color="gray.900" fontWeight="bold" mt={5}>Júlio, 40 anos. São Paulo/SP</Text>

                <Divider mt={3} mb={3} />

                <Text fontSize={15} color="gray.500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus, perferendis reprehenderit corrupti sit cumque provident numquam nulla qui iste cupiditate facilis repudiandae amet commodi eveniet porro a accusamus ducimus repellendus quia, fuga id voluptatem, molestiae optio? Adipisci dolores consequatur sed quis ratione eos exercitationem voluptate, similique pariatur iure maiores.
                </Text>
                <Text fontSize={15} color="gray.900" fontWeight="bold" mt={5}>Renan, 40 anos. São Paulo/SP</Text>

                <Divider mt={3} mb={3} />

                <Text fontSize={15} color="gray.500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus, perferendis reprehenderit corrupti sit cumque provident numquam nulla qui iste cupiditate facilis repudiandae amet commodi eveniet porro a accusamus ducimus repellendus quia, fuga id voluptatem, molestiae optio? Adipisci dolores consequatur sed quis ratione eos exercitationem voluptate, similique pariatur iure maiores.
                </Text>
                <Text fontSize={15} color="gray.900" fontWeight="bold" mt={5}>Roberto, 40 anos. São Paulo/SP</Text>

                <Divider mt={3} mb={3} />

                <Text fontSize={15} color="gray.500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus, perferendis reprehenderit corrupti sit cumque provident numquam nulla qui iste cupiditate facilis repudiandae amet commodi eveniet porro a accusamus ducimus repellendus quia, fuga id voluptatem, molestiae optio? Adipisci dolores consequatur sed quis ratione eos exercitationem voluptate, similique pariatur iure maiores.
                </Text>
                <Text fontSize={15} color="gray.900" fontWeight="bold" mt={5}>Arthur, 40 anos. São Paulo/SP</Text>
                <Divider mt={3} mb={3} />
            </Box>
        </ScrollView>
    );
}