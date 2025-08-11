import { AlertDialogHeader, AlertDialogFooter } from '@/components/ui/alert-dialog'
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
import React from 'react'
import { Button } from '@/components/ui/button'

function AlertDialogUi() {
  return (
     <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='border border-[#39201B] p-2'>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='bg-[#39201B] text-[#EDE8DD]'>Cancel</AlertDialogCancel>
          <Button variant="outline" className='bg-[#] text-[#39201B40]'>Continue</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogUi