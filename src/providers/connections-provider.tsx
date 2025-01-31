"use client"

import { createContext, useContext, useState } from "react"

import {
  DiscordNode,
  GoogleNode,
  NotionNode,
  SlackNode,
  WorkflowTemplate,
} from "@/lib/types"

export type ConnectionProviderProps = {
  discordNode: DiscordNode
  setDiscordNode: React.Dispatch<React.SetStateAction<DiscordNode>>
  googleNode: GoogleNode[]
  setGoogleNode: React.Dispatch<React.SetStateAction<GoogleNode[]>>
  notionNode: NotionNode
  setNotionNode: React.Dispatch<React.SetStateAction<NotionNode>>
  slackNode: SlackNode
  setSlackNode: React.Dispatch<React.SetStateAction<SlackNode>>
  workflowTemplate: WorkflowTemplate
  setWorkflowTemplate: React.Dispatch<React.SetStateAction<WorkflowTemplate>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type ConnectionWithChildProps = {
  children: React.ReactNode
}

const InitialValues: ConnectionProviderProps = {
  discordNode: {
    webhookURL: "",
    content: "",
    webhookName: "",
    guildName: "",
  },
  googleNode: [],
  notionNode: {
    accessToken: "",
    databaseId: "",
    workspaceName: "",
    content: "",
  },
  slackNode: {
    appId: "",
    authedUserId: "",
    authedUserToken: "",
    slackAccessToken: "",
    botUserId: "",
    teamId: "",
    teamName: "",
    content: "",
  },
  workflowTemplate: {
    discord: "",
    notion: "",
    slack: "",
  },
  isLoading: false,
  setGoogleNode: () => undefined,
  setDiscordNode: () => undefined,
  setNotionNode: () => undefined,
  setSlackNode: () => undefined,
  setWorkflowTemplate: () => undefined,
  setIsLoading: () => undefined,
}

const ConnectionsContext = createContext(InitialValues)
const { Provider } = ConnectionsContext

export function ConnectionsProvider({ children }: ConnectionWithChildProps) {
  const [discordNode, setDiscordNode] = useState(InitialValues.discordNode)
  const [googleNode, setGoogleNode] = useState(InitialValues.googleNode)
  const [notionNode, setNotionNode] = useState(InitialValues.notionNode)
  const [slackNode, setSlackNode] = useState(InitialValues.slackNode)
  const [workflowTemplate, setWorkflowTemplate] = useState(
    InitialValues.workflowTemplate,
  )
  const [isLoading, setIsLoading] = useState(InitialValues.isLoading)

  const values = {
    discordNode,
    setDiscordNode,
    googleNode,
    setGoogleNode,
    notionNode,
    setNotionNode,
    slackNode,
    setSlackNode,
    workflowTemplate,
    setWorkflowTemplate,
    isLoading,
    setIsLoading,
  }

  return <Provider value={values}>{children}</Provider>
}

export function useNodeConnections() {
  const nodeConnection = useContext(ConnectionsContext)
  return { nodeConnection }
}
