"use client"
import { useState, useEffect } from "react";
import { tabData } from "./Helper";
import { useRouter } from "next/navigation";

const Params = () => {
    const router = useRouter();
    const [params, setParams] = useState(() => {
        // Check if the type is present in localStorage, otherwise use the default value
        return localStorage.getItem("type") || tabData[0].id;
    });

    useEffect(() => {
        if (router.query && router.query.type) {
            const { type } = router.query;
            setParams(type);
            // Store the type in localStorage
            localStorage.setItem("type", type);
        }
    }, [router.query]);

    const clickHandler = (tabName) => {
        const value = tabName;
        router.push(`?${value}`);
        setParams(value);
        // Store the type in localStorage
        localStorage.setItem("type", value);
    };

    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-4 container pt-10">
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

export default Params;
