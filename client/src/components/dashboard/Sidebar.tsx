"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Calendar,
  CheckSquare,
  Folder,
  NotebookPen,
  Search,
  Bell,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Moon,
  LogOut,
  HeartHandshake,
} from "lucide-react";

const menuItems = [
  {
    title: "Search",
    href: "/dashboard/search",
    icon: Search,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Calendar",
    href: "/dashboard/grid",
    icon: Calendar,
  },
  {
    title: "My Tasks",
    href: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: Folder,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: NotebookPen,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    badge: true,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <aside
      className={`hidden md:flex h-screen flex-col border-r border-zinc-200 bg-[#f4f4f6] transition-all duration-300 ease-in-out ${
        collapsed ? "w-[88px]" : "w-[280px]"
      }`}
    >
      {/* overflow-hidden lagaya hai aur py-4 kiya hai taaki scrollbar na aaye aur sab fit ho */}
      <div className="flex h-full flex-col px-4 py-4 overflow-hidden">
        
        {/* =========================
              LOGO & TOGGLE
        ========================== */}
        <div className="mb-4 flex items-center justify-between px-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 overflow-hidden"
          >
            <Image
              src="/logo.svg"
              width={28}
              height={28}
              alt="Grid Tick"
              priority
              className="shrink-0"
            />

            {!collapsed && (
              <h1 className="whitespace-nowrap text-[20px] font-bold tracking-tight text-zinc-900">
                Grid Tick
              </h1>
            )}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-1.5 text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-900"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} strokeWidth={1.5} />
            ) : (
              <PanelLeftClose size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* =========================
              MAIN NAVIGATION
        ========================== */}
        {/* flex-1 ki wajah se ye available space lega, aur baaki items niche push honge */}
        <nav className="flex-1 space-y-1">
          {!collapsed && (
            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Workspace
            </p>
          )}

          {menuItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-200 ${
                  active
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} strokeWidth={active ? 2 : 1.75} />
                  {!collapsed && (
                    <span className={`text-[14px] ${active ? "font-semibold" : "font-medium"}`}>
                      {item.title}
                    </span>
                  )}
                </div>

                {!collapsed && item.badge && (
                  <span className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500"></span>
                )}
                
                {collapsed && item.badge && (
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 border-2 border-[#f4f4f6]"></span>
                )}

                {collapsed && (
                  <div className="pointer-events-none absolute left-[76px] z-50 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                    {item.title}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* =========================
              BOTTOM SECTION
        ========================== */}
        <div className="mt-2 flex flex-col gap-3">
          
          {/* SUPPORT CARD */}
          {!collapsed && (
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <HeartHandshake className="text-zinc-900" size={18} strokeWidth={2} />
                <h3 className="text-[14px] font-bold text-zinc-900 flex items-center gap-2">
                  Support Us
                </h3>
              </div>
              
              <p className="mb-3 text-[12px] leading-snug text-zinc-500">
                Help us build more <span className="font-bold text-zinc-900">productivity tools.</span>
              </p>

              <button className="w-full rounded-xl bg-zinc-900 py-2 text-[13px] font-semibold text-white transition hover:bg-zinc-800">
                Donate Now
              </button>
            </div>
          )}

          {/* BOTTOM ACTIONS */}
          <div className="space-y-0.5">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`group relative flex w-full items-center justify-between rounded-xl px-3 py-2 text-zinc-600 transition hover:bg-zinc-200/50 hover:text-zinc-900 ${collapsed ? "justify-center" : ""}`}
            >
              <div className="flex items-center gap-3">
                <Moon size={18} strokeWidth={1.75} />
                {!collapsed && <span className="text-[14px] font-medium">Dark Mode</span>}
              </div>
              {!collapsed && (
                <div className={`flex h-5 w-9 items-center rounded-full p-0.5 transition-colors duration-200 ${isDarkMode ? "bg-zinc-900" : "bg-zinc-300"}`}>
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform duration-200 ${isDarkMode ? "translate-x-4" : "translate-x-0"}`}></div>
                </div>
              )}
              {collapsed && (
                <div className="pointer-events-none absolute left-[76px] z-50 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                  Theme
                </div>
              )}
            </button>

            <Link
              href="/dashboard/settings"
              className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-zinc-600 transition hover:bg-zinc-200/50 hover:text-zinc-900 ${collapsed ? "justify-center" : ""}`}
            >
              <Settings size={18} strokeWidth={1.75} />
              {!collapsed && <span className="text-[14px] font-medium">Settings</span>}
              {collapsed && (
                <div className="pointer-events-none absolute left-[76px] z-50 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                  Settings
                </div>
              )}
            </Link>

            <button className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-zinc-600 transition hover:bg-zinc-200/50 hover:text-red-500 ${collapsed ? "justify-center" : ""}`}>
              <LogOut size={18} strokeWidth={1.75} />
              {!collapsed && <span className="text-[14px] font-medium">Logout</span>}
              {collapsed && (
                <div className="pointer-events-none absolute left-[76px] z-50 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                  Logout
                </div>
              )}
            </button>
          </div>

          <div className="h-[1px] w-full bg-zinc-200"></div>

          {/* PROFILE SECTION */}
          <div className={`flex items-center rounded-2xl bg-white p-2 shadow-sm transition-all ${collapsed ? "justify-center" : "justify-between"}`}>
            <div className="flex items-center gap-3">
              <img
                src="/avatar.png"
                alt="Lucky"
                className="h-9 w-9 rounded-full object-cover"
              />
              {!collapsed && (
                <p className="text-[14px] font-bold text-zinc-900">
                  Lucky
                </p>
              )}
            </div>
            
            {!collapsed && (
              <button className="mr-1 rounded-lg p-1.5 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900">
                <MoreHorizontal size={18} />
              </button>
            )}
          </div>

        </div>
      </div>
    </aside>
  );
}