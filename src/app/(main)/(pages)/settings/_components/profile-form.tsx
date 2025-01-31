"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SaveIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { UpdateUserSchema, UserServerData, UserUpdateValues } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoadingButton } from "@/components/loading-button"

import { updateUserInfo } from "../actions"

interface ProfileFormProps {
  user: UserServerData
}

export function ProfileForm({ user }: ProfileFormProps) {
  const { toast } = useToast()

  const form = useForm<UserUpdateValues>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      name: user.name ?? "",
      email: user.email ?? "",
    },
  })

  async function handleSubmit(values: UserUpdateValues) {
    try {
      await updateUserInfo(values)
    } catch (e) {
      console.error(e)
      toast({
        variant: "destructive",
        description: "Something went wrong...",
      })
    }
  }

  const isLoading = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Fox Mulder"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="fox.mulder@fbi.gov"
                  disabled
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          type="submit"
          loading={isLoading}
          className="self-start"
          icon={SaveIcon}
        >
          {isLoading ? "Saving..." : "Save"}
        </LoadingButton>
      </form>
    </Form>
  )
}
