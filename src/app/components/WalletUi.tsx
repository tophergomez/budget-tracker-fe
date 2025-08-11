import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
import { formatAsset, formatDate,  } from '@/helpers/formatters';
import { Button } from '@/components/ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';

export type wallet = {
    icon: any;
    name: string;
    assets: number;
    updated_at: string;
    backgroundColor?: string
}

function WalletUi({icon, name, assets, updated_at, backgroundColor}: wallet) {
  return (
    <Card className={`${backgroundColor} grid grid-cols-1 grid-rows-4 row-span-3 col-span-1 mt-10 p-4`}>
        <div className='flex flex-row justify-center w-full h-3 gap-4 row-span-1 col-span-1'>
            <Avatar><Image src={icon} alt="" /></Avatar>
            <p className='font-bold text-2xl justify-self-end'>{name}</p>
        </div>
        <div className="row-span-1 col-span-1">
            <p className='font-semibold text-md text-center'>Assets: {formatAsset(assets)}</p>
        </div>
        <div className="row-span-1 col-span-1 text-center">
            <Button variant="outline" className='cursor-pointer'>Add <SquareArrowOutUpRight /></Button>
        </div>
        <div className='row-span-1 col-sp an-1'>
            {/* <p className='font-bold text-sm text-center'>Updated at: {formatDate(updated_at)}</p> */}
        </div>
    </Card>
  )
}

export default WalletUi

