import { Epic, ofType } from 'redux-observable'
import { getType } from 'typesafe-actions'
import { IDependencies } from '../../Services/Api'
import { ToDosAction } from '../../Reducers/ToDosReducer'
import { map, mergeMap } from 'rxjs/operators'
import { ApiResponse } from 'apisauce'
import { AnyAction } from 'redux'

export const todosEpic: Epic = (action$, state$, { api }: IDependencies) =>
  action$.pipe(
    ofType(getType(ToDosAction.request)),
    mergeMap((action: AnyAction) => {
      return api.ToDos().pipe(
        map((response: ApiResponse<any>) => {
          if (response.ok) {
            return ToDosAction.success(response.data)
          } else {
            return ToDosAction.failure({ action, response })
          }
        }),
      )
    }),
  )
