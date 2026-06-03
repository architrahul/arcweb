import { projects } from "@/content/projects";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slugs: string[]) {
  return projects.filter((project) => slugs.includes(project.slug));
}
