import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.estiloTexto1, styles.estiloTexto2]}>Este es el primer taller de Programacion con tecnologias móviles</Text>
      <TextInput style={[styles.estiloTextInput1, styles.estiloTextInput2]} placeholder="Ingrese su texto aquí"/>
      <Image style={[styles.estiloImagen1,styles.estiloImagen2]} source={{ uri: 'https://pngimg.com/uploads/github/github_PNG40.png' }}/>
      <Button title="Presioname" onPress={() => alert('Botón presionado')} style={[styles.estiloBoton1, styles.estiloBoton2]}/>
      <ActivityIndicator size="large" color="#0000ff" style={[styles.estiloIndicador1,styles.estiloIndicador2]}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloTexto1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  estiloTexto2: {
    marginBottom: 10,
  },
  estiloTextInput1: {
    width: 200,
    height: 40,
    borderWidth: 1,
  },
  estiloTextInput2: {
    marginBottom: 20,
    paddingLeft: 10,
  },
  estiloImagen1: {
    width: 150,
    height: 150,
  },
  estiloImagen2: {
    marginBottom: 20,
  },
  estiloBoton1: {
    backgroundColor: 'green',
  },
  estiloBoton2: {
    color: 'white',
  },
  estiloIndicador1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  estiloIndicador2: {
    padding: 10,
  },
});


