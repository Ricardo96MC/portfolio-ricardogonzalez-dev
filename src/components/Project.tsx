import React from 'react'
import ProjectCard from './ProjectCard'

const tempTechn = ["Java", "Spring", 'PostgreSQL']

const tempObect = {
    projectName: "EdgePingService",
    projectDetails: "Lorem Ipsum \n\n\n\n LoremIpsum",
    technology: tempTechn,
    thumbnail: "/EdgePingService.png",
}

const Project = () => {
    return (
        <section className="flex flex-col items-center justify-center text-left text-[#EAEAEA]">
            <div className="max-w-3xl w-[90%] md:w-[600px] lg:w-1/2 bg-[#1A1A1A] rounded-2xl shadow-md p-8 border border-[#2A2A2A]">
                <h1 className="text-5xl mb-12 text-center">
                    <a href="/experience" className="hover:text-[#B22222]">
                        <span>Projects</span>
                    </a>
                </h1>
                <ProjectCard {...tempObect} />
            </div>
        </section>
    )
}

export default Project
