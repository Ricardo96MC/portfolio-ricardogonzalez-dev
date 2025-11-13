import Image from "next/image";
import Link from "next/link";
import GitHubButton from "./GitHubButton";
import { ProjectInterface } from "@/types/project";

export default function ProjectCard({ project }: { project: ProjectInterface }) {
    return (
        <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-sm bg-[#1A1A1A] border mb-10
      border-[#2A2A2A] hover:border-red-700/40 hover:shadow-md transition-all w-full max-w-[1000px] mx-auto"
        >
            {/* Thumbnail */}
            <div className="relative shrink-0 w-full h-56 sm:h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 2xl:w-80 2xl:h-80 overflow-hidden rounded-xl">
                {project.signed_thumbnail ? (
                    <Image
                        src={project.signed_thumbnail}
                        alt={`${project.project_name} thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
                        className="object-cover"
                        priority={false}
                    // unoptimized can be added for a temporary test: unoptimized
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-sm text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            {/* Project Info */}
            <div className="flex flex-col flex-1 p-6 gap-4">
                <div className="flex items-center gap-3 mb-3">
                    <Link
                        href={`/projects/${project.project_id}`}
                        className="text-2xl font-bold text-[#EAEAEA] hover:text-[#B22222] transition-colors"
                    >
                        {project.project_name}
                    </Link>

                    {project.github_url && <GitHubButton href={project.github_url} />}
                </div>

                <p className="text-[#C0C0C0] text-sm sm:text-base leading-relaxed">
                    {project.description || "No description provided."}
                </p>

                {project.skills && Array.isArray(project.skills) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-[#2A2A2A] text-[#EAEAEA] text-xs px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}