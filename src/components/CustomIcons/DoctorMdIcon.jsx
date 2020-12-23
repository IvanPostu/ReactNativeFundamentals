import React, { Component } from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export class DoctorMdIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { width, height, color } = this.props

    const xml = `
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill=${color} d="M14.84,16.26C17.86,16.83 20,18.29 20,20V22H4V20C4,18.29 6.14,16.83 9.16,16.26L12,21L14.84,16.26M8,8H16V10A4,4 0 0,1 12,14A4,4 0 0,1 8,10V8M8,7L8.41,2.9C8.46,2.39 8.89,2 9.41,2H14.6C15.11,2 15.54,2.39 15.59,2.9L16,7H8M12,3H11V4H10V5H11V6H12V5H13V4H12V3Z" />
      </svg>
      `

    return (
      <View style={{ width: width || 32, height: height || 32 }}>
        <SvgXml xml={xml} width="100%" height="100%" />
      </View>
    )
  }
}
