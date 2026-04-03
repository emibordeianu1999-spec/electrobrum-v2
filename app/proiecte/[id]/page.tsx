import { projects } from "../data";
import { notFound } from "next/navigation";
import ProjectDetailsContent from "./ProjectDetailsContent";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === parseInt(resolvedParams.id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailsContent project={project} />;
}
