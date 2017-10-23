import { Dimensions } from 'react-native'
import { GET_GEOCODER } from 'actions/types'

let { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0042
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const INITIAL_STATE = {
  address_line: '',
  address_city: '',
  address_state: '',
  address_latitude: '',
  address_longitude: '',
  mapData: {},
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GEOCODER:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
