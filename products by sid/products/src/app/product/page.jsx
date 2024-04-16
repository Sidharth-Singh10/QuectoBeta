
import React from 'react'
import Intro from '../components/INTRO/Intro'
import Header from '../components/HEADER/Header'
import Filter from '../components/filter/Filter'
import ProductRow from '../components/ProductRow/ProductRow'
import ProductRow2 from '../components/ProductRow/ProductRow2'
import Footer from '../components/footer/Footer'

const product = () => {
  

  
  return (
    <div>
            <Header/>
            <Intro/>

            <div className='flex flex-col items-center justify-center w-full'>

              <div className='w-5/6 mt-5'>
                <Filter/>
               
              </div>
              
              <div className='w-5/6 h-full mt-5  '>
               <ProductRow/>
              </div>
              <div className='w-5/6 text-2xl font-bold mt-3 text-black '>
                YOU MIGHT ALSO LIKE
              </div>

              <div className='w-5/6 h-full mt-5  '>
               <ProductRow2/>
              </div>

              <div className='w-full'>
                <Footer/>
              </div>


            </div>

    </div>
    

  )
}

export default product