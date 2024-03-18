"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
    const [openSiderbar, setOpenSiderbar] = useState(false)
    return (
        <>
            <div className="bg-black">
                <div className="max-w-[1200px] flex justify-between mx-auto px-4 xl:px-0 py-3 text-white">
                    <div className="flex gap-6 items-center">
                        <h1 className='text-2xl font-bold font-serif'>
                            <Link href="/">Logo</Link>
                        </h1>
                        <div className={`${openSiderbar ? "hidden" : "flex gap-6 items-center"}`}>
                            <Link className='text-xl font-medium hover:text-blue-600 duration-300' href="/">Home</Link>
                            <Link className='text-xl font-medium hover:text-blue-600 duration-300' href="/firebase">Firebase</Link>
                            <Link className='text-xl font-medium hover:text-blue-600 duration-300' href="/accordion">Accordion</Link>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => { setOpenSiderbar(true) }} className='bg-blue-600 hover:bg-red-600 duration-300 py-2 rounded-xl px-5'>Open Sidebar</button>
                    </div>
                </div>
                <div className={`${openSiderbar ? "end-0" : "-end-full"} duration-500 w-[30%] top-0 z-50 min-h-screen fixed bg-gray-600`}>
                    <div className="flex flex-col items-start py-16 mt-10 gap-10 text-white px-10">
                        <Link onClick={() => { setOpenSiderbar(false) }} className='text-xl font-medium hover:text-blue-600 duration-300' href="/">Home</Link>
                        <Link onClick={() => { setOpenSiderbar(false) }} className='text-xl font-medium hover:text-blue-600 duration-300' href="/firebase">Firebase</Link>
                        <Link onClick={() => { setOpenSiderbar(false) }} className='text-xl font-medium hover:text-blue-600 duration-300' href="/accordion">Accordion</Link>
                    </div>
                    <div className="absolute top-3 px-4">
                        <button onClick={() => { setOpenSiderbar(false) }} className='bg-blue-600 hover:bg-red-600 duration-300 py-2 rounded-xl px-5'>Close Sidebar</button>
                    </div>
                </div>
                <div onClick={() => { setOpenSiderbar(false) }} className={`${openSiderbar ? "w-full h-full absolute top-0 bg-black bg-opacity-50" : ""} duration-500`}></div>
            </div>
        </>
    )
}

export default Sidebar