// src/app/projects/[projectId]/page.tsx
import { notFound } from 'next/navigation';
import { loadProjects } from '@/lib/loadProjects';
import { ProjectInterface, ProjectComponentModule } from '@/types/project';

async function getProjectComponent(projectId: string): Promise<React.ComponentType<{ project: ProjectInterface }> | null> {
    const map: Record<string, () => Promise<ProjectComponentModule>> = {
        edgeservice: () => import('@/components/projects/edgeservice/EdgeService'),
        // add more projects here
    };

    const importer = map[projectId];
    if (!importer) return null;

    const mod = await importer();
    return mod.default ?? null;
}

export default async function ProjectPage({ params }: {
    params: Promise<{ projectId: string }>;
}) {

    const { projectId } = await params;

    // 1. Verify project exists
    const all = await loadProjects();
    const meta = all.find((p) => p.project_id === projectId);
    if (!meta) notFound();

    // 2. Load custom UI
    const Component = await getProjectComponent(projectId);
    if (!Component) notFound();

    // 3. Render
    return <Component project={meta} />;
}

export async function generateStaticParams() {
    const projects = await loadProjects();
    return projects.map((p) => ({ projectId: p.project_id }));
}