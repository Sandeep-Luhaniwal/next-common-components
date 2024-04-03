import Link from 'next/link'
import React from 'react'

const ScrollNavBar = () => {
    return (
        <>
            <div className="bg-black">
                <div className="max-w-[1200px] px-4 py-3 mx-auto">
                    <div className="flex text-white justify-between items-center">
                        <h1 className='text-3xl capitalize'>logo</h1>
                        <div className="gap-5 flex">
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

export default ScrollNavBar