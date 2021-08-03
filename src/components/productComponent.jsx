import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = ({ productList }) => {
  const productData = productList.map(product => {
    const { id, title, image, price, category } = product
    return (
      <div className="col-3" key={id}>
        <Link to={`product/${id}`} style={{ textDecoration: 'none' }}>
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              height="250px"
              width="250px"
              alt={title}
            />
            <div className="card-body">
              <h6 className="card-title mb-2">{title}</h6>
              <h6 class="card-subtitle mb-2 text-muted">$ {price}</h6>
              <p className="card-text">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  })
  return <>{productData}</>
}

const mapStateToProps = state => {
  return {
    productList: state.allProducts.products,
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     updateProducts: ()=>dispactch()
//   }
// }

export default connect(mapStateToProps)(ProductComponent)
