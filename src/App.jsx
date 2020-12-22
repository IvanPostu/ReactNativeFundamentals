import React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

import { ButtonComponent } from '@/components/Button/ButtonComponent'
import { Header } from '@/components/Header/Header'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ marginHorizontal: 30 }}>
        <ButtonComponent />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAEBD7',

    flex: 1,
  },
})

export default App
