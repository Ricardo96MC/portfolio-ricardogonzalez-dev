import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { ProjectInterface } from '@/types/project';
import { loadProjects } from '@/lib/loadProjects';

export default async function ProjectsPage() {
    const projects = await loadProjects();

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p: ProjectInterface) => (
                    <Link key={p.project_id} href={`/projects/${p.project_id}`}>
                        <ProjectCard project={p} />
                    </Link>
                ))}
            </div>
        </div>
    );
}