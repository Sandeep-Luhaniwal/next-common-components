"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ScrollNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <>
            <nav className={`fixed w-full  bg-white shadow-md transition-all duration-500 py-4 ${visible ? 'top-0' : '-top-[100px]'}`}>
                <div className="max-w-[1200px] px-4 py-3 mx-auto">
                    {/* Navbar content */}
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="font-bold text-xl">Logo</a>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <Link className='capitalize hover:text-blue-600 text-xl font-semibold' href="/">Home</Link>
                            <Link className='capitalize hover:text-blue-600 text-xl font-semibold' href="/navbar">Navbar</Link>
                            <Link className='capitalize hover:text-blue-600 text-xl font-semibold' href="/">filter</Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(true)}>Open</button>
                        </div>


                        <div className={`min-h-screen bg-red-600 fixed w-full h-full top-0 flex flex-col justify-center items-center gap-5 -start-full duration-300 ${isOpen ? "!start-0" : ""}`}>
                            <button onClick={() => { setIsOpen(false) }} className='absolute end-5 top-5'>close</button>
                            <Link className='capitalize hover:text-blue-600 text-xl font-semibold' href="/">Home</Link>
                            <Link className='capitalize hover:text-blue-600 text-xl font-semibold' href="/navbar">Navbar</Link>
                            <Link className='capitalize hover:text-blue-600 text-xl font-semibold' href="/">filter</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="min-h-screen bg-red-800">ab</div>
            <div className="min-h-screen bg-green-500">ab</div>
            <div className="min-h-screen bg-orange-500">ab</div>
        </>
    );
};



export default ScrollNavBar