"use client"
import React, { useEffect, useState } from "react";
import { cardsData } from "./FilterHelper";
import Link from "next/link";

const Filter = () => {
    const [tab, setTab] = useState("");
    const [updatedArr, setUpdatedArr] = useState(cardsData);

    console.log("tab", tab);

    useEffect(() => {
        if (tab !== "") {
            const newArr = cardsData.filter((val, i) => val.type === tab);
            setUpdatedArr(newArr);
        } else {
            setUpdatedArr(cardsData);
        }
    }, [tab]);
    return (
        <>
            <div className="max-w-[1200px] mx-auto px-4 xl:px-0 py-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl pb-4 font-semibold">Filter Button</h2>
                <div className="flex">
                    <button
                        onClick={() => setTab("")}
                        className={`${tab === "" ? "bg-red-600" : "bg-gray-600"} px-6 py-2 rounded-md text-white mx-3`}
                    >
                        All Show
                    </button>
                    <button
                        onClick={() => setTab("accordion")}
                        className={`${tab === "accordion" ? "bg-red-600" : "bg-gray-600"} px-6 py-2 rounded-md text-white mx-3`}
                    >
                        Accordion
                    </button>
                    <button
                        onClick={() => setTab("firebase")}
                        className={`${tab === "firebase" ? "bg-red-600" : "bg-gray-600"} px-6 py-2 rounded-md text-white mx-3`}
                    >
                        Firebase
                    </button>
                    <button
                        onClick={() => setTab("slider")}
                        className={`${tab === "slider" ? "bg-red-600" : "bg-gray-600"} px-6 py-2 rounded-md text-white mx-3`}
                    >
                        Slider
                    </button>
                </div>
                <div className="flex flex-wrap gap-8 pt-10 px-4">
                    {updatedArr.map((value, index) => (
                        <div key={index} className="">
                            <Link className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 duration-200' href="/">{value.button}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Filter;