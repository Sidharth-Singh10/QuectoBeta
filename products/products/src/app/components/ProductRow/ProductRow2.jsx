import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductRow2 = () => {
  return (
    <div className='w-full flex justify-around'>
        <ProductCard imgsrc='/fruits/banana.png' proname='banana'/>
        <ProductCard imgsrc='/fruits/grapes.png' proname='grapes'/>
        <ProductCard imgsrc='/fruits/lemon.png' proname='lemon'/>
        <ProductCard imgsrc='/fruits/mandarines.png' proname='mandarines'/>
        <ProductCard imgsrc='/fruits/mango.png' proname='mango'/>
        <ProductCard imgsrc='/fruits/muskmelon.png' proname='muskmelon'/>
    </div>
  )
}

export default ProductRow2