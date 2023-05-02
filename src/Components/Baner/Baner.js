import React, { useContext } from 'react'
import { ContextData } from '../ContextData/ContextData'
function Baner() {
  const contextData = useContext(ContextData)
  return (
    <div className='flex md:flex-row justify-between mb-10'>
        {contextData.baners.map(baner=>(
          <img src={baner.img} alt="" />
        ))}
    </div>
  )
}
export default Baner