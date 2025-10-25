"use client"; //Footer.tsx needs "use client" because we are importing react-icons (client-side library).

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <section id="connect" className="max-w-5xl mx-auto px-6 py-16 text-center text-gray-300">
            <h2 className="text-[#B22222] text-xl font-medium mb-2 flex items-center justify-center gap-2">Wanna Connect?</h2>
            <p className="text-[#A0A0A0] text-lg pb-2">
                Fell free to reachout on any of these!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="mailto:ricardo.i.gonzalez111096@gmail.com"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#B22222] px-4 py-2 rounded-full text-sm transition"
                >
                    <MdEmail className="text-lg" />
                    <span>@Ricardo</span>
                </a>
                <a
                    href="https://github.com/Ricardo96MC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#B22222]  px-4 py-2 rounded-full text-sm transition"
                >
                    <FaGithub className="text-base" />
                    <span>@Ricardo96MC</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/ricardo-gonzalez-732765129/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#B22222] px-4 py-2 rounded-full text-sm transition"
                >
                    <FaLinkedin className="text-base" />
                    <span>ricardogonzalez</span>
                </a>
            </div>
            <p className="text-center mt-10 text-cs text-gray-600">
                © {new Date().getFullYear()} Ricardo Gonzalez
            </p>
        </section>
    )
}
