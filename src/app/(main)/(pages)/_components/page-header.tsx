export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-extrabold text-2xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
      {children}
    </h1>
  )
}
