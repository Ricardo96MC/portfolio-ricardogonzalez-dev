import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectInterface } from '@/types/project'
import Link from 'next/link';

interface Props {
    projects: ProjectInterface[];
}

export default function Project({ projects }: Props) {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-start text-left pt-10 pb-16 bg-transparent text-[#EAEAEA]">
            <div className="max-w-5xl w-[90%] md:w-[700px] lg:w-[60%] bg-[#1A1A1A] rounded-2xl shadow-md p-8 border border-[#2A2A2A]">
                {/* <h1 className="text-4xl md:text-5xl mb-8 text-center text-[#EAEAEA]">
                    <Link href="/projects" className="hover:text-[#B22222] transition-colors">
                        Projects
                    </Link>
                </h1> */}

                {projects.map((proj) => (
                    <ProjectCard key={proj.project_id} project={proj} />
                ))}
            </div>
        </section>
    )
}

