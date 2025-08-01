import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col gap-20 lg:flex-row'>
        <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
            <img src='https://sareesbazaar.in/cdn/shop/files/SB61_2974_30011D_983fb243-ec36-4154-b60f-89b90781c23d_500x.jpg?v=1749814414' alt=''/>
            <div>
                <div>
                    <p className="font-bold text-xl">Sheoran Clothing</p>
                    <p className='text-lg text-gray-600'>Men's White shirt</p>
                </div>
                <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-sans text-gray-800">
              ₹ 400
            </span>
            <span className="line-through text-gray-400  ">
              ₹ 999
            </span>
            <span className="text-[#00927c] font-semibold">
              60% off
            </span>
          </div>
          </div>
            </div>
        </section>
        <section className='space-y-5 w-full'>
          {[1,1,1,1,1].map((item,index)=><div className="space-y-3"><ReviewCard key={index}/>
          <Divider/></div>)}
        </section>
      
      
    </div>
  )
}

export default Review
