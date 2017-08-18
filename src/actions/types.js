import axios from 'axios'

axios.defaults.baseURL = 'http://alpha.rentuff.id/api'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Accept'] = 'application/json'

export const SIGN_UP_UPDATE = 'SIGN_UP_UPDATE'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const EMAIL_AVAILABLE = 'EMAIL_AVAILABLE'
export const EMAIL_NOT_AVAILABLE = 'EMAIL_NOT_AVAILABLE'
export const LOG_IN_UPDATE = 'LOG_IN_UPDATE'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
