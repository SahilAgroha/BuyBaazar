import React from 'react'
import './ShopByCategory.css'
const ShopByCAtegoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
        <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-[#00927c]'>
            <img className='rounded-full group-hover:scale-95 transition-transform transition-transform-duration-700 object-top h-full w-full'
             src='https://imgs.search.brave.com/-u8-z2j7JioEDOxP-ClPPSq8b0E7iL3wb7Akt-f4m74/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9zZXJ2ZWQt/dGFibGUtaXRhbGlh/bi1mb29kLXNlYWZv/b2QtMjYwbnctMTY3/ODU5NDk0NS5qcGc' alt=''/>
        </div>
        <h1>Kitchan & Table</h1>
      
    </div>
  )
}

export default ShopByCAtegoryCard
