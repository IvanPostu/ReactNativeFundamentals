import React from 'react'
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native'

import image1 from '@/assets/smartphone_720x480.jpg'

export default function SignInView() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image1} style={styles.image} />
      </View>
      <View style={{ height: HEIGHT / 3, backgroundColor: null, justifyContent: 'center' }}>
        <View style={styles.button}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>SIGN IN</Text>
        </View>
        <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>SIGN UP</Text>
        </View>
      </View>
    </View>
  )
}

const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  button: {
    backgroundColor: '#fff',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
})
