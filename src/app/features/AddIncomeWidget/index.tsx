'use client'

import React, { FormEvent, useState } from 'react'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


import { ChevronsUpDown, Check } from 'lucide-react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover'

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'




export default function AddIncomeWidget() {
  const [open, setOpen] = useState<boolean>(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [income, setIncome] = useState<number>(0)
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    console.log(e.target)
    console.log('income', income)
    console.log('value', value)
    setOpen(false)

    setValue('')
    setIncome(0)
  }

  const handleOpenChange = (isOpen: boolean) => {
      setValue('')
      setIncome(0)
      setOpen(isOpen)
      
  }

  type categories = {
    value: string;
    label: string;
  }

  const categories: categories[]  = 
  [
    {
      value: 'salary',
      label: 'Salary'
    },
    {
      value: 'crypto',
      label: 'Crypto'
    },
    {
      value: 'business',
      label: 'Business'
    }
]

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add Income</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className='flex flex-col w-full my-2 gap-2'>
              <Input 
                className='w-full' 
                name='income' 
                type='number' 
                min={0} 
                placeholder='0'
                value={income}
                onChange={(e : any) => setIncome(e.target.value)}
              />
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={popoverOpen}
                    className="w-full justify-between"
                  >
                    {value
                      ? categories.find((category) => category.value === value)?.label
                      : "Select Category..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search category..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No category found.</CommandEmpty>
                      <CommandGroup>
                        {categories.map((category) => (
                          <CommandItem
                            key={category.value}
                            value={category.value}
                            onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setPopoverOpen(false)
                            }}
                          >
                            {category.label}
                            <Check
                              name='category'
                              className={cn(
                                "ml-auto",
                                value === category.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <DialogFooter>
              <Button type='submit'>Submit</Button>
              <DialogClose asChild>
                <Button type='button'>Cancel</Button>  
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Button variant='default'
              className='w-fit self-end cursor-pointer' 
              onClick={() => setOpen(true)}>
              Add
      </Button>
    </>
  )
}
