import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import CategoriesReducer from './CategoriesReducer'
import LendingReducer from './LendingReducer'
import CounterReducer from './CounterReducer'

export default combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  categories: CategoriesReducer,
  lending: LendingReducer,
  count: CounterReducer
})
