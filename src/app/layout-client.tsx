"use client"

import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
    title: "Ricardo Gonzalez",
    description: "Portfolio",
};

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            document.body.style.backgroundPositionY = `${scrollTop * 0.2}px`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <>{children}</>

}
