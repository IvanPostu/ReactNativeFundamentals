import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import BackgroudImageLayout from '@/components/BackgroundImageLayout/BackgroundImageLayout'

const GreetingScreen = (props) => {
  function onTouchCallback() {
    Navigation.push(props.componentId, {
      component: {
        name: 'HomeScreen',
      },
    })
  }

  return (
    <BackgroudImageLayout style={styles.container}>
      <View onTouchEnd={onTouchCallback} style={styles.textContainer}>
        <Text style={styles.text}>Telemedicine</Text>
      </View>
    </BackgroudImageLayout>
  )
}

GreetingScreen.options = {
  topBar: {
    visible: false,
  },
  statusBar: {
    visible: false,
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default GreetingScreen
