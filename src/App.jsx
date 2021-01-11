import React from 'react'
import GreetingPage from '@/pages/Greeting/GreetingPage'
import HomePage from '@/pages/Home/HomePage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInContainer } from '@/components/SingIn'

const Stack = createStackNavigator()
function defaultOptions(props) {
  return {
    header: () => null,
    ...props,
  }
}

const App = () => {
  return (
    <SignInContainer />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen options={defaultOptions} name="Greeting" component={GreetingPage} />
    //     <Stack.Screen options={defaultOptions} name="Home" component={HomePage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App
