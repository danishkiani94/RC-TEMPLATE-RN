import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'

import createStore from './Reducers'
import './Localization'

const store = createStore()
class App extends React.Component {
  public render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
