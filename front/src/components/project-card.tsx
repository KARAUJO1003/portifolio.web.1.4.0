"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { ProjectForm } from "@/components/forms/project-form";
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

export function ProjectCard({ project }: { project: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const deleteProjectMutation = useMutation({
    mutationFn: mockApi.projects.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      // toast({ title: "Sucesso!", description: "Projeto excluído com sucesso." })
    },
    onError: (error) => {
      // toast({ title: "Erro", description: `Falha ao excluir projeto: ${error.message}`, variant: "destructive" })
    },
  });

  return (
    <>
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {project.images.length > 0 && (
            <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
              <Image
                src={project.images[0].src || "/placeholder.svg"}
                alt={project.images[0].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
              >
                {tag.label}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {project.urlDeploy && (
              <Link
                href={project.urlDeploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver Deploy
                </Button>
              </Link>
            )}
            {project.urlRepository && (
              <Link
                href={project.urlRepository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" /> Ver Repositório
                </Button>
              </Link>
            )}
          </div>
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
                  o projeto <span className="font-bold">{project.title}</span>.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => deleteProjectMutation.mutate(project.id)}
                >
                  {deleteProjectMutation.isPending ? "Excluindo..." : "Excluir"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
      <ProjectForm
        project={project}
        open={isEditing}
        onOpenChange={setIsEditing}
      />
    </>
  );
}
