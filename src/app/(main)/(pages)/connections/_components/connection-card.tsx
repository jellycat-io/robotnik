import Link from "next/link"

import { env } from "@/lib/env"
import { ConnectionTypes } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ConnectionCardProps {
  type: ConnectionTypes
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: ConnectionTypes
  description: string
  callback?: () => void
  connections: Record<string, boolean>
}

export function ConnectionCard({
  type,
  icon: Icon,
  title,
  description,
  callback,
  connections,
}: ConnectionCardProps) {
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-2">
        <Icon className="size-8" />
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="px-6">
        {connections[type] ? (
          <div className="text-sm border-border rounded-md border px-3 py-2 text-white">
            Connected
          </div>
        ) : (
          <Button asChild>
            <Link
              href={
                title === "Discord"
                  ? env.NEXT_PUBLIC_DISCORD_REDIRECT
                  : title === "Notion"
                    ? env.NEXT_PUBLIC_NOTION_AUTH_URL
                    : title === "Slack"
                      ? env.NEXT_PUBLIC_SLACK_REDIRECT
                      : "#"
              }
            >
              Connect
            </Link>
          </Button>
        )}
      </div>
    </Card>
  )
}
