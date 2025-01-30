"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <SunIcon className="size-4" />
          ) : (
            <MoonIcon className="size-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Toggle Theme</TooltipContent>
    </Tooltip>
  )
}
