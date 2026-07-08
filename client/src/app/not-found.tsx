'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,24,27,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(24,24,27,0.04),transparent_35%)]" />

      <motion.div
        className="absolute left-[-8%] top-16 h-56 w-56 rounded-full bg-zinc-200/70 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-8%] h-72 w-72 rounded-full bg-zinc-300/60 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-900 animate-pulse" />
            Lost in the grid
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 text-7xl font-black tracking-tight text-transparent sm:text-8xl md:text-9xl lg:text-[9.5rem]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            backgroundImage: 'linear-gradient(135deg, #18181b 0%, #52525b 45%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-lg text-zinc-600 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The page you are looking for may have moved, been deleted, or never existed.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-zinc-800"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-1 hover:bg-zinc-100"
          >
            Contact support
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Link href="/help" className="transition hover:text-white">
            Help Center
          </Link>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <Link href="/support" className="transition hover:text-white">
            Support
          </Link>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <Link href="/auth/login" className="transition hover:text-white">
            Sign in
          </Link>
        </motion.div>
      </div>
    </main>
  );
}