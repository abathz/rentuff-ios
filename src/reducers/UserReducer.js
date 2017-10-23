import {
  GET_USER_SUCCESS,
  EDIT_PROFILE_USER_UPDATE,
  EDIT_PROFILE_USER_SUCCESS,
  GET_ACCOUNT_BANK_USER
} from 'actions/types'

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
  email: '',
  about_me: '',
  id_facebook: '',
  id_twitter: '',
  id_instagram: '',
  birth_date: '',
  phone: '',
  review_renter: 0,
  review_lender: 0,
  newPhone: '',
  verficationCode: '',
  listBank: '',
  idBank: '',
  accountName: '',
  accountNumber: '',
  password: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        first_name: action.payload.data.profile.first_name,
        last_name: action.payload.data.profile.last_name,
        email: action.payload.data.profile.email,
        about_me: action.payload.data.profile.about_me,
        id_facebook: action.payload.data.profile.id_facebook,
        id_twitter: action.payload.data.profile.id_twitter,
        id_instagram: action.payload.data.profile.id_instagram,
        birth_date: action.payload.data.profile.birth_date,
        phone: action.payload.data.profile.phone,
        review_renter: action.payload.data.profile.review_renter,
        review_lender: action.payload.data.profile.review_lender
      }
    case EDIT_PROFILE_USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case EDIT_PROFILE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case GET_ACCOUNT_BANK_USER:
      return {
        ...state,
        listBank: action.payload.data.bank_list,
        idBank: action.payload.data.account.id_bank,
        accountName: action.payload.data.account.account_name,
        accountNumber: action.payload.data.account.account_number,
        password: ''
      }
    default:
      return state
  }
}
