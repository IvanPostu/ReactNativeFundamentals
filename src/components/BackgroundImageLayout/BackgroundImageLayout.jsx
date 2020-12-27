import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Background from '@/assets/bg01.png'

 const BackgroudImageLayout = (props) => {
  const { children } = props
  return <ImageBackground  source={Background} style={styles.container}>
    {children}
  </ImageBackground>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
}
)

export default BackgroudImageLayout