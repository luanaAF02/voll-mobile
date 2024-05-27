import { VStack, Text  } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";


export default function Consultas(){
    return(
      <VStack>
            <Text>Consultas</Text>
            <CardConsulta
            nome='Dr.Roberto'
            especialidade='Urologista'
            foto='https://github.com/juaomarcelo.png'
            data='20/06/2024'
            foiAtendido
            foiAgendado
            />
        </VStack>
    )  
}