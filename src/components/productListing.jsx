import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProductComponent from './productComponent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = ({ productList }) => {
  const dispatch = useDispatch()

  const fetchProudct = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => {
        console.log('error', error)
      })
    dispatch(setProducts(response.data))
    console.log('ye hai api ka data', response.data)
  }

  useEffect(() => {
    fetchProudct()
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
    // <div className="ui grid container">
    //   <ProductComponent />
    // </div>
  )
}

const mapStateToProps = state => {
  return {
    productList: state.allProducts.products,
  }
}

export default connect(mapStateToProps)(ProductListing)
