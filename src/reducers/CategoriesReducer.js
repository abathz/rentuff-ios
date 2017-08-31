import {
  GET_CATEGORIES_SUCCESS,
  GET_STUFF_BY_CATEGORY_SUCCESS,
  REFRESH_CONTENT
} from 'actions/types'

const INITIAL_STATE = {
  all: '',
  allStuff: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return { ...state, all: action.payload.data }
    case GET_STUFF_BY_CATEGORY_SUCCESS:
      return { ...state, allStuff: action.payload.data }
    case REFRESH_CONTENT:
      return { ...state, allStuff: '' }
    default:
      return state
  }
}
