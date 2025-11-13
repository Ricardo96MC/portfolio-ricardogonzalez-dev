import { ProjectInterface } from "@/types/project";
import { supabaseServer } from "./supabaseServerClient";

export async function loadProjects(): Promise<ProjectInterface[]> {
     const { data: projects, error } = await supabaseServer
        .from('project_with_skills')
        .select("*");

    if (error || !projects) {
        //console.log("Error fetching Projects from DB: ", error ?? "No projects found");
        return []    
    }

    const projectsWithImages = await Promise.all(
        projects.map(async (proj) => {
            if (!proj.thumbnail_url) {
                return { ...proj, signedThumbnailUrl: null };
             }
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
    return projectsWithImages;

}

export async function loadProjectById(projectId: string): Promise<ProjectInterface | null> {
  const { data, error } = await supabaseServer
    .from('project_with_skills')
    .select('*')
    .eq('project_id', projectId)
    .single();

  if (error || !data) return null;

  let signedThumbnailUrl = null;
  if (data.thumbnail_url) {
    const { data: signed } = await supabaseServer.storage
      .from('portfolio-images')
      .createSignedUrl(data.thumbnail_url, 60 * 60);
    signedThumbnailUrl = signed?.signedUrl ?? null;
  }

  return { ...data, signedThumbnailUrl };
}