import React from 'react'
import HomeCategoryTableTable from './HomeCategoryTable'
import { useAppSelector } from '../../../State/Store'

const GridTable = () => {
  const {customer}=useAppSelector(store=>store)
  return (
    <div>
      <HomeCategoryTableTable data={customer.homePageData?.grid || []}/>
    </div>
  )
}

export default GridTable
