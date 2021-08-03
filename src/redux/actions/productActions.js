import { actionTypes } from '../constants/actionTypes'
import eComApi from '../../api/eComApi'

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = product => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  }
}

export const fetchProductAction = () => {
  return async dispatch => {
    const response = await eComApi.get('/products')
    console.log('data fetch hua productListing ka ok', response.data)
    dispatch(setProducts(response.data))
  }
}

export const fetchSelectData = id => {
  return async dispatch => {
    const response = await eComApi.get(`/products/${id}`)
    console.log('single product aaya', response.data)
    dispatch(selectedProduct(response.data))
  }
}
