import React from 'react'
import { notFound } from 'next/navigation'
const productDetails = ({params}) => {
    if(params.productId >=1000){
        notFound();
    }
  return (

    <div>
      <h1> Details about product {params.productId}</h1>
    </div>
  )
}

export default productDetails
