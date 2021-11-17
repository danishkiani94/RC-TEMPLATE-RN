import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import Styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Reducers/index'
import { ToDosAction } from '../../Reducers/ToDosReducer/index'
import { ListResponse } from '../../DataModels/ListResponse'
/**
 * The properties passed to the component
 */
export interface IOwnProps {
  title: string
  request: string
}

/**
 * The properties mapped from the global state
 */
export interface IStateProps {
  payload: ListResponse | undefined
}

/**
 * The properties mapped from Redux dispatch
 */
export interface IDispatchProps {
  loadCropList: Function
}

/**
 *  This function provides functionality for HomeScreen
 */
const SplashScreen = ({
  navigation,
  Props,
}: {
  navigation: any

  /**
   * Defining Props by combining properties and actions define above
   */
  Props: IStateProps & IDispatchProps & IOwnProps
}) => {
  /**
   *  useDispatch() is used for dispatching actions to the store.
   */
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(ToDosAction.request())
  }

  /**
   * useEffect can accept getData() ,
   *  which lets you create functions that dispatch when called, and pass those functions as props to your component
   */
  React.useEffect(() => {
    getData()
  }, [])

  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Welcome to RC boilerplate</Text>
    </View>
  )
}
export default SplashScreen
