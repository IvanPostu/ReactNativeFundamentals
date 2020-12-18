import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Block } from './Block'

export class Blocks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tableIsShowed: true
    }
  }

  render() {
    return (
      <View>
        <View style={{ ...styles.container, display: this.state.tableIsShowed ? 'flex' : 'none' }}>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </View>
        <Button
          title={this.state.tableIsShowed ? 'Hide' : 'Show'}
          onPress={() => this.setState({ tableIsShowed: !this.state.tableIsShowed })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'yellow',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
