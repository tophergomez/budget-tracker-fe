'use client'

import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import React, { useReducer } from 'react'
import { ChartUi } from '../components/ChartUi'
import maya  from '@/assets/images/maya.png'
import gcash  from '@/assets/images/gcash.png'
import seabank  from '@/assets/images/seabank.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import WalletUi from '../components/WalletUi'
import { wallet } from '../components/WalletUi'

const wallets: wallet[] = [
  {
    icon: maya,
    name: 'Maya',
    assets: 300000000,
    updated_at: '2025-08-11',
    backgroundColor: 'bg-green-100'
  },
  {
    icon: seabank,
    name: 'SeaBank',
    assets: 300000000,
    updated_at: '2025-08-11',
    backgroundColor: 'bg-orange-100'
  },
  {
    icon: gcash,
    name: 'Gcash',
    assets: 500000000,
    updated_at: '2025-08-11',
    backgroundColor: 'bg-blue-100'
  }
]

function index() {
  return (
    <div className='bg-slate-400 grid grid-cols-4 grid-rows-4 w-full h-screen gap-4 p-4'>
      <Card className='row-span-4 col-span-1'>
      </Card>
      <Card className="relative grid grid-cols-3 grid-rows-3 row-span-2 col-span-3 gap-4 p-6">
        <header className="absolute col-span-3 h-[30px] top-0 left-0 mt-5 ms-5 font-bold">Wallets</header>
        {wallets.map((wallet, key) => (
          <WalletUi key={key} 
                    icon={wallet.icon} 
                    name={wallet.name} 
                    assets={wallet.assets} 
                    updated_at={wallet.updated_at} 
                    backgroundColor={wallet.backgroundColor}
          />
        ))}
      </Card>
      <Card className='relative row-span-2 col-span-2'>
        <ChartUi></ChartUi>
      </Card>
      <Card className='row-span-2 col-span-1'>
        
      </Card>
    </div>
    
    
  )
}

export default index