import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
  UPDATE_DATA_NEW_LENDING
} from 'actions/types'
import { Actions } from 'react-native-router-flux'

export const updateLendingData = ({ prop, value }) => {
  console.log({prop, value})
  return {
    type: UPDATE_DATA_NEW_LENDING,
    payload: { prop, value }
  }
}

export const createNewLending = (data) => {
  return () => {
    console.log(data)
  }
}

export const incrementStock = () => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT
    })
  }
}

export const decrementStock = () => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT
    })
  }
}
