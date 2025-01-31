import { CONNECTIONS } from "@/lib/constants"

import { PageHeader } from "../_components/page-header"
import { ConnectionCard } from "./_components/connection-card"

export default function ConnectionsPage() {
  // TODO: Handle real connections
  const connections: Record<string, boolean> = {
    Discord: false,
    "Google Drive": true,
    Notion: false,
    Slack: false,
  }

  return (
    <div className="flex flex-col gap-4 relative">
      <PageHeader title="Connections" />
      <section className="flex flex-col gap-6 px-6 py-2 text-muted-foreground">
        Connect all your apps directly from here. You may need to connect these
        apps regularly to refresh verification.
        {CONNECTIONS.map((connection) => (
          <ConnectionCard
            key={connection.title}
            title={connection.title}
            description={connection.description}
            icon={connection.icon}
            type={connection.title}
            connections={connections}
          />
        ))}
      </section>
    </div>
  )
}
