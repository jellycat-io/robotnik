"use server"

import { auth } from "@clerk/nextjs/server"

import { db } from "@/lib/db"
import { CreateWorkflowSchema, CreateWorkflowValues } from "@/lib/types"

export async function createWorkflow(values: CreateWorkflowValues) {
  const { userId } = await auth()
  if (!userId) throw new Error("Unauthorized")

  const { name, description } = CreateWorkflowSchema.parse(values)

  await db.workflow.create({
    data: {
      userId,
      name,
      description,
    },
  })
}

export async function getWorkflows() {
  const { userId } = await auth()
  if (!userId) throw new Error("Unauthorized")

  return await db.workflow.findMany({
    where: { userId },
  })
}
