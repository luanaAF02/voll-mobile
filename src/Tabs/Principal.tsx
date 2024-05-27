import { VStack, Text, Box, Link, ScrollView, Avatar, Divider,Image } from "native-base";
import Logo from '../assets/Logo.png'
import { Titulo } from "../componentes/Titulo";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack>
        <VStack flex={1} alignItems="flex-start" p={5} >
            <Image source={Logo} alt="Login"></Image>
            <Titulo color="blue.500">Boas-Vindas!</Titulo>
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
        <Titulo color="blue.900" alignSelf="center" mt={10}>
            Depoimentos
        </Titulo>
        <Titulo pl={3} color="gray.400" textAlign={"flex-start"} mb={2} fontSize={"sm"} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit massa sed odio volutpat dictum. Quisque mattis augue et lacus vestibulum tincidunt. Aliquam et lorem dolor. Maecenas non maximus nibh. Quisque interdum venenatis orci, in pretium ex feugiat in. Nulla quis tortor eget augue tincidunt fermentum vitae ac arcu. Vivamus imperdiet augue ac erat fringilla, nec iaculis nisi imperdiet.
        </Titulo>
        <Titulo color="gray.500" textAlign="center" fontSize={15} fontWeight={"bold"}>
            Júlio,40 anos,São Paulo/SP
        </Titulo>
        <Divider mt={5}/>
        <Titulo pl={3} color="gray.400" textAlign={"flex-start"} mb={2} fontSize={"sm"} >
        Nulla eget sollicitudin mi. Donec pretium magna augue. Phasellus ut nunc et justo commodo consequat vitae non eros. Aenean aliquam eget enim tincidunt luctus. Vestibulum faucibus sagittis dui, id viverra ligula sollicitudin at. Morbi in ipsum posuere, condimentum nunc eu, mattis augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus nec mi et feugiat. Aliquam ullamcorper ultricies arcu, vel commodo est molestie nec. Donec elit ex, hendrerit sit amet pretium vitae, egestas at ligula.
        </Titulo>
        <Titulo color="gray.500" textAlign="center" fontSize={15} fontWeight={"bold"}>
            Marcos,40 anos,São Paulo/SP
        </Titulo>
        <Divider mt={5}/>
        <Titulo pl={3} color="gray.400" textAlign={"flex-start"} mb={2} fontSize={"sm"} >
        Morbi enim lectus, rutrum a efficitur ut, imperdiet nec lacus. Nulla suscipit risus lorem, nec ullamcorper nibh efficitur ut. Vivamus imperdiet vulputate venenatis. Maecenas interdum, lacus quis pretium tristique, velit lorem dictum enim, ac sodales mauris ante non tortor. Praesent quis fringilla ex, a pellentesque ipsum. Suspendisse potenti. Ut fermentum varius turpis, ut vehicula orci condimentum venenatis. In pretium dignissim tellus ut tincidunt. Maecenas aliquet, urna ut posuere congue, tortor dolor mollis felis, et ullamcorper ante eros eget justo. Sed sem diam, vehicula id augue nec, molestie sodales purus.
        </Titulo>
        <Titulo color="gray.500" textAlign="center" fontSize={15} fontWeight={"bold"}>
            Carlos,40 anos,São Paulo/SP
        </Titulo>
        <Divider mt={5}/>
        <Titulo pl={3} color="gray.400" textAlign={"flex-start"} mb={2} fontSize={"sm"} >
        Nunc aliquet libero velit. Sed nec blandit ex. Nullam imperdiet congue egestas. Etiam iaculis, nunc sit amet laoreet semper, neque lectus laoreet orci, vel rutrum elit quam et massa. Sed sed velit leo. Nunc arcu quam, posuere ac euismod sed, congue vitae urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Titulo>
        <Titulo color="gray.500" textAlign="center" fontSize={15} fontWeight={"bold"}>
            João,40 anos,São Paulo/SP
        </Titulo>

      </VStack>
    </ScrollView>
  );
}
