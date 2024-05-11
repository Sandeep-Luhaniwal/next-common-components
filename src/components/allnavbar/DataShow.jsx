"use client"
import React from 'react'
import ScrollNavBar from './ScrollNavBar'
import Filter from '../filter/Filter'
import { usePathname } from 'next/navigation';

const DataShow = () => {
    const pathname = usePathname();
    return (
        <div>
            {pathname === '/navbar/scrollnavbar' && <ScrollNavBar />}
            {pathname === '/navbar/filter' && <Filter />}
        </div>
    )
}

export default DataShow