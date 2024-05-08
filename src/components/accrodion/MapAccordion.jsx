"use client"
import React, { useState } from 'react'
import { accordionData } from './AccordionHelper';

const MapAccordion = () => {
    const [activeAccordion, setActiveAccordion] = useState("first");

    const onClickHandler = (index) => {
        setActiveAccordion(activeAccordion === index ? "" : index);
    };
    return (
        <>
            <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
                <h2 className='text-3xl sm:text-4xl md:text-5xl text-center text-blue-700 font-bold py-6'>Map function Custom Accordion</h2>
                <div className="max-w-[800px] mx-auto flex gap-4 flex-col">
                    {accordionData.map((value, index) => {
                        return (
                            <div key={index} onClick={() => onClickHandler(value.id)} className=' border-blue-600 rounded-lg border overflow-hidden'>
                                <div className="flex py-2 px-3 justify-between cursor-pointer">
                                    <h1 className='text-lg'>{value.title}</h1>
                                    <span className={`${activeAccordion === value.id ? "" : "before:h-[16px] before:absolute before:bg-blue-700 before:end-[11px] before:top-1/2 before:-translate-y-1/2 before:w-[2px]"} 
                            relative after:h-[2px] after:absolute duration-300 after:bg-blue-700 after:top-1/2 after:-translate-y-1/2 after:end-1 after:w-[16px]`}></span>
                                </div>
                                <p className={`${activeAccordion === value.id ? "!max-h-[100px] pb-4" : "max-h-0"} px-4 duration-500`}>
                                    {value.description}
                                </p>
                            </div>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default MapAccordion