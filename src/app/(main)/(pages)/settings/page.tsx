import { getCurrentUser } from "@/app/actions"

import { PageHeader } from "../_components/page-header"
import { ProfileForm } from "./_components/profile-form"

export default async function SettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className="flex flex-col gap-4 relative">
      <PageHeader>Settings</PageHeader>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information.
          </p>
        </div>
        <ProfileForm user={user} />
      </div>
    </div>
  )
}
