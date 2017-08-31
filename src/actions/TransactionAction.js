import axios from 'axios'
import { AsyncStorage } from 'react-native'
import {
  GET_RENTER_TRANSACTION_SUCCESS,
  GET_RENTER_TRANSACTION_FAIL
} from 'actions/types'

export const getRenterTransaction = () => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get('/transaction/rents', {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(res => getRenterTransactionSuccess(dispatch, res))
          .catch(err => getRenterTransactionFail(dispatch, err.response))
      })
  }
}

const getRenterTransactionSuccess = (dispatch, renterTransaction) => {
  dispatch({
    type: GET_RENTER_TRANSACTION_SUCCESS,
    payload: renterTransaction
  })
}

const getRenterTransactionFail = (dispatch, error) => {
  dispatch({
    type: GET_RENTER_TRANSACTION_FAIL,
    payload: error
  })
}
