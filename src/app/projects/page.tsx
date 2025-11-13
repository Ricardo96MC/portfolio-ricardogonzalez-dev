import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { ProjectInterface } from '@/types/project';
import { loadProjects } from '@/lib/loadProjects';

export default async function ProjectsPage() {
    const projects = await loadProjects();

    return (
        <div className="flex flex-col items-center hfit pt-[120px] md:pt-[120px] pb-12 bg-transparent text-[#EAEAEA]">
            <div className="max-w-5xl w-[90%] md:w-[700px] lg:w-[60%] bg-[#1A1A1A] rounded-2xl shadow-md p-8 border border-[#2A2A2A]">
                <h1 className="text-3xl font-bold mb-12 text-center">My Projects</h1>
                <div className="grid gap-12">
                    {projects.map((p: ProjectInterface) => (
                        <Link key={p.project_id} href={`/projects/${p.project_id}`}>
                            <ProjectCard project={p} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}