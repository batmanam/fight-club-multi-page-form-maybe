import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function PageFour() {
  return (
    <div className='h-[25.7rem] justify-center items-center  flex flex-col h-full p-5 space-y-6'>
      <span className='border-1 border-white rounded-[50%] h-[1rem] items-center w-[1rem] scale-150 text-white flex justify-center'><FaCheck /></span>
      <p className='text-4xl text-white text-center font-bold '>Ur Information is successfuly has been taken. We will contact you, Again      
      <h2 id='kir2' className='py-1 justify-center rounded-md text-4xl flex items-center mt-4 font-semibold text-green'>WELCOME TO <span className='p-2 bg-pink mx-4 rounded-md text-xl'><i id='kir' className='font-bold text-lightPink'>Fight <span>Club</span></i></span></h2>
      </p>
    </div>
  )
}
