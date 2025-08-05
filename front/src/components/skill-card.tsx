"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { SkillForm } from "@/components/forms/skill-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { mockApi } from "@/data";

export function SkillCard({ skill }: { skill: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const deleteSkillMutation = useMutation({
    mutationFn: mockApi.skills.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      // toast({ title: "Sucesso!", description: "Habilidade excluída com sucesso." })
    },
    onError: (error) => {
      // toast({ title: "Erro", description: `Falha ao excluir habilidade: ${error.message}`, variant: "destructive" })
    },
  });

  return (
    <>
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>{skill.title}</CardTitle>
          <CardDescription>{skill.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">
            Adicionado em: {skill.date}
          </p>
        </CardContent>
        <div className="flex justify-end gap-2 p-4 border-t">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Editar</span>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="icon"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Excluir</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso excluirá permanentemente
                  a habilidade <span className="font-bold">{skill.title}</span>.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => deleteSkillMutation.mutate(skill.id)}
                >
                  {deleteSkillMutation.isPending ? "Excluindo..." : "Excluir"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
      <SkillForm
        skill={skill}
        open={isEditing}
        onOpenChange={setIsEditing}
      />
    </>
  );
}
