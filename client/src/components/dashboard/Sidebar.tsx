import { LayoutDashboard, Calendar, CheckSquare, BarChart2, Folder, Settings, Plus, NotebookPen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 flex-col border-r border-gray-100 bg-white/50 p-6 hidden md:flex">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-2 px-2 text-xl font-bold">
        <Link
          href="/dashboard"
          className="group flex h-12 w-auto items-center justify-center gap-3 rounded-xl px-2 transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <Image
            src="/logo.svg"
            alt="Brand Logo"
            width={48}
            height={48}
            priority
            className="transition-transform duration-500 group-hover:rotate-6"
          />
          <span className="text-xl font-bold text-zinc-900">Grid Tick</span>
        </Link>

      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        <a href="/dashboard" className="flex items-center gap-3 rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition-colors">
          <LayoutDashboard className="h-5 w-5" /> Dashboard
        </a>
        <a href="/dashboard/grid" className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <Calendar className="h-5 w-5" /> Calendar
        </a>
        <a href="#" className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <CheckSquare className="h-5 w-5" /> My Tasks
        </a>
        <a href="/dashboard/analytics" className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <BarChart2 className="h-5 w-5" /> Statistics
        </a>
        <a href="#" className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <Folder className="h-5 w-5" /> Documents
        </a>
         <a href="/dashboard/notes" className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <NotebookPen className="h-5 w-5" /> Notes
        </a>
      </nav>

      {/* Integrations Section */}
      <div className="mt-8">
        <h4 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Integrations</h4>
        <div className="mt-4 space-y-1">
          <a href="#" className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black">
            Slack
          </a>
          <a href="#" className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black">
            Notion
          </a>
          <a href="#" className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black">
            <Plus className="h-4 w-4 rounded-full border border-gray-400 border-dashed" /> Add new plugin
          </a>
        </div>
      </div>

      {/* Settings at Bottom */}
      <div className="mt-auto pt-8">
        <a href="/dashboard/settings" className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black">
          <Settings className="h-5 w-5" /> Settings
        </a>
      </div>
    </aside>
  );
}