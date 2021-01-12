import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import App from './App'

// Home screen declaration
export const NameListScreen = (props) => {
  return (
    <View style={styles.root}>
      <App />
    </View>
  )
}
NameListScreen.options = {
  topBar: {
    visible: false,
  },
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
})
