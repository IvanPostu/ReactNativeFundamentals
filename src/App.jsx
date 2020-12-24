import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SmileIonIcon } from '@/components/CustomIcons/SmileIonIcon'
import { DoctorMdIcon } from '@/components/CustomIcons/DoctorMdIcon'
import {Airplane} from '@/components/CustomIcons/Airplane'
import {AndroidIcons} from '@/components/CustomIcons/AndroidIcons'

import { ButtonComponent } from '@/components/Button/ButtonComponent'
import { Header } from '@/components/Header/Header'


const App = () => {
  return (
    <View style={styles.container}>
      
      <Header />
      <View style={{ marginHorizontal: 40 }}>
        <ButtonComponent title={'VERY URGENT'} backgroundColor={'white'} textColor={'rgb(8,218,95)'} borderColor={'rgb(8,218,95)'} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ButtonComponent title={'Request'} />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default App
