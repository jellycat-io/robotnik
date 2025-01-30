"use client"

import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { SaveIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { EditUserProfileSchema } from "@/lib/types"
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

export function ProfileForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="name"
          disabled={loading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Fox Mulder" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="fox.mulder@fbi.gov"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          type="submit"
          loading={loading}
          className="self-start"
          icon={SaveIcon}
        >
          {loading ? "Saving..." : "Save"}
        </LoadingButton>
      </form>
    </Form>
  )
}
