import Image from "next/image"

import { HeroHighlight } from "@/components/ui/hero-highlight"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <HeroHighlight containerClassName="min-h-screen">
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center text-8xl font-extrabold gap-[2px]">
            <span>Rob</span>
            <Image
              suppressHydrationWarning
              src="/logo.svg"
              alt="robotnik logo"
              width={64}
              height={64}
              className="size-32"
            />
            <span>tnik.</span>
          </div>
          <h2 className="text-5xl font-semibold">
            Let Robotnik handle your work for you.
          </h2>
          <button className="p-[3px] relative mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="text-xl font-semibold px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get started for free
            </div>
          </button>
        </div>
      </HeroHighlight>
    </main>
  )
}
