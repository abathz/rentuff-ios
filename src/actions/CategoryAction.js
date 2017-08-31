import axios from 'axios'
import { AsyncStorage } from 'react-native'
import {
  GET_CATEGORIES_SUCCESS,
  GET_STUFF_BY_CATEGORY_SUCCESS,
  REFRESH_CONTENT
} from 'actions/types'

export const getListCategory = () => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get('/category', {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(categories => getCategoriesSuccess(dispatch, categories))
          .catch(err => console.log(err.response))
      })
  }
}

export const getStuffByCategory = (id) => {
  return (dispatch) => {
    AsyncStorage.getItem('api')
      .then(value => {
        axios.get(`/stuffs/category/${id}`, {
          headers: {
            'Authorization': `Bearer ${value}`
          }
        })
          .then(res => getStuffByCategorySuccess(dispatch, res))
          .catch(err => console.log(err.reponse))
      })
  }
}

export const refreshContent = () => {
  return {
    type: REFRESH_CONTENT
  }
}

const getCategoriesSuccess = (dispatch, categories) => {
  dispatch({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories
  })
}

const getStuffByCategorySuccess = (dispatch, stuff) => {
  dispatch({
    type: GET_STUFF_BY_CATEGORY_SUCCESS,
    payload: stuff
  })
}
