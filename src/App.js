import React from 'react'
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native'
import { Panel } from './components/Panel'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Panel />
      <Panel />
      <Panel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ff11',
    color: '#fff'
  }
})

export default App
