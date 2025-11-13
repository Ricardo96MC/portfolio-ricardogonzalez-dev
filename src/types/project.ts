export interface ProjectInterface {
  project_id: string;
  project_name: string;
  description: string;
  skills: string[];
  github_url: string;
  thumbnail_url?: string | null;
  signed_thumbnail?: string | null;
}

export type ProjectComponentModule = {
  default: React.ComponentType<{ project: ProjectInterface }>;
};