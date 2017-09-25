import axios from 'axios'

axios.defaults.baseURL = 'http://alpha.rentuff.id/api'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Accept'] = 'application/json'

export const REFRESH_CONTENT = 'REFRESH_CONTENT'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const GET_GEOCODER = 'GET_GEOCODER'

export const SIGN_UP_UPDATE = 'SIGN_UP_UPDATE'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const EMAIL_AVAILABLE = 'EMAIL_AVAILABLE'
export const EMAIL_NOT_AVAILABLE = 'EMAIL_NOT_AVAILABLE'
export const LOG_IN_UPDATE = 'LOG_IN_UPDATE'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const EDIT_PROFILE_USER_UPDATE = 'EDIT_PROFILE_USER_UPDATE'
export const EDIT_PROFILE_USER_SUCCESS = 'EDIT_PROFILE_USER_SUCCESS'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_STUFF_BY_CATEGORY_SUCCESS = 'GET_STUFF_BY_CATEGORY_SUCCESS'

export const GET_RENTER_TRANSACTION_SUCCESS = 'GET_RENTER_TRANSACTION_SUCCESS'
export const GET_RENTER_TRANSACTION_FAIL = 'GET_RENTER_TRANSACTION_FAIL'

export const UPDATE_DATA_NEW_LENDING = 'UPDATE_DATA_NEW_LENDING'
