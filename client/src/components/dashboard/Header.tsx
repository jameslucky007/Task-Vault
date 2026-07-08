import { Search, Bell, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-black">Hi, Lucky</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
          <Plus className="h-4 w-4" /> Create
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
          <Search className="h-5 w-5 text-black" />
        </button>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
          <Bell className="h-5 w-5 text-black" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-black"></span>
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-gray-200">
          <img src="/api/placeholder/40/40" alt="User Avatar" className="h-full w-full object-cover" />
        </div>
      </div>
    </header>
  );
}