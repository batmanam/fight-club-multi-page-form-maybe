import React from 'react'

export default function PageTwo() {
  return (
    <div className='flex flex-col h-full p-5 space-y-6'>
      <h2 id='kir2' className='py-1 bg-[rgba(255,255,255,0.7)] rounded-md text-center text-4xl flex items-center justify-center font-semibold text-green'>RULES OF THE <span className='p-2 bg-pink mx-4 rounded-md text-xl'><i id='kir' className='font-bold text-lightPink'>Fight <span>Club</span></i></span></h2>
      <ul className='space-y-5 pt-4'>
        <li className='text-xl font-bold text-white'>*The <span id='kir3' className='text-green'>first</span> rule of <span id='kir4'>Fight Club</span> is: You Do Not <span className='text-red'>Talk About</span> Fight Club.</li>
        <li className='text-xl font-bold text-white'>*The <span id='kir5' className='text-green'>second</span> rule of <span id='kir6'>Fight Club</span> is: <span id='kir8' className='text-2xl text-red uppercase'>you DO NOT talk about <span id='kir9' className='text-pink'>Fight Club!</span></span></li>
        <li className='text-xl font-bold text-white'>*<span id='kir5' className='text-green'>Third</span> rule of Fight Club: <span className='capitalize'>someone yells <span className='uppercase text-blue'>"stop!"</span>, <span className='uppercase text-blue'>goes limp</span>,<span className='uppercase text-blue'>taps out</span>, the fight is <span className='underline text-red'>OVER</span>.</span></li>
        <li className=' flex  w-fit items-center text-center'><label htmlFor='in'><input id='in' type="checkbox" className='cursor-pointer' /><span className='cursor-pointer text-lg font-semibold relative top-[1px] left-2 text-lightPink'>DEAL?</span></label></li>
      </ul>
    </div>
  )
}
