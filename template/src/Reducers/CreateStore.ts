import { applyMiddleware, compose, createStore, Reducer } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { IDependencies } from '../Services/Api'

import { createLogger } from 'redux-logger'

// creates the store
export default (
  rootReducer: Reducer<any>,
  rootEpics: any,
  dependencies: IDependencies,
) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Epic Middleware ------------- */
  const epicMiddleWare = createEpicMiddleware({
    dependencies: { ...dependencies },
  })

  middleware.push(epicMiddleWare)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- Redux Logger Middleware ------------- */
  const reduxLogger = applyMiddleware(createLogger())

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  // @ts-ignore
  const createAppropriateStore = createStore

  // @ts-ignore
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  let store

  store = createAppropriateStore(
    rootReducer,
    undefined,
    composeEnhancers(...enhancers, reduxLogger),
  )
  //

  // kick off root epics
  epicMiddleWare.run(rootEpics)

  return {
    store,
    epicMiddleWare,
  }
}
