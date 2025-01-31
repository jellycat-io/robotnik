"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { CreateWorkflowSchema, CreateWorkflowValues } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoadingButton } from "@/components/loading-button"

import { createWorkflow } from "../actions"

interface WorkflowFormProps {
  onCreateAction: () => void
}

export function WorkflowForm({ onCreateAction }: WorkflowFormProps) {
  const { toast } = useToast()
  const form = useForm<CreateWorkflowValues>({
    resolver: zodResolver(CreateWorkflowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })

  async function handleSubmit(values: CreateWorkflowValues) {
    try {
      await createWorkflow(values)
    } catch (e) {
      console.error(e)
      toast({
        variant: "destructive",
        description: "Something went wrong...",
      })
    } finally {
      onCreateAction()
    }
  }

  const { isSubmitting } = form.formState

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} disabled={isSubmitting} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-3">
          <LoadingButton type="submit" loading={isSubmitting}>
            Submit
          </LoadingButton>
          <Button
            variant="outline"
            onClick={() => form.reset({ name: "", description: "" })}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
