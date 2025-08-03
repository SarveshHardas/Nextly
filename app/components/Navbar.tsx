'use client';

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {Sun,Moon} from 'lucide-react';

import {useTheme} from "@/context/ThemeContext";
import {useState} from 'react';

const Navbar = () => {
    const {isLightTheme, toggleTheme} =  useTheme();
    const [isSpinning, setIsSpinning] = useState(false);

    const handleToggle= () => {
        setIsSpinning(true);
        toggleTheme();
        setTimeout(() => setIsSpinning(false),500);
    }

    return (
        <header className="px-8 py-6 w-full ${isLightTheme?'bg-white':'bg-gray-700'}">
            <nav className="flex justify-between items-center">
                <div className="flex justify-center items-center space-x-2">
                    <Link href="/">
                        <Image src="/img/logo.svg" alt="logo" width={32} height={32}/>
                    </Link>
                    <p className="text-[#6366f1] text-2xl font-medium">Nextly</p>
                </div>
                <div className="flex justify-center items-center space-x-8 font-medium ${isLightTheme?'text-black':'text-white'} ">
                    <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">
                        Product
                    </Link>
                    <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">
                        Features
                    </Link>
                    <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">
                        Pricing
                    </Link>
                    <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">
                        Company
                    </Link>
                    <Link href="/" className="hover:text-indigo-500 transition-colors duration-300">
                        Blog
                    </Link>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button type="button" className="bg-[#4f46e5] text-white px-5 py-3 rounded-xl" >
                        Get Started
                    </button>
                    <button onClick={handleToggle} className="transition duration-700">
                        <div className={isSpinning?'animate-spin':''}>
                            {
                                isLightTheme?(
                                    <Sun size={24}/>
                                ):(
                                    <Moon size={24}/>
                                )
                            }
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
