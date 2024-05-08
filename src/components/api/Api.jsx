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
    <div className='max-w-[1400px] mx-auto p-6'>
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