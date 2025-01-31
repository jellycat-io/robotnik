import { InfoBar } from "@/components/infobar"
import { Sidebar } from "@/components/sidebar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full dark:bg-black">
        <InfoBar />
        {children}
      </div>
    </div>
  )
}
