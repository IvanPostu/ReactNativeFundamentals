import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

export class ThreePoints extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.7}>
        <View>
          <Svg width="30" height="30" stroke="white" color="green" viewBox="0 0 512 512">
            <Circle fill="white" cx="96" cy="256" r="48" strokeMiterlimit="10" />
            <Circle fill="white" cx="256" cy="256" r="48" strokeMiterlimit="10" />
            <Circle fill="white" cx="416" cy="256" r="48" strokeMiterlimit="10" />
          </Svg>
        </View>
      </TouchableOpacity>
    )
  }
}
