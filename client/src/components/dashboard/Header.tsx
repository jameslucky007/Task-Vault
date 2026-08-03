import {
  Search,
  Bell,
  Plus,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-[#F7F7F8] px-8 py-5">

      {/* Left */}
      <div className="flex items-center gap-5">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Manage your tasks, notes and schedule.
          </p>
        </div>


      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Create */}
        <button className="flex h-11 items-center gap-2 rounded-xl bg-black px-5 text-sm font-medium text-white transition hover:bg-zinc-800">
          <Plus size={18} />
          Create
        </button>

        {/* Search */}
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-100">
          <Search size={18} />
        </button>

        {/* Notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-100">
          <Bell size={18} />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-full bg-white px-2 py-1 shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-100">
          <img
            src="/avatar.png"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />


        </button>

      </div>
    </header>
  );
}