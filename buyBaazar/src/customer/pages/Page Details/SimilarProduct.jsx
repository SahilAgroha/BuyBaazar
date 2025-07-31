import React from 'react'
import SimilarProudctCard from './SimilarProudctCard'

const SimilarProduct = () => {
  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-5 justify-between gap-4 gap-y-8'>
      {[1, 1, 1, 1, 1, 1].map((item, index) => (<SimilarProudctCard/>))}
    </div>
  )
}

export default SimilarProduct
