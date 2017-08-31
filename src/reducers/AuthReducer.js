import { AsyncStorage } from 'react-native'
import { REHYDRATE } from 'redux-persist/constants'
import {
  SIGN_UP_UPDATE,
  SIGN_UP_SUCCESS,
  EMAIL_NOT_AVAILABLE,
  LOG_IN_UPDATE,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL
} from 'actions/types'

const signup = {
  firstName: '',
  lastName: '',
  birth_date: '',
  email: '',
  phone: '',
  verificationCode: '',
  password: '',
  passwordConfirm: '',
  date: ''
}

const login = {
  emailLogin: '',
  passwordLogin: ''
}

const INITIAL_STATE = {
  ...signup,
  ...login,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case SIGN_UP_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.data }
    case EMAIL_NOT_AVAILABLE:
      return { ...state, error: action.payload.data }
    case LOG_IN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case LOG_IN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.data }
    case LOG_IN_FAIL:
      return { ...state, error: action.payload.data, email: action.payload.data.email, password: action.payload.data.password }
    default:
      return state
  }
}
