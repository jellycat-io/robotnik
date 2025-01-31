import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface WorkflowItemProps {
  id: string
  name: string
  description?: string
  publish: boolean | null
}

export function WorkflowItem({
  id,
  name,
  description,
  publish,
}: WorkflowItemProps) {
  return (
    <Card className="flex items-center justify-between gap-6">
      <CardHeader>
        <Link href={`/workflows/editor/${id}`} className="space-y-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          {description && (
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          )}
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 px-4">
        <Label htmlFor="airplane-mode" className="text-muted-foreground">
          {publish ? "On" : "Off"}
        </Label>
        <Switch id="airplane-mode" defaultChecked={!!publish} />
      </div>
    </Card>
  )
}
