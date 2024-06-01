"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
// import { apexChartLink } from '../common/Helper';
import { apexData } from './ApexHelper';

const ApexAllData = () => {
    const pathname = usePathname();
    const apexall = apexData.find(item => item.url === pathname);
    return (
        <div>
           
            {apexall ? (
                <div>
                    {apexall.data}
                </div>
            ) : (
                <div>No data found for this path</div>
            )}
        </div>
    )
}

export default ApexAllData