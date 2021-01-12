import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { MenuIcon } from './MenuIcon'

export class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <MenuIcon iconType={'Home'} isGreen={true} width={20} height={22} />
        </View>
        <View>
          <MenuIcon
            iconType={'Notification'}
            redPoint={true}
            isGreen={false}
            width={17}
            height={22}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.centerButton}>
            <Text style={{ color: 'white', fontSize: 38 }}>+</Text>
          </View>
        </TouchableOpacity>
        <View>
          <MenuIcon iconType={'Schedule'} width={21} height={20} />
        </View>
        <View>
          <MenuIcon iconType={'Profile'} width={18} height={18} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    height: 50,
    width: null,
    shadowOffset: {
      width: 0,
      height: 14,
    },

    elevation: 40,
    shadowOpacity: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: 'rgb(8,218,95)',
    borderRadius: 60,
    alignItems: 'center',

    marginBottom: 25,
  },
})
