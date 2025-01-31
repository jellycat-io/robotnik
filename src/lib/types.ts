import { ConnectionProviderProps } from "@/providers/connections-provider"
import { Prisma } from "@prisma/client"
import { z } from "zod"

export const UpdateUserSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
})

export type UserUpdateValues = z.infer<typeof UpdateUserSchema>

export type UserServerData = Prisma.UserGetPayload<{
  select: {
    id: true
    name: true
    email: true
  }
}>

export type ConnectionTypes = "Google Drive" | "Notion" | "Slack" | "Discord"

export type Connection = {
  title: ConnectionTypes
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}

export interface SlackNode {
  appId: string
  authedUserId: string
  authedUserToken: string
  slackAccessToken: string
  botUserId: string
  teamId: string
  teamName: string
  content: string
}

export interface NotionNode {
  accessToken: string
  databaseId: string
  workspaceName: string
  content: ""
}

export type GoogleNode = object

export interface DiscordNode {
  webhookURL: string
  content: string
  webhookName: string
  guildName: string
}

export interface WorkflowTemplate {
  discord?: string
  notion?: string
  slack?: string
}
