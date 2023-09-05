import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

export default function ButtonDos() {
  return (
    <View>
      <Button title="Este es el boton dos" onPress={() => alert('Botón presionado')} style={styles.estiloBotonDos}/>
    </View>
  )
}

const styles = StyleSheet.create({
  estiloBotonDos: {
    backgroundColor: 'green',
    color: 'red',
  },
})
