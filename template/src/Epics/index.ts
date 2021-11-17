import { combineEpics } from 'redux-observable'
import { todosEpic } from './ToDosEpic/index'

export default combineEpics(todosEpic)
