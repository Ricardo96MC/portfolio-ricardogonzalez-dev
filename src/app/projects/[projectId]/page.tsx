import EdgeService from '@/components/edgeservice/EdgeService';
import React from 'react';

type ProjectPageProps = {
    params: Promise<{
        projectId: string;
    }>
}
export default async function Projects({ params }: ProjectPageProps) {
    const { projectId } = await params;

    if (projectId === "edgeservice") {
        return <EdgeService />
    }
    return (
        <div>
            <h1 className='text-[#EAEAEA]'>Hello Wordls</h1>
        </div>
    );
}
