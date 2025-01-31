"use server"

import { auth } from "@clerk/nextjs/server"

import { db } from "@/lib/db"
import { UserServerData } from "@/lib/types"

export async function getCurrentUser(): Promise<UserServerData> {
  const { userId } = await auth()
  if (!userId) throw new Error("Unauthorized")

  const user = await db.user.findUnique({
    where: { clerkId: userId },
  })

  if (!user) throw new Error("User not found")

  return user
}
