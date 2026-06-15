import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="w-full bg-white text-zinc-900 px-4 py-16 md:py-24">
      <main className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-black border border-zinc-800/60 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.7)]">
        <div className="relative overflow-hidden px-6 py-10 md:px-12 md:py-16">
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gray-300/30 blur-3xl animate-float-orange" />
          <div className="absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-gray-300/30 blur-3xl animate-float-blue" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.16),transparent_26%)] pointer-events-none" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.35fr_0.9fr] items-center">
            <div className="space-y-6">
  
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Why I built this
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I kept running into the same problem—I couldn’t stay focused on one thing. I’d start something, lose consistency, and waste days without real progress.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                The bigger issue was this: I had no clear way to track my habits daily or actually <span className="font-semibold text-white">see my consistency</span>. Everything felt abstract, and that made it easy to quit.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Visual progress changed everything. When consistency becomes visible, missing a day creates an actual gap. Staying consistent becomes easier, and momentum becomes real.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 shadow-sm">
                  — Lucky
                </span>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl shadow-black/40">
                <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950">
                  <Image
                    src="/Profile.png"
                    alt="Founder"
                    width={360}
                    height={360}
                    className="h-[360px] w-[360px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default About