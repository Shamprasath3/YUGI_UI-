"use client"
import React from 'react'
import Hoc from '../Hoc/Hoc'
import { Icon } from '@iconify/react';
import Image from 'next/image'
const About = () => {
  return (
    <>
    <div className=' text-center justify-center text-6xl  mt-10 flex space-x-9 '>
    <span><Icon icon="mingcute:grass-fill" /></span>
    <span>About us</span> 
    <span><Icon icon="mingcute:grass-fill" /> </span> 
    </div>
    <div className=' text-center text-4xl mt-10' > Improving Agriculture, Improving Livelihood, Cultivating Crop, Improving People. </div>
    <span className='flex justify-center mt-10'> 
        <Image
          src="/ag.jpg"
          width={1000}
          height={1000}
          alt="Picture of the author"
          className='rounded-2xl shadow-2xl'
        />
    </span>
    <div className=' text-center text-lg mt-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id illum explicabo officia eum quidem inventore architecto sapiente accusamus velit minus dolorem, totam aut commodi. Asperiores, veritatis. Qui, corrupti eveniet. </div>
    </>
  )
}

export default Hoc(About)