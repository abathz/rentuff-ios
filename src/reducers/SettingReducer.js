import { AsyncStorage } from 'react-native'
import { UPDATE_DISTANCE } from 'actions/types'

const INITIAL_STATE = {
  count: 0
}

AsyncStorage.getItem('valueSlider')
  .then(count => {
    INITIAL_STATE.count += 0 + count * 1
  })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DISTANCE:
      return { ...state, count: action.payload }
    default:
      return state
  }
}
