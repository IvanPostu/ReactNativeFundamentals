import React from 'react'
import { View, StyleSheet } from 'react-native'


export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { left, center, right } = this.props
    return (
      <View style={styles.container}>
        
        <View style={styles.menuContainer}>
          {left}
          {center}
          {right}
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
 
})
