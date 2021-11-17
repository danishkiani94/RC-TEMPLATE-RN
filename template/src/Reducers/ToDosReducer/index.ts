import { createReducer } from 'reduxsauce'
import { createStandardAction, getType, createAction } from 'typesafe-actions'
import { Reducer } from 'redux'
import { ErrorFormat } from '..'
import Immutable from 'seamless-immutable'
import { ListResponse } from '../../DataModels/ListResponse'

const actionCreators = {
  request: createAction('LIST_REQUEST'),
  success: createStandardAction('LIST_SUCCESS')<ListResponse>(),
  failure: createStandardAction('LIST_FAILURE')<ErrorFormat>(),
}

export const ToDosAction = actionCreators

export interface CropListResultState {
  error?: ErrorFormat | undefined
  fetching?: boolean | undefined
  data?: ListResponse | undefined
  // customData?: ['./List.json'] | undefined;
}

/* ------------- Initial State ------------- */
type ImmutableCropListResultState = Immutable.Immutable<CropListResultState>
// let customData = require('./List.json');
export const INITIAL_STATE: ImmutableCropListResultState = Immutable({
  data: undefined,
  error: undefined,
  fetching: false,
})

/* ------------- Reducers ------------- */
export const request: Reducer<ImmutableCropListResultState> = (
  state = INITIAL_STATE,
) => state.merge({ fetching: true })

export const success: Reducer<ImmutableCropListResultState> = (
  state = INITIAL_STATE,
  action,
) =>
  state.merge({
    fetching: false,
    error: undefined,
    data: action.payload,
  })

export const failure: Reducer<ImmutableCropListResultState> = (
  state = INITIAL_STATE,
  action,
) => state.merge({ fetching: false, error: action.payload, data: undefined })

/* ------------- Hookup Reducers To Types ------------- */

const reducerMap = {
  [getType(actionCreators.request)]: request,
  [getType(actionCreators.success)]: success,
  [getType(actionCreators.failure)]: failure,
}

export const ToDosReducer = createReducer(INITIAL_STATE, reducerMap)

export default ToDosReducer
