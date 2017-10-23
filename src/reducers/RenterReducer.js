import {
  UPDATE_DATA_RENTER,
  GET_STUFF_NEARBY_SUCCESS,
  GET_HOME_CATEGORY,
  GET_STUFF_RENTER_BY_CATEGORY,
  GET_DETAILS_STUFF_SUCCESS
} from 'actions/types'

const INITIAL_STATE = {
  idStuff: '',
  home: '',
  allStuff: '',
  stuffNearest: '',
  detailsStuff: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA_RENTER:
      return { ...state, [action.payload.prop]: action.payload.value }
    case GET_HOME_CATEGORY:
      return { ...state, home: action.payload.data }
    case GET_STUFF_RENTER_BY_CATEGORY:
      return { ...state, allStuff: action.payload.data }
    case GET_STUFF_NEARBY_SUCCESS:
      return { ...state, stuffNearest: action.payload.data }
    case GET_DETAILS_STUFF_SUCCESS:
      return { ...state, detailsStuff: action.payload.data }
    default:
      return state
  }
}
