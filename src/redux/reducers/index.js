import { combineReducers } from 'redux'
import { productReducer, productDetailReducer } from './productReducer'

const rootReducer = combineReducers({
  allProducts: productReducer,
  productDetail: productDetailReducer,
})

export default rootReducer
