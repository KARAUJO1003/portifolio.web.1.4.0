"use client";

import { SkillCard } from "@/components/skill-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SkillForm } from "@/components/forms/skill-form";
import { useState } from "react";
import { mockApi } from "@/data";

export default function SkillsPage() {
  const [isAddingNewSkill, setIsAddingNewSkill] = useState(false);

  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: mockApi.skills.getAll,
  });

  if (isLoading) {
    return <div className="text-center">Carregando habilidades...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Erro ao carregar habilidades.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Minhas Habilidades</h1>
        <Button onClick={() => setIsAddingNewSkill(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Nova Habilidade
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills?.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
      <SkillForm
        open={isAddingNewSkill}
        onOpenChange={setIsAddingNewSkill}
      />
    </div>
  );
}
