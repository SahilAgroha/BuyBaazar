import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Star, Wallet, WorkspacePremium } from '@mui/icons-material'
import { Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../State/customer/ProductSlice';

const ProductDetails = () => {
  const [quality,setQuality]=React.useState(1);
  const dispatch=useAppDispatch();
  const {productId}=useParams()
  const {product}=useAppSelector(store=>store);
  const [activeImage,setActiveImage]=useState(0);


  useEffect(()=>{
    dispatch(fetchProductById(Number(productId)))
  },[productId])

  const handleActiveImage=(value)=>()=>{
    setActiveImage(value)
  }
  
  return (
    <div className='px-5 lg:px-20 pt-10'>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images.map((item,index)=><img onClick={handleActiveImage(index)}
             className='lg:w-full w-[50px] cursor-pointer rounded-md' src={item}/>)}

          </div>
          <div className="w-full lg:w-[85%]">
            <img className='w-full rounded-md' src={product.product?.images[activeImage]}
             alt=''/>
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-[#00927c]">{product.product?.seller?.businessDetails.businessName}</h1>
          <p className="text-gray-500 font-semibold">{product.product?.title}</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <Star sx={{color:"teal",fontSize:"17px"}}/>
            </div>
            <Divider orientation='vertical' flexItem/>
            <span>
              234 Rating
            </span>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-sans text-gray-800">
              ₹{product.product?.sellingPrice}
            </span>
            <span className="line-through text-gray-400  ">
              ₹{product.product?.mrpPrice}
            </span>
            <span className="text-[#00927c] font-semibold">
              {product.product?.discountPercent}%
            </span>
          </div>
          <p className='text-sm'>Inclusive of all taxes. Free Shipping above ₹1500</p>
          </div>

          <div className='mt-5 space-y-3'>
            <div className='flex items-center gap-4'>
              <Shield sx={{color:"teal"}}/>
              <p>Authentic & Quality Assured </p>
            </div>

            <div className='flex items-center gap-4'>
              <WorkspacePremium sx={{color:"teal"}}/>
              <p>100% money back guarantee</p>
            </div>

            <div className='flex items-center gap-4'>
              <LocalShipping sx={{color:"teal"}}/>
              <p>Free Shipping & Returns</p>
            </div>

            <div className='flex items-center gap-4'>
              <Wallet sx={{color:"teal"}}/>
              <p>Pay on delivery might be available</p>
            </div>

          </div>

          <div className='mt-7 space-y-2'>
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button disabled={quality==1} onClick={()=>setQuality(quality-1)}>
                <Remove/>
              </Button>
              <span>{quality}</span>
              <Button onClick={()=>setQuality(quality+1)}>
                <Add/>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button fullWidth variant='contained' startIcon={<AddShoppingCart/>} sx={{py:"1rem"}}>
              Add To Bag
            </Button>
            <Button fullWidth variant='outlined' startIcon={<FavoriteBorder/>} sx={{py:"1rem"}}>
              Wishlist
            </Button>
          </div>

          <div className='mt-5'>
            <p>{product.product?.description}</p>
          </div>

          <div className='mt-12 space-y-5'>
            <ReviewCard/>
            <Divider/>
          </div>

        </section>

      </div>

      <div className='mt-20'>
        <h1 className='text-lg font-bold'>Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct/>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails
