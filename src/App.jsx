import React from 'react'
import { StyleSheet, View, Dimensions,ScrollView } from 'react-native'
import { Menu } from '@/components/Menu/Menu'
import { ButtonComponent } from '@/components/Button/ButtonComponent'
import { Header } from '@/components/Header/Header'
import { CustomTextInput } from '@/components/CustomTextInput/CustomTextInput'


const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.block}>
        <ScrollView>
        <Header />
        <View style={{ marginHorizontal: 40, marginVertical:20 }}>
          <ButtonComponent title={'VERY URGENT'} backgroundColor={'white'} textColor={'rgb(8,218,95)'} borderColor={'rgb(8,218,95)'} />
        </View>
        <View style={{ marginHorizontal: 20}}>
          <CustomTextInput title={'Name'} placeholder={'Your Name'} />
        </View>
        <View style={{ marginHorizontal: 20}}>
          <CustomTextInput title={'Desease'} placeholder={'What is your illness'} />
        </View>
        <View style={{ marginHorizontal: 20}}>
          <CustomTextInput title={'Location'} placeholder={'What is your location'} />
        </View>
        <View style={{ marginHorizontal: 20}}>
          <CustomTextInput title={'Description (Optional)'} height={90} placeholder={'Describe Here'} />
        </View>
        <View style={{ marginHorizontal: 20, marginVertical:25 }}>
          <ButtonComponent title={'Request'} />

        </View>
        </ScrollView>
      </View>


      <Menu />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  block: {
    height: Dimensions.get('window').height - 50
  }
})

export default App
