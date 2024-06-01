"use client"
import React, { useState } from 'react'

const ToggelPopUp = () => {
    const [popUpOpen, setIsPopUpOpen] = useState(false);
    return (
        <>
            <div className="max-w-[1200px] mx-auto px-4 xl:px-0 py-3 text-white">
                <button onClick={() => setIsPopUpOpen(true)} className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 duration-200'>
                    Open Pop Up
                </button>

                {/* <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300
                 ${popUpOpen ? "opacity-100 z-20" : "opacity-0 -z-20"}
                 `}> */}
                <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 overflow-hidden
                 ${popUpOpen ? "" : "w-0 h-0"}
                 `}>
                    <div className={` ${popUpOpen ? "max-w-[500px] h-[40vh]" : "max-w-0 h-0"} duration-500 p-6 w-full  bg-pink-600 rounded-xl flex justify-center items-center relative`}>
                        <button onClick={() => setIsPopUpOpen(false)} className='bg-blue-600 text-white absolute top-3 end-3 py-2 px-4 rounded-lg hover:bg-red-600 duration-200'>
                            Closed
                        </button>
                        <h1 className='!leading-none text-4xl'>Hello Thanku For Join</h1>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ToggelPopUp