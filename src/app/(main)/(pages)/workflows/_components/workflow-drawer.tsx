"use client"

import { useState } from "react"

import { WorkflowIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { WorkflowForm } from "./workflow-form"

export function WorkflowDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="lg">
          <WorkflowIcon />
          New Workflow
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-3xl mx-auto">
        <DrawerHeader>
          <DrawerTitle>Create a Workflow Automation</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <WorkflowForm onCreateAction={() => setOpen(false)} />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
