import axios from 'axios'
import qs from 'qs'
import {
  SIGN_UP_UPDATE,
  SIGN_UP_SUCCESS,
  EMAIL_NOT_AVAILABLE
} from 'actions/types'
import { Actions } from 'react-native-router-flux'

export const signUpUserUpdate = ({ prop, value }) => {
  return {
    type: SIGN_UP_UPDATE,
    payload: { prop, value }
  }
}

export const signUpUser = (data) => {
  return (dispatch) => {
    axios.post('/signUp', qs.stringify(data))
      .then(user => signUpUserSuccess(dispatch, user))
  }
}

export const checkEmail = ({ email }) => {
  return (dispatch) => {
    axios.post('/checkEmail', qs.stringify({ email }))
      .then(() => Actions.userSignUpFourth())
      .catch(err => emailNotAvailable(dispatch, err))
  }
}

export const generateVerificationCode = ({ phone }) => {
  return () => {
    axios.post('/phone/generate', qs.stringify({ phone }))
      .then(() => Actions.userSignUpFifth())
  }
}

export const verifyVerificationCode = ({ phone, verification_code }) => {
  return () => {
    axios.post('/phone/verify',
      qs.stringify({
        phone,
        verification_code
      })
    )
      .then(() => Actions.userSignUpSixth())
  }
}

export const resendVerificationCode = ({ phone }) => {
  console.log({ phone })
  return () => {
    axios.post('/phone/resend', qs.stringify({ phone }))
  }
}

const signUpUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGN_UP_SUCCESS,
    payload: user
  })

  Actions.tabbar()
}

const emailNotAvailable = (dispatch, err) => {
  dispatch({
    type: EMAIL_NOT_AVAILABLE,
    payload: err.response
  })
}
