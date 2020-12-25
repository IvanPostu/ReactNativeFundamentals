import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import HomeIcon from '@/assets/Home.png'
import HomeIconGreen from '@/assets/Homeg.png'
import NotificationIcon from '@/assets/Notification.png'
import NotificationIconGreen from '@/assets/Notificationg.png'
import ProfileIcon from '@/assets/Profile.png'
import ProfileIconGreen from '@/assets/Profileg.png'
import fffIcon from '@/assets/Schedule.png'
import ScheduleIconGreen from '@/assets/Scheduleg.png'
import redPoint from '@/assets/redPoint.png'



export class MenuIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const iconType = this.props.iconType
    const width = this.props.width
    const height = this.props.height
    const isGreen = this.props.isGreen
    const point =this.props.redPoint ? <Image source={redPoint} style={{position:'absolute', top:0, right:15}}/> : null
    let icon
    switch (iconType) {
      case 'Home':
        icon = isGreen ? HomeIconGreen : HomeIcon
        break

      case 'Profile':
        icon = isGreen ? ProfileIconGreen : ProfileIcon
        break

      case 'Schedule':
        if (isGreen) {
          icon = ScheduleIconGreen
        }
        else {
          icon = fffIcon
        }
        break

      case 'Notification':
        icon = isGreen ? NotificationIconGreen : NotificationIcon
        break
      default:
        break
    }
    return (

      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.container}>
          <Image source={icon} style={{ maxHeight: height, maxWidth: width }} />
          <Text style={{ color:isGreen ? 'rgb(8,218,95)': 'grey', fontSize: 13 }}>{iconType}</Text>
           {point}
        </View>
      </TouchableOpacity>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',



  }

})

