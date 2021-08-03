import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions'

const ProductDetails = () => {
  const productData = useSelector(state => state.productDetail)
  console.log('product detail ka data ye aya', productData)
  const dispatch = useDispatch()
  const { productId } = useParams()
  console.log('parama ye raha', productId)

  const productDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(error => {
        console.log('individual product details', error)
      })
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') productDetail()

    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <>
      {Object.keys(productData).length === 0 ? (
        <h1 className="mt-5" style={{ margin: '0 auto' }}>
          Loading...
        </h1>
      ) : (
        <div
          className="card mb-3 mt-5 p-5"
          style={{ maxWidth: '840px', margin: '0 auto' }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={productData.image}
                className="img-fluid rounded-start"
                alt={productData.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">{productData.description}</p>
                <p className="card-text">
                  <small className="text-muted">{productData.price}</small>
                </p>
                <p className="card-text">{productData.category}</p>
                <Link to="/" className="btn btn-danger">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails
