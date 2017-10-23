import {
  GET_GEOCODER,
  UPDATE_DATA_NEW_LENDING
} from 'actions/types'

const INITAL_STATE = {
  account_name: '',
  account_number: '',
  price: '',
  additional_price: '',
  price_by: 1,
  require_id: 0,
  additional_terms: '',
  id_bank: '',
  description: '',
  mapData: {},
  requirement_1: 0,
  requirement_2: 0,
  requirement_3: 0,
  delivery_method_1: 0,
  delivery_method_3: 0,
  delivery_price: '',
  delivery_price_far: ''
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA_NEW_LENDING:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
