import { CategoryIcon } from "@/components/icons/category"
import { DiscordIcon } from "@/components/icons/discord"
import { GoogleDriveIcon } from "@/components/icons/google-drive"
import { HomeIcon } from "@/components/icons/home"
import { LogsIcon } from "@/components/icons/logs"
import { NotionIcon } from "@/components/icons/notion"
import { PaymentIcon } from "@/components/icons/payment"
import { SettingsIcon } from "@/components/icons/settings"
import { SlackIcon } from "@/components/icons/slack"
import { TemplatesIcon } from "@/components/icons/templates"
import { WorkflowsIcon } from "@/components/icons/workflows"

import { Connection } from "./types"

export const MENU_OPTIONS = [
  { name: "Dashboard", Component: HomeIcon, href: "/dashboard" },
  { name: "Workflows", Component: WorkflowsIcon, href: "/workflows" },
  { name: "Settings", Component: SettingsIcon, href: "/settings" },
  { name: "Connections", Component: CategoryIcon, href: "/connections" },
  { name: "Billing", Component: PaymentIcon, href: "/billing" },
  { name: "Templates", Component: TemplatesIcon, href: "/templates" },
  { name: "Logs", Component: LogsIcon, href: "/logs" },
]

export const CONNECTIONS: Connection[] = [
  {
    title: "Google Drive",
    description: "Connect your Google Drive to listen to folder changes.",
    icon: GoogleDriveIcon,
    connectionKey: "googleNode",
    alwaysTrue: true,
  },
  {
    title: "Discord",
    description: "Connect your Discord to send notifications and messages.",
    icon: DiscordIcon,
    connectionKey: "discordNode",
    accessTokenKey: "webhookURL",
  },
  {
    title: "Notion",
    description: "Create entries in your Notion dashboard and automate tasks.",
    icon: NotionIcon,
    connectionKey: "notionNode",
    accessTokenKey: "accessToken",
  },
  {
    title: "Slack",
    description:
      "Use Slack to send notifications to team members through your own custom bot.",
    icon: SlackIcon,
    connectionKey: "slackNode",
    accessTokenKey: "slackAccessToken",
    slackSpecial: true,
  },
]
