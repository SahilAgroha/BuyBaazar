import React from 'react'
import ShopByCAtegoryCard from './ShopByCAtegoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex flex-wrap justify-between gap-7 lg:px-20'>
      {[1, 2, 3, 4, 5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((items) => <ShopByCAtegoryCard/>)}
    </div>
  )
}

export default ShopByCategory
