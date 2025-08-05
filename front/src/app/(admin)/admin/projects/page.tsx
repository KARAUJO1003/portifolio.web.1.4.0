"use client";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { ProjectForm } from "@/components/forms/project-form";
import { useState } from "react";
import { mockApi } from "@/data";

export default function ProjectsPage() {
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);

  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: mockApi.projects.getAll,
  });

  if (isLoading) {
    return <div className="text-center">Carregando projetos...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">Erro ao carregar projetos.</div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Meus Projetos</h1>
        <Button onClick={() => setIsAddingNewProject(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Novo Projeto
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <ProjectForm
        open={isAddingNewProject}
        onOpenChange={setIsAddingNewProject}
      />
    </div>
  );
}
