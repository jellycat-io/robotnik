import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"

import { TooltipProvider } from "@/components/ui/tooltip"

const font = DM_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Robotnik",
  description: "Let Robotnik do your work for you",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${font.className} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
