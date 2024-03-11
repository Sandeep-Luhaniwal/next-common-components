"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { filterData } from './FilterHelper';

const FilterCard = () => {
    const [activeTab, setActiveTab] = useState("");
    const [updatedArray, setUpdatedArray] = useState(filterData)
    useEffect(() => {
        if (activeTab !== "") {
            const newArray = filterData.filter((val, i) => val.type === activeTab);
            setUpdatedArray(newArray);
        } else {
            setUpdatedArray(filterData);
        }
    }, [activeTab])
    return (
        <div>
            <div className="mx-auto max-w-[1200px] px-4 py-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl py-10 font-semibold">Filter Card</h2>
                <div className='flex gap-8'>
                    <button onClick={() => setActiveTab("")} className={`${activeTab === "" ? "bg-blue-600" : ""} bg-black duration-300 hover:bg-blue-600 text-white px-4 py-3 rounded-xl`}>ALL</button>
                    <button onClick={() => setActiveTab("blog")} className={`${activeTab === "blog" ? "bg-blue-600" : ""} bg-black duration-300 hover:bg-blue-600 text-white px-4 py-3 rounded-xl`}>Blog</button>
                    <button onClick={() => setActiveTab("card")} className={`${activeTab === "card" ? "bg-blue-600" : ""} bg-black duration-300 hover:bg-blue-600 text-white px-4 py-3 rounded-xl`}>Card</button>
                </div>
                <div className="grid sm:grid-cols-2 justify-items-center md:grid-cols-3 gap-4 pt-4">
                    {updatedArray.map((value, index) => {
                        return (
                            <div key={index} className={`max-w-[400px] group w-full p-3 rounded-xl border-[2px] bg-white border-blue-800 hover:border-red-600 duration-200 group cursor-pointer`}>
                                <div className='w-full h-[200px] relative rounded-lg bg-black bg-opacity-5 flex justify-center items-center'>
                                    <div className='bg-black group-hover:bg-red-700 absolute top-3 start-3 text-white p-2 text-xs leading-none rounded-md'>{value.type}</div>
                                    <Image className='max-w-[200px] group-hover:scale-105 w-full max-h-[150px]' height={200} width={200} src={value.image} alt="images" />
                                </div>
                                <h2 className='text-black text-xl sm:text-2xl md:text-3xl py-3 group-hover:text-red-600'>{value.title}</h2>
                                <p className='text-sm sm:text-base'>{value.descriprtion}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilterCard