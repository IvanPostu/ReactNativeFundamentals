import React from 'react'
import { View, StyleSheet, Button, ScrollView } from 'react-native'
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
      <ScrollView style={styles.container}>
        <View style={{ ...styles.blocks, display: this.state.tableIsShowed ? 'flex' : 'none' }}>
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
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </View>
        {/* <View style={{ alignItems: 'center' }}> */}
        <View style={buttonContainer} tra>
          <Button
            title={this.state.tableIsShowed ? 'Hide' : 'Show'}
            onPress={() => this.setState({ tableIsShowed: !this.state.tableIsShowed })}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1464'
  },
  blocks: {
    overflow: 'hidden',
    backgroundColor: 'yellow',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

const buttonContainer = {
  width: 200,
  alignSelf: 'center'
}
