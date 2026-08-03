import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  CheckSquare,
  BarChart2,
  Folder,
  Settings,
  NotebookPen,
} from "lucide-react";

const workspace = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Calendar",
    href: "/dashboard/grid",
    icon: Calendar,
  },
  {
    title: "My Tasks",
    href: "#",
    icon: CheckSquare,
  },
  {
    title: "Documents",
    href: "#",
    icon: Folder,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: NotebookPen,
  },
];

const projects = [
  "Series B 2026",
  "Acquisition NorthStar",
  "LP Update Q1",
  "Diligence Project Atlas",
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-[280px] shrink-0 flex-col border-r border-zinc-200 bg-[#F7F6F3] px-5 py-8">

      {/* Logo */}
      <Link
        href="/dashboard"
        className="mb-12 flex items-center gap-3"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={34}
          height={34}
        />

        <span className="text-[28px] font-light tracking-tight text-zinc-900">
          Grid Tick
        </span>
      </Link>

      {/* Workspace */}
      <div>
        <p className="mb-5 text-[12px] uppercase tracking-[0.18em] text-zinc-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {workspace.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] transition

                ${
                  item.active
                    ? "bg-black text-white"
                    : "text-zinc-700 hover:bg-zinc-200/60"
                }
                `}
              >
                <Icon size={17} strokeWidth={1.8} />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}

      <div className="mt-auto pt-10">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] text-zinc-700 transition hover:bg-zinc-200/60"
        >
          <Settings size={17} strokeWidth={1.8} />

          Settings
        </Link>
      </div>
    </aside>
  );
}