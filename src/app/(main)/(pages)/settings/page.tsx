import { PageHeader } from "../_components/page-header"
import { ProfileForm } from "./_components/profile-form"
import { ProfilePicture } from "./_components/profile-picture"

export default function SettingsPage() {
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
        <ProfilePicture />
        <ProfileForm />
      </div>
    </div>
  )
}
