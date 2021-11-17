import { createAppContainer, createStackNavigator } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import Splash from '../Containers/Splash'

const AppStack = createStackNavigator(
  {
    splash: Splash,
  },
  { headerMode: 'none', initialRouteName: 'splash' },
)

// Manifest of possible screens
const app = createAnimatedSwitchNavigator({
  All: AppStack,
})

const PrimaryNav = createAppContainer(app)

export default PrimaryNav
