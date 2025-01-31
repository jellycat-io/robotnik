"use server"

import { auth } from "@clerk/nextjs/server"
import { z } from "zod"

import { db } from "@/lib/db"
import { UpdateUserSchema } from "@/lib/types"

export async function updateUserInfo(values: z.infer<typeof UpdateUserSchema>) {
  const { userId } = await auth()
  if (!userId) throw new Error("Unauthorized")

  const { name, email } = UpdateUserSchema.parse(values)

  const response = await db.user.update({
    where: { clerkId: userId },
    data: {
      name,
      email,
    },
  })

  return response
}
