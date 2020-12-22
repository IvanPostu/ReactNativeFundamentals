import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'

export class ButtonComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.text}>Start</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: null,

    backgroundColor: 'rgb(8,218,95)',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
})
