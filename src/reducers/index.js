import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import CategoriesReducer from './CategoriesReducer'

export default combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  categories: CategoriesReducer
})
