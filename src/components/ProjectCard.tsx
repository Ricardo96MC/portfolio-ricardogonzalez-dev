import { NextPage } from 'next';
import React from 'react'
import Image from 'next/image';

interface ProjectCardDetailsProps {
    projectName: string;
    projectDetails: string;
    technology: Array<string>;
    thumbnail: string;
}

const ProjectCard: NextPage<ProjectCardDetailsProps> = ({ projectName, projectDetails, technology, thumbnail }) => {
    return (
        <div>

            <a href="#" className="flex flex-col items-center rounded-lg shadow-sm md:flex-row md:max-w-xl  dark:border-gray-700 
            dark:bg-gray-800 dark:hover:bg-gray-700 md:p-0 3xl:flex-row 3xl:max-w-2xl 3xl:p-0">
                <div id="projectThumbnail" className="relative w-full h-48 rounded-t-lg object-cover md:w-48 md:h-48 md:rounded-none 
                md:rounded-s-lg 3xl:w-64 3xl:h-64" >
                    <Image src={thumbnail} alt={`${projectName} thumbnail`} fill={true} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1700px) 50vw, 33vw"
                    />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EAEAEA] dark:text-white">{projectName} </h5>
                    <p className="mb-3 font-normal text-[#A0A0A0] dark:text-gray-400">{projectDetails} </p>
                    {technology.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </div>
            </a>

        </div>
    )
}

export default ProjectCard
