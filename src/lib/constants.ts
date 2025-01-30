import { CategoryIcon } from "@/components/icons/category"
import { HomeIcon } from "@/components/icons/home"
import { LogsIcon } from "@/components/icons/logs"
import { PaymentIcon } from "@/components/icons/payment"
import { SettingsIcon } from "@/components/icons/settings"
import { TemplatesIcon } from "@/components/icons/templates"
import { WorkflowsIcon } from "@/components/icons/workflows"

export const MENU_OPTIONS = [
  { name: "Dashboard", Component: HomeIcon, href: "/dashboard" },
  { name: "Workflows", Component: WorkflowsIcon, href: "/workflows" },
  { name: "Settings", Component: SettingsIcon, href: "/settings" },
  { name: "Connections", Component: CategoryIcon, href: "/connections" },
  { name: "Billing", Component: PaymentIcon, href: "/billing" },
  { name: "Templates", Component: TemplatesIcon, href: "/templates" },
  { name: "Logs", Component: LogsIcon, href: "/logs" },
]
