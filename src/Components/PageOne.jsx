import React, { useRef, useState } from 'react'

export default function PageOne() {

  const [userValue, setUserValue] = useState();


  return (
    <div className='flex flex-col h-full p-5 space-y-3'>
      <h2 id='kir2' className='py-1 bg-[rgba(255,255,255,0.7)] rounded-md text-center text-4xl flex items-center justify-center font-semibold text-green'>WELCOME TO <span className='p-2 bg-pink mx-4 rounded-md text-xl'><i id='kir' className='font-bold text-lightPink'>Fight <span>Club</span></i></span></h2>
      <p className='text-[gray] font-medium text-lg'>No one will judge you here!<i className='block text-end font-semibold text-blue text-xl'>'Tyler Durden'</i></p>
      <div className='relative space-y-4 h-full flex flex-col justify-evenly'>
        <input
        onChange={(e) => {
          setUserValue(e.target.value)
        }} 
        value={userValue} 
        className='text-center w-1/4 placeholder-gray-500 text-blue text-lg font-medium p-2 transition-all rounded-md border-2 focus:border-lightPink outline-none' 
        type="text" 
        placeholder='UserName'
        />
        <input 
        className='text-center w-1/2 placeholder-gray-500 text-blue text-lg font-medium p-3 transition-all rounded-md border-2 focus:border-lightPink outline-none' 
        type="password" 
        placeholder='Password'
        />
        <input 
        className='text-center placeholder-gray-500 text-blue text-lg font-medium p-4 transition-all rounded-md border-2 focus:border-lightPink outline-none' 
        type="password" 
        placeholder='Password Again BIATCH'
        />
        <i style={{display:'none',}} className='absolute -bottom-[0.9rem] text-lightPink font-medium text-md'>!Enter A <span className='text-pink'>VALID</span> Info!</i>
      </div>
    </div>
  )
}
