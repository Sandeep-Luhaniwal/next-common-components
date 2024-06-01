import React from 'react'
import { apexChartLink } from './Helper'
import Link from 'next/link'

const ApexChartsLinks = () => {
    return (
        <>
            <div className="bg-black bg-opacity-15 min-h-screen">
                <div className="max-w-[1200px] px-4 xl:px-0 mx-auto py-6">
                    <div className="flex flex-wrap gap-8">
                        {apexChartLink.map((value, index) => {
                            return (
                                <div>
                                    <Link className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 duration-200' key={index} href={`/charts${value.url}`}>{value.button}</Link>
                                    <div>{value.data}</div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApexChartsLinks