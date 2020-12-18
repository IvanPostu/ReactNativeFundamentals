import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'

export const Panel = (props) => {
  return (
    <View style={props.containerStyle}>
      <Button title="Button 2" onPress={() => {}} />
      <Button style={{ background: 'red', width: 40 }} title="Button 1" onPress={() => {}} />
    </View>
  )
}

Panel.propTypes = {
  containerStyle: PropTypes.object.isRequired
}
