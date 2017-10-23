import { AsyncStorage } from 'react-native'
import { UPDATE_DISTANCE } from './types'

export const updateDistance = (value) => {
  AsyncStorage.setItem('valueSlider', value + '')
  return {
    type: UPDATE_DISTANCE,
    payload: value
  }
}
