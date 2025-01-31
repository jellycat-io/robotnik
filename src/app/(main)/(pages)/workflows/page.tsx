import { PageHeader } from "../_components/page-header"
import { WorkflowDrawer } from "./_components/workflow-drawer"
import { WorkflowItem } from "./_components/workflow-item"
import { getWorkflows } from "./actions"

export default async function WorkflowsPage() {
  const workflows = await getWorkflows()

  return (
    <div className="flex flex-col gap-4 relative">
      <PageHeader title="Workflows" action={<WorkflowDrawer />} />
      <section className="flex flex-col gap-6 px-6 py-2">
        {workflows?.length ? (
          workflows?.map((flow) => <WorkflowItem key={flow.id} {...flow} />)
        ) : (
          <div className="flex items-center justify-center">No workflows</div>
        )}
      </section>
    </div>
  )
}
