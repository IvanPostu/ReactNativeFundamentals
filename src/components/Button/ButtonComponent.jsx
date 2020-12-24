import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'

export class ButtonComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const borderColor =this.props.borderColor  || 'rgb(8,218,95)'
    const title=this.props.title || ""
    const textColor=this.props.textColor || 'white'
    const backgroundColor=this.props.backgroundColor || 'rgb(8,218,95)'

    return (
      
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{...styles.button,backgroundColor,borderColor}}>
          <Text style={{...styles.text,color:textColor}}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 65,
    width: null,
    borderWidth:2,

    backgroundColor: 'rgb(8,218,95)',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
  },
  text: {
    color: 'white',

    fontSize: 20,
  },
})
