"use client";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Hero() {
    return (
        <section className="flex flex-col items-center hfit pt-[120px] md:pt-[120px] pb-12 bg-transparent text-[#EAEAEA]">
            <div className="max-w-5xl w-[90%] md:w-[700px] lg:w-[60%] bg-[#1A1A1A] rounded-2xl shadow-md p-10 border border-[#2A2A2A]">
                <h1 className="text-2xl font-bold text-[#B22222] mb-2">
                    Ricardo Gonzalez
                </h1>
                <p className="text-sm text-[#C0C0C0] mb-4">Senior Systems Engineer</p>

                <p className="text-[#A0A0A0] mb-6 leading-relaxed">
                    Trust in the LORD with all your heart and lean not on your own understanding in all your ways
                    acknowledge him, and he will make your paths straight.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-[#EAEAEA]">
                    <a
                        href="https://github.com/Ricardo96MC"
                        target="_blank"
                        className=" bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        <FaGithub className="text-base" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ricardo-gonzalez-732765129/"
                        target="_blank"
                        className="bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        <FaLinkedin className="text-base" />
                    </a>
                    <a
                        href="mailto:ricardo@example.com"
                        className="bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        <MdEmail className="text-lg" />
                    </a>
                    <a
                        href="https://www.youtube.com/@Ricardo-Gonzalez"
                        target="_blank"
                        className="bg-[#2A2A2A] px-4 py-2 rounded-full text-sm hover:bg-[#B22222] hover:text-white transition"
                    >
                        <FaYoutube className="text-lg" />
                    </a>
                </div>
            </div>
        </section>
    );
}
