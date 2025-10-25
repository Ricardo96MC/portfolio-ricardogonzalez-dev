"use client"; //Footer.tsx needs "use client" because we are importing react-icons (client-side library).

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] text-gray-300 py-4 px-6 felx felx-col items-center border-t borderline-neutral-800">
            <h2 className='text-2xl font-semibold mb-2 text-white text-center'>Wanna Connect?</h2>
            <p className='text-base mb-6 text-gray400 text-center'>
                Fell free to reachout on any of these!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="mailto:ricardo.i.gonzalez111096@gmail.com"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#B22222] px-4 py-2 rounded-full transition"
                >
                    <MdEmail className="text-lg" />
                    <span>@Ricardo96MC</span>
                </a>
                <a
                    href="https://github.com/Ricardo96MC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#B22222] px-4 py-2 rounded-full transition"
                >
                    <FaGithub className="text-lg" />
                    <span>@Ricardo96MC</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/ricardo-gonzalez-732765129/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#B22222] px-4 py-2 rounded-full transition"
                >
                    <FaLinkedin className="text-lg" />
                    <span>ricardogonzalez</span>
                </a>
            </div>
            <p className="text-center mt-10 text-sm text-gray-600">
                © {new Date().getFullYear()} Ricardo Gonzalez
            </p>
        </footer>
    )
}
