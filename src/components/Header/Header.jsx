import React from 'react'
import { View, StyleSheet, Text,  StatusBar } from 'react-native'
import {ThreePoints} from '@/components/CustomIcons/ThreePoints'


export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.menuContainer}>
          <View style={{width: 40}}/>
          <Text style={styles.text}>Home</Text>
          <ThreePoints />
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
  menuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
})
