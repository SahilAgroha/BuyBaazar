import React from 'react'
import SellerDrawerList from '../../components/SellerDrawerList/SellerDrawerList'

const SellerDashboard = () => {
  const toggleDrawer=()=>{

  }
  return (
    <div>
      <div className="lg:flex lg:h[90vh]">
        <section className="0 lg:block h-full">
            <SellerDrawerList toggleDrawer={toggleDrawer}/>
        </section>
        <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
            Seller routes
        </section>
      </div>
    </div>
  )
}

export default SellerDashboard
