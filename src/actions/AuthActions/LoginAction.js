import axios from 'axios'
import qs from 'qs'
import {
  LOG_IN_UPDATE,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL
} from 'actions/types'
import { Actions } from 'react-native-router-flux'

export const loginUserUpdate = ({ prop, value }) => {
  return {
    type: LOG_IN_UPDATE,
    payload: { prop, value }
  }
}

export const loginUser = (data) => {
  return (dispatch) => {
    axios.post('/login', qs.stringify(data))
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => loginUserFail(dispatch, error))
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOG_IN_SUCCESS,
    payload: user
  })

  Actions.tabbar()
}

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOG_IN_FAIL,
    payload: error.response
  })
}
