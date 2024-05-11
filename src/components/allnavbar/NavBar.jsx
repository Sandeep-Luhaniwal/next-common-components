"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="bg-black mt-32">
                <div className="max-w-[1200px] px-4 py-3 mx-auto">
                    <div className="flex text-white justify-between items-center">
                        <h1 className='text-3xl capitalize'>logo</h1>
                        <div className="gap-5 md:flex hidden">
                            {/* <Link className='capitalize hover:text-blue-600 text-2xl font-semibold' href="/">Home</Link> */}
                            <Link className='capitalize hover:text-blue-600 text-2xl font-semibold' href="/navbar/scrollnavbar">ScrollNav</Link>
                            <Link className='capitalize hover:text-blue-600 text-2xl font-semibold' href="/navbar/filter">filter</Link>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(true)}>Open</button>
                        </div>


                        <div className={`min-h-screen bg-red-600 fixed w-full h-full top-0 flex flex-col justify-center items-center gap-5 -start-full duration-300 ${isOpen ? "!start-0" : ""}`}>
                            <button onClick={() => { setIsOpen(false) }} className='absolute end-5 top-5'>close</button>
                            <Link className='capitalize hover:text-blue-600 text-2xl font-semibold' href="/">Home</Link>
                            <Link className='capitalize hover:text-blue-600 text-2xl font-semibold' href="/">firebase</Link>
                            <Link className='capitalize hover:text-blue-600 text-2xl font-semibold' href="/">filter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar