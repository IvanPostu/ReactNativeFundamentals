import React from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import PropTypes from 'prop-types'

export function SmileIonIcon(props) {
  const { width, height, color } = props

  const xml = `
    <svg viewBox="0 0 512 512"><circle fill="${color}" cx="184" cy="232" r="24"/>
      <path fill="${color}" d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z"/>
      <circle fill="${color}" cx="328" cy="232" r="24"/>
      <circle  cx="256" cy="256" r="208" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="32"/>
    </svg>
    `

  return (
    <View style={{ width: width || 32, height: height || 32 }}>
      <SvgXml xml={xml} width="100%" height="100%" />
    </View>
  )
}

SmileIonIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
