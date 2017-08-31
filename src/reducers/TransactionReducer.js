import {
  GET_RENTER_TRANSACTION_SUCCESS,
  GET_RENTER_TRANSACTION_FAIL
} from 'actions/types'

const INITIAL_STATE = {
  renter: '',
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RENTER_TRANSACTION_SUCCESS:
      return { ...state, renter: action.payload.data }
    case GET_RENTER_TRANSACTION_FAIL:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
