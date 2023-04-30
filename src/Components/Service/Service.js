import React, { useState ,useContext} from 'react'
import { ContextData } from "../ContextData/ContextData";

function Service() {
  const contextData = useContext(ContextData)
  return (
    <div className='flex w-full p-5 justify-evenly mt-10 items-center'>
        {contextData.services.map((item)=>(
            <div className='flex flex-col justify-center items-center'>
                <img className='w-10' src={item.img} alt="" />
                <p className='text-slate-500 mt-3 text-[12px] text-center'>{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Service