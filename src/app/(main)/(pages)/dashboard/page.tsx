import { auth } from "@clerk/nextjs/server"

import { PageHeader } from "../_components/page-header"

export default async function DashboardPage() {
  const { userId } = await auth()
  console.log(userId)
  return (
    <div className="flex flex-col gap-4 relative">
      <PageHeader>Dashboard</PageHeader>
    </div>
  )
}
