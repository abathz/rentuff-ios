import {
  UPDATE_DATE_CALENDAR
} from 'actions/types'

const INITIAL_STATE = {
  startDate: '',
  endDate: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATE_CALENDAR:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
