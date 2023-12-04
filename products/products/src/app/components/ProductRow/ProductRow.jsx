

import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductRow = ({onAddToCart}) => {
    
    
  return (
    <div className='w-full flex justify-around'>
        <ProductCard  imgsrc='/fruits/fruit1.png' proname=' red apple'/>
        <ProductCard  imgsrc='/fruits/fruit2.png' proname='pomogranate'/>
        <ProductCard  imgsrc='/fruits/fruit3.png' proname='cherry'/>
        <ProductCard  imgsrc='/fruits/fruit4.png' proname='strawberry'/>
        <ProductCard  imgsrc='/fruits/fruit5.png' proname='watermelon'/>
        <ProductCard  imgsrc='/fruits/fruit6.png' proname='raspbery'/>
    </div>
  )
}

export default ProductRow