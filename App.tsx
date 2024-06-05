import { NativeBaseProvider, StatusBar } from 'native-base';
import { Temas } from './src/estilos/temas';
import Rotas from './src/rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={Temas}>
      <StatusBar backgroundColor={Temas.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}