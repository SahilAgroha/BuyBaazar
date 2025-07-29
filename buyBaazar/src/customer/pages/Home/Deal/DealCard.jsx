import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
      <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top1' 
      src='https://imgs.search.brave.com/viYVLcbESzNilGIquTipbdrTu4syFXBj7lOlBWkcDB8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aW1l/eC5jb20vY2RuL3No/b3AvZmlsZXMvODk4/MF9UWF9UQzI1X2Nh/dGVnb3J5X2Nhcm91/c2VsX1RXMlkxMjEw/MC5qcGc_dj0xNzUw/MzE5NDk0JndpZHRo/PTc2OA' alt=''/>
      <div  className='border-4 border-black bg-black text-white p-2 text-center'>
        <p className='text-lg font-semibold'>Smart Watch</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">Shop now</p>
      </div>
      
    </div>
  )
}

export default DealCard
