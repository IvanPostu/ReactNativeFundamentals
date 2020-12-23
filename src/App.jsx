import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SmileIonIcon } from '@/components/CustomIcons/SmileIonIcon'
import { DoctorMdIcon } from '@/components/CustomIcons/DoctorMdIcon'

import { ButtonComponent } from '@/components/Button/ButtonComponent'
import { Header } from '@/components/Header/Header'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ marginHorizontal: 30 }}>
        <ButtonComponent />
      </View>
      <SmileIonIcon width={102} height={102} color={'blue'} />
      <DoctorMdIcon width={102} height={102} color={'green'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAEBD7',
    flex: 1,
  },
})

export default App
