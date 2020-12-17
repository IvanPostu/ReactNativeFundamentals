import React from 'react'
import { StyleSheet, View, Button, Dimensions } from 'react-native'

export const Panel = () => {
  return (
    <View style={styles.container}>
      <Button title="Button 2" onPress={() => {}} />
      <Button title="Button 1" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#99ffff',
    color: '#fff',
    minHeight: 100,
    width: Dimensions.get('screen').width
  }
})
