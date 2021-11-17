import * as React from 'react'
import { StatusBar, View } from 'react-native'

import ReduxNavigation from '../Navigation/ReduxNavigation'

// Styles
import styles from './RootContainerStyles'

/**
 * The properties passed to the component
 */
interface Props {}

/**
 * The properties mapped from the global state
 */
interface State {}

/**
 *  This class provides functionality for Root Container
 */
export class RootContainer extends React.Component<Props, State> {
  /**
   * It renders the component and return styling for the SplashComponent.
   */
  public render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    )
  }
}

export default RootContainer
