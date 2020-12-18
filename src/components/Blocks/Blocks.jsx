import React from 'react'
import { View, StyleSheet, Button, ScrollView } from 'react-native'
import { Block } from './Block'

const ITEMS_COUNT = 36

export class Blocks extends React.Component {
  constructor(props) {
    super(props)

    const initialItems = []
    for (let i = 0; i < ITEMS_COUNT; i++) {
      initialItems.push({
        value: 0,
      })
    }

    this.state = {
      tableIsShowed: true,
      items: initialItems,
    }

    this.onItemClick = this.onItemClick.bind(this)
  }

  onItemClick(index) {
    const newItems = this.state.items.map((item, _index) => {
      if (index === _index) {
        item.value++
      }

      return item
    })

    this.setState({
      items: newItems,
    })
  }

  render() {
    const items = this.state.items.map((item, index) => {
      return <Block onItemClick={() => this.onItemClick(index)} value={item.value} key={index} />
    })

    return (
      <ScrollView style={styles.container}>
        <View style={{ ...styles.blocks, display: this.state.tableIsShowed ? 'flex' : 'none' }}>
          {items}
        </View>
        <View style={buttonContainer}>
          <Button
            title={this.state.tableIsShowed ? 'Hide' : 'Show'}
            onPress={() => this.setState({ tableIsShowed: !this.state.tableIsShowed })}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1464',
  },
  blocks: {
    overflow: 'hidden',
    backgroundColor: '#006266',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const buttonContainer = {
  width: 200,
  alignSelf: 'center',
}
