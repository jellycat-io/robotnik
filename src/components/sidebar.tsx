"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  DatabaseIcon,
  GitBranchIcon,
  MousePointerClickIcon,
} from "lucide-react"

import { MENU_OPTIONS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Sidebar() {
  const pathName = usePathname()

  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex flex-col items-center justify-between gap-10 py-6 px-2">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link className="flex font-bold" href="/">
          Robotnik.
        </Link>
        {MENU_OPTIONS.map((option) => (
          <ul key={option.name}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <li>
                  <Link
                    href={option.href}
                    className={cn(
                      "group size-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                      {
                        "dark:bg-[#2F006B] bg-[#EEE0FF]":
                          pathName === option.href,
                      },
                    )}
                  >
                    <option.Component selected={pathName === option.href} />
                  </Link>
                </li>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-black/10 backdrop-blur-xl"
              >
                <p>{option.name}</p>
              </TooltipContent>
            </Tooltip>
          </ul>
        ))}
        <Separator />
        <div className="flex flex-col items-center gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-2 border dark:border-t-[#353346]">
            <MousePointerClickIcon className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-2 border dark:border-t-[#353346]">
            <GitBranchIcon className="text-muted-foreground" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-2 border dark:border-t-[#353346]">
            <DatabaseIcon className="text-muted-foreground" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-2 border dark:border-t-[#353346]">
            <GitBranchIcon className="text-muted-foreground" size={18} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
