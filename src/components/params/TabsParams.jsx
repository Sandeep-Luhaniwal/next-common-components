"use client"
import { useRouter } from "next/navigation";
import { tabData } from "./Helper";
import { useEffect, useState } from "react";

const TabsParams = () => {
    const [params, setParams] = useState(tabData[0].id);
    const router = useRouter();
    const pathname = router.pathname; // Accessing current pathname
    useEffect(() => {
        const typeParam = new URLSearchParams(window.location.search).get("type");
        if (typeParam) {
            setParams(typeParam);
        }
    }, [pathname]); // Adding pathname to dependency array

    const clickHandler = (obj) => {
        const value = obj.replace(/\s+/g, "-");
        router.push(`?type=${value}`);
        setParams(value);
    };

    return (
        <div>
            <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
                <h2 className='text-3xl sm:text-4xl md:text-5xl text-center text-blue-700 font-bold py-6'>Params Tab</h2>
                <div className="flex gap-6 mb-4">
                    {tabData.map((obj, i) => (
                        <button
                            key={i}
                            button={obj.tabName}
                            onClick={() => clickHandler(obj.id)}
                            className={`bg-blue-600 rounded-lg px-5 py-2.5 text-white capitalize hover:bg-red-800
                             duration-500 ${params === obj.id
                                    ? "bg-red-600"
                                    : ""
                                }`}
                        >{obj.tabName}</button>
                    ))}
                </div>
                <div>
                    {tabData.map((obj, i) => {
                        return (
                            <p
                                key={i}
                                className={`text-2xl text-black font-semibold ${params === obj.id ? "block" : "hidden"
                                    }`}
                            >
                                {obj.tabContent}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TabsParams;
