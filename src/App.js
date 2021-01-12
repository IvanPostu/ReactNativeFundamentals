import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Navigation } from 'react-native-navigation'
import HomeScreen from '@/screens/HomeScreen/HomeScreen'
import GreetingScreen from '@/screens/GreetingScreen/GreetingScreen'

Navigation.registerComponent('HomeScreen', () => gestureHandlerRootHOC(HomeScreen))
Navigation.registerComponent('GreetingScreen', () => gestureHandlerRootHOC(GreetingScreen))
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'GreetingScreen',
              options: {
                statusBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  })
})
