import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import CategoriesReducer from './CategoriesReducer'
import LendingReducer from './LendingReducer'
import RenterReducer from './RenterReducer'
import CounterReducer from './CounterReducer'
import MapReducer from './MapReducer'
import SettingReducer from './SettingReducer'
import CalendarReducer from './CalendarReducer'

export default combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  categories: CategoriesReducer,
  lending: LendingReducer,
  renter: RenterReducer,
  count: CounterReducer,
  map: MapReducer,
  setting: SettingReducer,
  calendar: CalendarReducer
})
