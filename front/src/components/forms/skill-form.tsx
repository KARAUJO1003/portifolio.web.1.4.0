"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { mockApi } from "@/data";

const skillSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  date: z.string().min(1, "Data é obrigatória (Ex: MM/AAAA)"),
});

type SkillFormValues = z.infer<typeof skillSchema>;

interface SkillFormProps {
  skill?: any; // Optional for editing existing skill
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export function SkillForm({ skill, onOpenChange, open }: SkillFormProps) {
  const queryClient = useQueryClient();

  const form = useForm<SkillFormValues>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
    },
  });

  useEffect(() => {
    if (skill) {
      form.reset({
        title: skill.title,
        description: skill.description,
        date: skill.date,
      });
    } else {
      form.reset({
        title: "",
        description: "",
        date: "",
      });
    }
  }, [skill, form, open]); // Reset form when skill changes or dialog opens/closes

  const createSkillMutation = useMutation({
    mutationFn: mockApi.skills.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      // toast({ title: "Sucesso!", description: "Habilidade criada com sucesso." })
      onOpenChange(false);
    },
    onError: (error) => {
      // toast({ title: "Erro", description: `Falha ao criar habilidade: ${error.message}`, variant: "destructive" })
    },
  });

  const updateSkillMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<any> }) =>
      mockApi.skills.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      // toast({ title: "Sucesso!", description: "Habilidade atualizada com sucesso." })
      onOpenChange(false);
    },
    onError: (error) => {
      // toast({ title: "Erro", description: `Falha ao atualizar habilidade: ${error.message}`, variant: "destructive" })
    },
  });

  const onSubmit = (values: any) => {
    if (skill) {
      updateSkillMutation.mutate({ id: skill.id, data: values });
    } else {
      createSkillMutation.mutate(values);
    }
  };

  const isSubmitting =
    createSkillMutation.isPending || updateSkillMutation.isPending;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {skill ? "Editar Habilidade" : "Adicionar Nova Habilidade"}
          </DialogTitle>
          <DialogDescription>
            {skill
              ? "Edite os detalhes da sua habilidade."
              : "Preencha os detalhes para adicionar uma nova habilidade."}
          </DialogDescription>
        </DialogHeader>
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
                      placeholder="Título da Habilidade"
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
                      placeholder="Descrição detalhada da habilidade"
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
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data (MM/AAAA)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: 01/2023"
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
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Salvando..."
                : skill
                  ? "Salvar Alterações"
                  : "Adicionar Habilidade"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
