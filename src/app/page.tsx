'use client'

import { JSX, useState } from "react";
import React from "react";
import Options from "./components/Options";

export default function index() {
  const [components, setComponents] = useState<JSX.Element[] | string[]>([])
  
  
  return (
    <div className="grid grid-cols-5 w-[100%] h-[100vh] items-start gap-1 justify-items-start min-h-screen">
      <Options 
        setComponents={setComponents}>
      </Options>
      <div className="grid place-items-start col-span-2 w-full p-5 gap-2">
         {components.map((component, index) => (
          <React.Fragment key={index}>{component}</React.Fragment> 
         ))}
      </div>
    </div>
  );
}
