"use client";

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';

interface ProjectCardDetailsProps {
    project: {
        project_name: string;
        description: string;
        skills: string[];
        signed_thumbnail?: string | null;
        github_url: string;
    };
}

export default function ProjectCard({ project }: ProjectCardDetailsProps) {
    return (
        <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-sm bg-[#1A1A1A] border mb-10
      border-[#2A2A2A] hover:border-[#B22222]/40 hover:shadow-md transition-all  w-full max-w-[1000px] mx-auto overflow-hidden">
            {/* Thumbnail Image */}
            <div
                className="
          relative shrink-0 
          w-full h-56 sm:h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 
          2xl:w-80 2xl:h-80"
            >
                {/* Ensure Image was found, handle if not */}
                {project.signed_thumbnail ? (
                    <Image
                        src={project.signed_thumbnail}
                        alt={`${project.project_name} thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-sm text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between p-6 text-left w-full">
                <div>
                    <h5 className="flex items-center gap-3 text-2xl font-bold text-[#EAEAEA] mb-3 flex-wrap">
                        <span>{project.project_name}</span>
                        {project.github_url && (
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#2A2A2A] p-2 rounded-full hover:bg-[#B22222] transition shrink-0"
                            >
                                <FaGithub className="text-white text-lg" />
                            </a>
                        )}
                    </h5>
                </div>
                <p className="mb-3 text-[#A0A0A0]">{project.description}</p>

                <ul className="flex flex-wrap gap-3 mt-3 text-sm text-[#B22222]">
                    {project.skills.map((tech, index) => (
                        <li key={index} className="bg-[#2A2A2A] rounded-md px-3 py-1 border border-[#3A3A3A]" >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}