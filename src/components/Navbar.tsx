'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/#experiences" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#connect" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 inset-x-0 flex justify-center z-50">
            <div className={`flex items-center justify-between 
                      w-fit px-8 py-3 rounded-full 
                      bg-[#0D0D0D]/90 border border-[#2A2A2A] 
                      backdrop-blur-md shadow-lg 
                      transition-all duration-300`.trim()}>

                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B22222]/60">
                    <Image
                        src="/profile.jpg"
                        alt="Profile"
                        fill
                        sizes="40px"
                        className="object-cover"
                    />
                </div>
                <span className="sm:hidden ml-3 w-50 text-gray-300 text-lg  tracking-wide text-center">
                    Testing are we? :)
                </span>


                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-8 ml-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-lg tracking-wide px-4 py-2 transition-all duration-300 rounded-full hover:bg-[#B22222] ${pathname === link.href
                                ? "text-[#B22222]  hover:text-white"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden ml-3 text-gray-300 hover:text-[#B22222]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-20 w-[90%] max-w-s bg-transparent border border-[#B22222] font-semibold
                        rounded-2xl p-4 backdrop-blur-md shadow-lg flex flex-col items-center gap-3 sm:hidden animate-fadeIn">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base transition ${pathname === link.href
                                ? "text-[#B22222]"
                                : "text-gray-300 active:text-[#B22222]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
