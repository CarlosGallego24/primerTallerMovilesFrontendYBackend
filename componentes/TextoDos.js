import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TextoDos() {
  return (
    <View>
      <Text style={styles.estiloTextoDos}>Este es el texto dos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    estiloTextoDos: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
})