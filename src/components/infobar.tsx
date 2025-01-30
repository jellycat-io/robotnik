import { BookIcon, HeadphonesIcon, LucideIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function InfoBar() {
  return (
    <div className="flex justify-end items-center gap-6 p-4 w-full dark:bg-black">
      <span className="flex items-center bg-muted px-4 rounded-full">
        <SearchIcon />
        <Input
          placeholder="Quick search"
          className="border-none bg-transparent"
        />
      </span>
      <div className="flex items-center gap-4">
        <InfoBarButton icon={HeadphonesIcon} title="Contact Support" />
        <InfoBarButton icon={BookIcon} title="Documentation" />
      </div>
    </div>
  )
}

interface InfoBarButtonProps {
  icon: LucideIcon
  title: string
}

function InfoBarButton({ icon: Icon, title }: InfoBarButtonProps) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <Button variant="ghost" size="icon">
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
