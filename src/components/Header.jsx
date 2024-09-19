"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "media/logo.png"
const Header = () => {
    const [openIndex, setOpenIndex] = useState(false);
    return (
        <header className="md:absolute relative md:top-0 md:bottom-0 md:left-0 md:right-0 w-full h-max">
            <div className="md:bg-[#0000007e] bg-black md:bg-opacity-40 py-4 relative z-10">
                <div className="container">
                    <div className="grid grid-cols-12 items-center text-white">
                        <div className="xl:col-span-5 lg:col-span-4 col-span-3">
                            <a href="/">
                                <Image src={Logo} alt="logo-mini-inverstment" />
                            </a>
                        </div>
                        <div className="xl:col-span-7 lg:col-span-8 col-span-9">
                            <button className="md:hidden block w-10 ms-auto" onClick={() => setOpenIndex((prev) => (!prev))}>
                                <span className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-white ${!openIndex ? "rotate-0" : "-rotate-45 -mb-2 h-2"}`}></span>
                                <span className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-white my-2 ${!openIndex ? "block" : "hidden"}`}></span>
                                <span className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-white ${!openIndex ? "rotate-0" : "rotate-45 h-2"}`}></span>
                            </button>
                            <div className={`md:flex md:relative absolute ${!openIndex ? "-translate-x-full" : "-translate-x-0"} md:translate-x-0 md:bg-transparent bg-black left-0 md:w-full sm:w-[75%] w-[85%] md:h-auto md:p-0 py-10 px-10 h-screen top-0 lg:gap-x-10 md:gap-x-5 md:items-center md:justify-end transition-all ease-in-out duration-500`}>
                                {[
                                    ["#", "Home"],
                                    ["#services", "Services"],
                                    ["#about-us", "About us"],
                                    ["#contact", "Contact us"]
                                ].map(([link, text], i) => (
                                    <a key={i} href={link} className="relative w-max overflow-hidden hover:overflow-visible group block md:mb-0 mb-5">
                                        <span>{text}</span>
                                        <span className="block w-0 rounded-full transition-all ease-in-out duration-500 absolute group-hover:w-full group-hover:translate-x-0 group-hover:translate-y-0 translate-y-4 translate-x-28 h-[5px] bg-[#438EFF]"></span>
                                    </a>
                                ))
                                }
                                <a href="tel:+12237587016" className="flex items-center w-max gap-x-2 border-2 py-2 px-5 transition-all ease-in-out duration-500 border-[#438EFF] bg-transparent __animatedPing hover:bg-[#438EFF]">
                                    <span>
                                        <svg aria-hidden="true" width={14} height={14} fill="white" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                    </span>
                                    <span>+1 223-758-7016</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;