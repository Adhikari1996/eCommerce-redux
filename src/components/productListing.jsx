import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProductComponent from './productComponent'
import { useDispatch } from 'react-redux'
import { fetchProductAction } from '../redux/actions/productActions'

const ProductListing = ({ productList }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductAction())
  }, [])
  return (
    <div className="container">
      <div className="row">
        {Object.keys(productList).length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <ProductComponent />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    productList: state.allProducts.products,
  }
}

export default connect(mapStateToProps)(ProductListing)
