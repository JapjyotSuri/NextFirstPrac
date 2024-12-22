import React from 'react'

const reviewDetail = ({params}) => {
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  )
}

export default reviewDetail
