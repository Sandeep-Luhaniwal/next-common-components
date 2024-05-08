"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Api = () => {

  const [api, setApi] = useState([])
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => response.json())
      .then((data) => setApi(data.message))
      .catch((error) => console.error("Error fetching dog images:", error));
  }, [])
  return (
    <div className='mx-auto max-w-[1200px] px-4 xl:px-0'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-center text-blue-700 font-bold py-6'>API Image</h2>
      <div className="grid grid-cols-4 gap-6">
        {api.map((obj, i) => {
          return (
            <Image key={i} className='w-full h-full object-cover' height={280} width={300} src={obj} alt='image' />
          )
        })}
    </div>
    </div>
  )
}

export default Api