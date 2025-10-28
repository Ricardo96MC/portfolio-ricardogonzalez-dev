import React from 'react'
import ProjectCard from './ProjectCard'
import { supabaseServer } from '@/lib/supabaseServerClient'

export default async function Project() {
    /**
     * We have updated our table,  now we are pulling a view
     * that has pulled together job skills and projects from
     * their own tables. 
     * 
     * We have stored our Project information in Supabase,
     * so lets fetch them! Also we have images in a bucket
     * so we will access them via a signed url
     */

    const { data: projects, error } = await supabaseServer
        .from('project_with_skills')
        .select("*");

    if (error) {
        console.log("Error fetching Projects from DB: ", error);
        return (
            <div>Error Loading Projects</div>
        )
    }

    const projectsWithImages = await Promise.all(
        projects.map(async (proj) => {
            const { data: signed } = await supabaseServer
                .storage
                .from('portfolio-images')
                .createSignedUrl(proj.thumbnail_url, 60 * 60); //Url is valid for 1 hr
            return {
                ...proj,
                signed_thumbnail: signed?.signedUrl ?? null,
            }
        })
    );

    return (
        <section id="projects" className="flex flex-col items-center justify-center text-left text-[#EAEAEA]">
            <div className="max-w-3xl w-[90%] md:w-[600px] lg:w-1/2 bg-[#1A1A1A] rounded-2xl shadow-md p-8 border border-[#2A2A2A]">
                <h1 className="text-5xl mb-12 text-center">
                    <a href="/projects" className="hover:text-[#B22222]">
                        <span>Projects</span>
                    </a>
                </h1>
                {projectsWithImages.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
        </section>
    )
}

