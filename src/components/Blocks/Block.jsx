import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CONSTANT_COLORS = [
  '#eccc68',
  '#ffa502',
  '#7bed9f',
  '#2ed573',
  '#1e90ff',
  '#3742fa',
  '#ffffff',
  '#ff4757',
  '#a4b0be',
  '#D980FA'
]

function valueToColor(value) {
  const colorIndex = value % 10

  return CONSTANT_COLORS[colorIndex]
}

export class Block extends React.Component {
  constructor(props) {
    super(props)

    const initialValue = 0
    const initialColor = valueToColor(initialValue)

    this.state = {
      value: initialValue,
      color: initialColor
    }

    this.incrementValue = this.incrementValue.bind(this)
  }

  incrementValue() {
    const newValue = this.state.value + 1
    const newColor = valueToColor(newValue)
    this.setState({ value: newValue, color: newColor })
  }

  render() {
    return (
      <View
        onTouchEndCapture={this.incrementValue}
        style={{ ...styles.container, backgroundColor: this.state.color }}
      >
        <Text>{this.state.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2f3542',
    backgroundColor: '#70a1ff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
