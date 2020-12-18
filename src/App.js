import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Blocks } from '@/components/Blocks/Blocks'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Blocks />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%'
  }
})

export default App
