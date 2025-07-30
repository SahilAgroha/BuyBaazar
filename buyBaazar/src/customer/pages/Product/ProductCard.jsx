import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Favorite, ModeComment } from '@mui/icons-material';
import { Button } from '@mui/material';


const images=["https://imgs.search.brave.com/r4Vq53qphSnLh2r9Q-gDKwSRgWqdsjj5srxAUqCFVpc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xMTc3/MTI0Njk2LjE4MDUv/c3NyY28sb3ZlcnNp/emVfdGVlLG1lbnMs/MDAwMDAwOjQ0ZjBi/NzM0YTUsZnJvbnQs/cHJvZHVjdF9zcXVh/cmUseDYwMC51MS5q/cGc",
  "https://imgs.search.brave.com/KgI2fjxc8PjS8H6W9ro5ir_ZmD8EQOaMiQbvbVWKIhI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41MzQ2/MTE1NTY4LjAxMDkv/c3NyY28sb3ZlcnNp/emVfdGVlLG1lbnMs/MDAwMDAwOjQ0ZjBi/NzM0YTUsZnJvbnQs/cHJvZHVjdF9zcXVh/cmUseDYwMC5qcGc",
  "https://imgs.search.brave.com/INhFi9Hu2IYrdlGQgaWAzj3K9Ja1PMMU_7UkM1bD5Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41NDY2/NTE0OTcuNTA0OC9z/c3JjbyxvdmVyc2l6/ZV90ZWUsbWVucyww/MDAwMDA6NDRmMGI3/MzRhNSxmcm9udCxw/cm9kdWN0X3NxdWFy/ZSx4NjAwLmpwZw"
]
const ProductCard = () => {
  const [currentImage,setCurrentImage]=useState(0);
  const [isHovered,setIsHovered]=useState(false);

  useEffect(()=>{
    let interval
    if(isHovered){
      interval=setInterval(()=>{
        setCurrentImage((prevImage)=>(prevImage+1)%images.length);
      },1000);
    }
    else if(interval){
      clearInterval(interval);
      interval=null;
    }
    return ()=>clearInterval(interval);
  },[isHovered]);

  return (
    <>
      <div className="group px-4 relative">
        <div className="card"
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}>
          {
            images.map((item,index)=><img
            className='card-media object-top' 
            src={item} alt=''
            style={{transform:`translateX(${(index-currentImage)*100}%)`}}/>)
          }
          { isHovered &&
            <div className='indicator flex flex-col items-center space-y-2'>
              <div className='flex gap-3'>
                <Button varient='contained' sx={{backgroundColor: '#EAF0F1','&:hover': {backgroundColor: '#D0D7D9'},}}>
                  <Favorite sx={{color:"teal"}}/>
                </Button>
                <Button varient='contained' sx={{backgroundColor: '#EAF0F1','&:hover': {backgroundColor: '#D0D7D9'},}}>
                  <ModeComment sx={{color:"teal"}}/>
                </Button>

              </div>
            </div>
          }
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Niky</h1>
            <p>Black T-Shirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">
              ₹ 400
            </span>
            <span className="thin-line-through text-gray-400  ">
              ₹ 999
            </span>
            <span className="text-[#00927c] font-semibold">
              60% off
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductCard
