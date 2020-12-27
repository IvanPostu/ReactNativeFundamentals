import React from 'react'
import { View, Text, StyleSheet,StatusBar } from 'react-native'
import BackgroudImageLayout from '@/components/BackgroundImageLayout/BackgroundImageLayout'

const GreetingPage = (props) => {
  function onTouchCallback() {
     props.navigation.navigate('Home')
  }
  return (
    <BackgroudImageLayout style={styles.container}>
<StatusBar hidden={true} />
      <View onTouchEnd={onTouchCallback} style={styles.textContainer}>
        <Text style={styles.text} >Telemedicine</Text>
      </View>
    </BackgroudImageLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text:{
   color:'white',
   fontSize:24,
   fontWeight:'bold'
  }
}

)



export default GreetingPage
