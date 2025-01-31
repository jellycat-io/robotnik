interface PageHeaderProps {
  title: string
  action?: React.ReactNode
}

export function PageHeader({ title, action }: PageHeaderProps) {
  return (
    <header
      className="sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center
       justify-between border-b"
    >
      <h1 className="font-extrabold text-2xl">{title}</h1>
      {action}
    </header>
  )
}
