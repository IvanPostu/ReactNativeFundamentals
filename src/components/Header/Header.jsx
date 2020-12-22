import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, StatusBar } from 'react-native'

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Home</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: 50,
    backgroundColor: 'rgb(8,218,95)',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
})
