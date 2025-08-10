import React from 'react'
import { Card } from '@/components/ui/card'
import AddIncomeWidget from '@/app/features/AddIncomeWidget/index'
function page() {
  return (
    <div className='grid sm:grid-cols-1 sm:grid-rows-[600px_400px_300px_200px] md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 w-[100%] h-screen p-4 gap-4'>
        <Card id="ProfileWidget" className='md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-2 drop-shadow-lg p-4'>
            
        </Card>
        <Card id="NetWorthWidget" className='md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1 drop-shadow-lg p-4 flex flex-col justify-center items-center'>
            
        </Card>
        <Card id="ExpenseWidget" className='md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 drop-shadow-lg p-4'>
          
        </Card>
        <Card id="WalletsWidget" className='md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1 drop-shadow-lg p-4'>
          <AddIncomeWidget />  
        </Card>
    </div>
  )
}

export default page