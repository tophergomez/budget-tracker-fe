import React, { JSX } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CircleAlert, Terminal } from 'lucide-react'

type alertType = "default" | "destructive"

interface AlertProps {
    type: alertType;
    title: string;
    description: string;
    button?: JSX.Element
}

const alertIcons: Record<alertType, JSX.Element> = {
  default: <Terminal className="h-5 w-5 text-blue-500" />,
  destructive: <CircleAlert className="h-5 w-5 text-red-500" />,
}

export const AlertUi: React.FC<AlertProps> = ({
  type,
  title,
  description,
  button
}) => {
  return (
    <Alert variant={type} className='flex flex-col'>
      <div className='flex flex-row justify-between items-center w-[100%] gap-2'>
        <div className='flex flex-row gap-2 px-2'>
            {alertIcons[type]}
            <AlertTitle>{title}</AlertTitle>
        </div>
        {button}
      </div>
      
      
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertUi