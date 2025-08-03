import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <div className={"grid px-8"} style={{gridTemplateColumns: "40% 20% 20% 20%"}}>
                <div className="py-3 space-y-7">
                    <div className="flex justify-start items-center space-x-2 hover:cursor-pointer">
                        <Link href="#">
                            <Image src="/img/logo.svg" alt="logo" width={32} height={32}/>
                        </Link>
                        <p className="text-[#6366f1] text-2xl font-medium">Nextly</p>
                    </div>
                    <p className={"text-lg text-gray-400"}>Nextly is a free landing page & marketing website template<br/>for startups and indie projects. Its built with Next.js &<br/>TailwindCSS. And its completely open-source.
                    </p>
                    <Link href="/" className={"hover:cursor-pointer"}>
                        <Image src="/img/vercel.svg" alt={"vercel"} width={176} height={36}/>
                    </Link>
                </div>
                <div className="space-y-3 hover:cursor-pointer">
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Product</p>
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Features</p>
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Pricing</p>
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Company</p>
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Blog</p>
                </div>
                <div className="space-y-3 hover:cursor-pointer">
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Terms</p>
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Privacy</p>
                    <p className={"text-gray-500 text-lg hover:text-indigo-500"}>Legal</p>
                </div>
                <div className="space-y-3">
                    <p>Follow us</p>
                    <div className="flex justify-start space-x-5">
                        <Image src="/Twitter.png" alt="twitter" width={24} height={20}/>
                        <Image src="/Facebook.png" alt="twitter" width={24} height={20}/>
                        <Image src="/instagram.png" alt="twitter" width={24} height={20}/>
                        <Image src="/Linkedin.png" alt="twitter" width={24} height={20}/>
                    </div>
                </div>
            </div>
            <p className={"text-center text-gray-500"}>Copyright © 2025. Made with ♥ by Sarvesh Hardas, inspired from Web3Templates</p>
        </div>
    )
}
export default Footer
