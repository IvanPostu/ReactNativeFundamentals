import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'


export class CustomTextInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      title, placeholder, height
    } = this.props
    return (
      <View style={styles.container}  >
        <Text style={styles.title}>
          {title}
        </Text>
        <TextInput  placeholder={placeholder} style={{...styles.textInput,height:height}} />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {

   
    marginTop: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: 'rgb(90,90,90)',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgb(190,190,190)',
    borderRadius: 5,
    paddingLeft:10,
    

  }

})