"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, XCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { mockApi } from "@/data";

const projectSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  urlDeploy: z
    .string()
    .url("URL de Deploy inválida")
    .optional()
    .or(z.literal("")),
  urlRepository: z
    .string()
    .url("URL do Repositório inválida")
    .optional()
    .or(z.literal("")),
  tags: z
    .array(z.object({ label: z.string().min(1, "Tag não pode ser vazia") }))
    .min(1, "Pelo menos uma tag é obrigatória"),
  images: z
    .array(
      z.object({
        src: z
          .string()
          .url("URL da Imagem inválida")
          .min(1, "URL da Imagem é obrigatória"),
        alt: z.string().min(1, "Alt da Imagem é obrigatório"),
      })
    )
    .min(1, "Pelo menos uma imagem é obrigatória"),
  requiriments: z
    .object({
      functionaisRequiriments: z
        .array(z.object({ title: z.string(), description: z.string() }))
        .optional(),
      noFunctionalRequiriments: z
        .array(z.object({ title: z.string(), description: z.string() }))
        .optional(),
      businessRule: z
        .array(z.object({ title: z.string(), description: z.string() }))
        .optional(),
    })
    .optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  project?: any; // Optional for editing existing project
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export function ProjectForm({ project, onOpenChange, open }: ProjectFormProps) {
  const queryClient = useQueryClient();

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      urlDeploy: "",
      urlRepository: "",
      tags: [{ label: "" }],
      images: [{ src: "", alt: "" }],
      requiriments: {
        functionaisRequiriments: [],
        noFunctionalRequiriments: [],
        businessRule: [],
      },
    },
  });

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control: form.control,
    name: "tags",
  });

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control: form.control,
    name: "images",
  });

  useEffect(() => {
    if (project) {
      form.reset({
        title: project.title,
        description: project.description,
        urlDeploy: project.urlDeploy || "",
        urlRepository: project.urlRepository || "",
        tags: project.tags.length > 0 ? project.tags : [{ label: "" }],
        images:
          project.images.length > 0 ? project.images : [{ src: "", alt: "" }],
        requiriments: project.requiriments,
      });
    } else {
      form.reset({
        title: "",
        description: "",
        urlDeploy: "",
        urlRepository: "",
        tags: [{ label: "" }],
        images: [{ src: "", alt: "" }],
        requiriments: {
          functionaisRequiriments: [],
          noFunctionalRequiriments: [],
          businessRule: [],
        },
      });
    }
  }, [project, form, open]); // Reset form when project changes or dialog opens/closes

  const createProjectMutation = useMutation({
    mutationFn: mockApi.projects.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      // toast({ title: "Sucesso!", description: "Projeto criado com sucesso." })
      onOpenChange(false);
    },
    onError: (error) => {
      // toast({ title: "Erro", description: `Falha ao criar projeto: ${error.message}`, variant: "destructive" })
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      mockApi.projects.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      // toast({ title: "Sucesso!", description: "Projeto atualizado com sucesso." })
      onOpenChange(false);
    },
    onError: (error) => {
      // toast({ title: "Erro", description: `Falha ao atualizar projeto: ${error.message}`, variant: "destructive" })
    },
  });

  const onSubmit = (values: any) => {
    if (project) {
      updateProjectMutation.mutate({ id: project.id, data: values });
    } else {
      createProjectMutation.mutate(values);
    }
  };

  const isSubmitting =
    createProjectMutation.isPending || updateProjectMutation.isPending;

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {project ? "Editar Projeto" : "Adicionar Novo Projeto"}
          </SheetTitle>
          <SheetDescription>
            {project
              ? "Edite os detalhes do seu projeto."
              : "Preencha os detalhes para adicionar um novo projeto."}
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Título do Projeto"
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descrição detalhada do projeto"
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="urlDeploy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de Deploy</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://seudeploy.com"
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="urlRepository"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL do Repositório</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/seuusuario/seuprojeto"
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Tags</FormLabel>
              {tagFields.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 mb-2"
                >
                  <FormField
                    control={form.control}
                    name={`tags.${index}.label`}
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Ex: next.js"
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTag(index)}
                  >
                    <XCircle className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendTag({ label: "" })}
              >
                <PlusCircle className="mr-2 w-4 h-4" /> Adicionar Tag
              </Button>
            </div>

            <div>
              <FormLabel>Imagens</FormLabel>
              {imageFields.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 mb-2"
                >
                  <FormField
                    control={form.control}
                    name={`images.${index}.src`}
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="URL da Imagem"
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`images.${index}.alt`}
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Texto Alt da Imagem"
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeImage(index)}
                  >
                    <XCircle className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendImage({ src: "", alt: "" })}
              >
                <PlusCircle className="mr-2 w-4 h-4" /> Adicionar Imagem
              </Button>
            </div>

            {/* Requisitos (simplificado para o mock) */}
            {/* Você pode expandir esta seção para incluir os campos de requisitos funcionais, não funcionais e regras de negócio */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">
                Requisitos (Exemplo Simplificado)
              </h3>
              <p className="text-muted-foreground text-sm">
                Para este exemplo estático, os campos de requisitos não são
                editáveis no formulário. Você pode expandir o schema Zod e o
                formulário para incluí-los.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Salvando..."
                : project
                  ? "Salvar Alterações"
                  : "Adicionar Projeto"}
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
