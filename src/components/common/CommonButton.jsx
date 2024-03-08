import Link from 'next/link'
import React from 'react'

const CommonButton = () => {
    return (
        <>
            <div className="bg-black bg-opacity-15">
                <div className="max-w-[1200px] px-4 mx-auto xl:px-0 py-3 ">
                    <div className="flex justify-end">
                        <Link className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 duration-200' href="/">Go To Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonButton