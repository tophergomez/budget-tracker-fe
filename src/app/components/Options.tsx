import { Button } from '@/components/ui/button'
import React, { JSX, useState } from 'react'
import AccordionUi from './AccordionUi';
import AlertUi from './AlertUi';
import { AlertDialog } from '@/components/ui/alert-dialog';
import AlertDialogUi from './AlertDialogUi';
import { ArrowRight } from 'lucide-react';

 type OptionProps = {
    setComponents: React.Dispatch<React.SetStateAction<JSX.Element[] | string[]>>
}

function Options({setComponents} : OptionProps) {
   
    const displayComponent = (componentName: string) => {
    let component;
     switch (componentName) {
      case 'Accordion':
        component = setComponents([<AccordionUi />]) 
        break;
      case 'Alert':
        component = setComponents([
        <AlertUi type="default" title="Alert Title" description="This is an alert description" 
                 button={<Button variant="ghost">Button 
                        <ArrowRight className='text-[#302100] hover:text-[#EDE8DD]'/>
                        </Button>}/>,
        <AlertUi type="destructive" title="Alert Title" description="This is an alert description" button={<Button variant="outline" color="black">Button</Button>}/>
        ])
        break;
      case 'Alert Dialog':
        component = setComponents([<AlertDialogUi />])
        break;
      case 'Badge':
        component = setComponents(['Alert Dialog Bitch!'])
        break;
      default:
        break;
    }
    return component
  }
  return (
        <div className="flex flex-col border-2 border-slate col-span-1 gap-2 p-5 max-h-screen overflow-y-scroll">
            <Button onClick={() => displayComponent('Accordion')} variant="outline">Accordion</Button>
            <Button onClick={() => displayComponent('Alert')} variant="outline">Alert</Button>
            <Button onClick={() => displayComponent('Alert Dialog')} variant="outline">Alert Dialog</Button>
            <Button onClick={() => displayComponent('Badge')} variant="outline">Badge</Button>
            <Button onClick={() => displayComponent('Banners')} variant="outline">Banners</Button>
            <Button onClick={() => displayComponent('Button')} variant="outline">Button</Button>
            <Button onClick={() => displayComponent('Cards')} variant="outline">Cards</Button>
            <Button onClick={() => displayComponent('Checkbox')} variant="outline">Checkbox</Button>
            <Button onClick={() => displayComponent('Combobox')} variant="outline">Combobox</Button>
            <Button onClick={() => displayComponent('Dropdown Menu')} variant="outline">Dropdown Menu</Button>
            <Button onClick={() => displayComponent('Filter')} variant="outline">Filter</Button>
            <Button onClick={() => displayComponent('Form')} variant="outline">Form</Button>
            <Button onClick={() => displayComponent('Input')} variant="outline">Input</Button>
            <Button onClick={() => displayComponent('Links')} variant="outline">Links</Button>
            <Button onClick={() => displayComponent('List')} variant="outline">List</Button>
            <Button onClick={() => displayComponent('Pagination')} variant="outline">Pagination</Button>
            <Button onClick={() => displayComponent('Pin')} variant="outline">Pin</Button>
            <Button onClick={() => displayComponent('Progress')} variant="outline">Progress</Button>
            <Button onClick={() => displayComponent('Radio Group')} variant="outline">Radio Group</Button>
            <Button onClick={() => displayComponent('Review')} variant="outline">Review</Button>
            <Button onClick={() => displayComponent('Slider')} variant="outline">Slider</Button>
            <Button onClick={() => displayComponent('Summary Bar')} variant="outline">Summary Bar</Button>
            <Button onClick={() => displayComponent('Switch')} variant="outline">Switch</Button>
            <Button onClick={() => displayComponent('Toast Popups')} variant="outline">Toast Popups</Button>
            <Button onClick={() => displayComponent('Tabs')} variant="outline">Tabs</Button>
            <Button onClick={() => displayComponent('Text Lockup')} variant="outline">Text Lockup</Button>
            <Button onClick={() => displayComponent('Timeline')} variant="outline">Timeline</Button>
            <Button onClick={() => displayComponent('Toggle')} variant="outline">Toggle</Button>
            <Button onClick={() => displayComponent('Tooltip')} variant="outline">Tooltip</Button>
        </div>
  )
}

export default Options