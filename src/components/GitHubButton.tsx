"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GitHubButton({ href }: { href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2A2A2A] p-2 rounded-full hover:bg-[#B22222] transition shrink-0"
            onClick={(e) => e.stopPropagation()}
            aria-label="Open GitHub repository"
        >
            <FaGithub className="text-white text-lg" />
        </a>
    );
}