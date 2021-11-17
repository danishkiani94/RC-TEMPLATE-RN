import { AnyAction, combineReducers } from 'redux'
import rootEpics from '../Epics'
import { createAPI } from '../Services/Api'
import configureStore from './CreateStore'

import CropListReducer, { CropListResultState } from './ToDosReducer'

import { ApiErrorResponse } from 'apisauce'

import { createAPI as createSecureAPI } from '../Services/SecureApi'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  cropList: CropListReducer,
})

export interface RootState {
  nav: any
  cropList: CropListResultState
}

export interface ErrorFormat {
  action: AnyAction
  response: ApiErrorResponse<ErrorResponse>
}

export interface RandomErrorFormat {
  action: AnyAction
  response: ApiErrorResponse<RandomErrorFormat>
}

export default () => {
  const api = createAPI()
  const secure = createSecureAPI()

  let { store, epicMiddleWare } = configureStore(reducers, rootEpics, {
    api,
    secure,
  })
  return store
}
