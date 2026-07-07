"use client";

import {
  Check,
  Activity,
  Clock3,
  BarChart3,
  Calendar,
  PieChart,
  Settings,
  BookOpen,
  Dumbbell,
  GlassWater,
  Flower2,
  Home,
  User,
  Plus,
  Wifi,
  Signal,
  BatteryFull,
} from "lucide-react";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const daysLabel = ["Mon", "", "Wed", "", "Fri", "", "Sun"];
const monthsLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Generate a 7x24 grid (7 days, 24 weeks/columns)
const generateInitialGrid = () => {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 30 }, () => Math.random() > 0.7)
  );
};

export default function HomePage() {
  const [grid, setGrid] = useState(generateInitialGrid());
  const [currentDate, setCurrentDate] = useState("Monday, Jul 6");
  const [currentYear, setCurrentYear] = useState("2026");

  // Dynamically fetch and format the current date on load
  useEffect(() => {
    const date = new Date();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }).format(date)
    );
    setCurrentYear(date.getFullYear().toString());
  }, []);

  // Function to toggle grid cells between black and white
  const toggleCell = (rIndex: number, cIndex: number) => {
    const newGrid = [...grid];
    newGrid[rIndex] = [...newGrid[rIndex]];
    newGrid[rIndex][cIndex] = !newGrid[rIndex][cIndex];
    setGrid(newGrid);
  };

  return (
    <main
      id="features"
      className="w-full min-h-screen bg-[#09090b] text-white py-12 md:py-24 overflow-hidden relative border-b border-zinc-900 font-sans"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-6 items-stretch justify-center">
          
          {/* LEFT SIDE: Main Dashboard */}
          <div className="w-full xl:flex-1 flex flex-col gap-6">
            
            {/* HERO CARD */}
            <div className="bg-white border border-zinc-200 rounded-[32px] p-8 md:p-10 text-zinc-900 shadow-2xl flex flex-col gap-2">
              
              {/* TEXT SECTION */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[13px] font-bold text-zinc-400 tracking-wide uppercase">
                    Habit Tracker
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-[46px] leading-[1.05] font-black tracking-tight text-zinc-950">
                  Build habits.<br />
                  <span className="text-zinc-400">Change your life.</span>
                </h1>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-500 font-medium max-w-lg">
                  Track your habits, manage your time and stay consistent
                  every day with visual progress.
                </p>
              </div>

              {/* STATS & DATE WIDGET */}
  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mt-4 mb-4">
  {/* Stats Group */}
  <div className="flex flex-wrap items-center gap-4">
    <StatBox number="12" label="Current Streak" />
    <StatBox number="24" label="Best Streak" />
    <StatBox number="49" label="Total Days"/>
  </div>

  {/* Date Display (Exact StatBox Green Design) */}
  <div className="bg-black text-white border-[3px] border-zinc-950 rounded-[14px] px-4 py-2 flex flex-col items-end justify-center self-start xl:self-auto min-w-[220px] shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-transform hover:-translate-y-1 hover:shadow-[4px_6px_0px_0px_rgba(24,24,27,1)] duration-200 cursor-default">
    <span className="text-xl md:text-2xl font-black tracking-tight">
      {currentDate}
    </span>
    <span className="text-sm font-bold mt-1 uppercase tracking-widest text-white/90">
      {currentYear}
    </span>
  </div>
</div>

              {/* INTERACTIVE GRID SECTION */}
              <div className="pt-8 border-t border-zinc-100">
                <div className="flex overflow-x-auto pb-4 no-scrollbar">
                  <div className="flex min-w-max gap-3">
                    
                    {/* Y-Axis: Days */}
                    <div className="flex flex-col gap-[6px] pt-[26px]">
                      {daysLabel.map((day, i) => (
                        <div
                          key={i}
                          className="h-[18px] text-[11px] leading-[18px] font-bold text-zinc-400 w-7 text-right pr-2"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Grid Body */}
                    <div>
                      {/* X-Axis: Months */}
                      <div className="flex mb-2">
                        {monthsLabel.map((month, i) => (
                          <div
                            key={i}
                            className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider"
                            style={{ width: "96px" }} 
                          >
                            {month}
                          </div>
                        ))}
                      </div>

                      {/* Cells */}
                      <div className="flex flex-col gap-[6px]">
                        {grid.map((row, rIndex) => (
                          <div key={rIndex} className="flex gap-[6px]">
                            {row.map((isActive, cIndex) => (
                              <button
                                key={cIndex}
                                onClick={() => toggleCell(rIndex, cIndex)}
                                className={`w-[18px] h-[18px] rounded-[4px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 ${
                                  isActive
                                    ? "bg-zinc-900 border border-zinc-900 scale-105 shadow-sm"
                                    : "bg-white border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                                }`}
                                aria-label={`Toggle habit for day ${rIndex} week ${cIndex}`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* RIGHT SIDE: PHONE MOCKUP */}
          <div className="w-full xl:w-[360px] flex justify-center mt-8 xl:mt-0 shrink-0">
            <div className="w-[340px] h-[680px] rounded-[56px] border-[12px] border-zinc-900 bg-[#f8f8f9] overflow-hidden relative shadow-2xl">
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full z-20" />

              {/* STATUS BAR WITH BATTERY */}
              <div className="px-7 pt-5 flex justify-between items-center text-zinc-900 text-[15px] font-bold z-10 relative">
                <span>9:41</span>
                <div className="flex items-center gap-1.5 text-zinc-900">
                  <Signal className="w-4 h-4" />
                  <Wifi className="w-4 h-4" />
                  <BatteryFull className="w-6 h-6" />
                </div>
              </div>

              <div className="px-6 pt-8 pb-6 h-[calc(100%-48px)] flex flex-col justify-between overflow-y-auto no-scrollbar relative">
                <div className="pb-24">
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black text-zinc-950 tracking-tight">
                      Today
                    </h2>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-zinc-200 shadow-sm cursor-pointer hover:bg-zinc-50 transition-colors">
                      <User className="text-zinc-900 w-5 h-5" />
                    </div>
                  </div>

                  {/* PROGRESS WIDGET */}
                  <div className="bg-white rounded-[28px] p-3 border border-zinc-200 mb-5 shadow-sm">
                    <div className="flex items-center gap-6">
                      {/* CIRCLE */}
                      <div className="relative w-[72px] h-[65px] shrink-0">
                        <svg className="w-[72px] h-[72px] -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="50" stroke="#f4f4f5" strokeWidth="12" fill="none" />
                          <circle
                            cx="60" cy="60" r="50" stroke="#09090b" strokeWidth="12" fill="none"
                            strokeLinecap="round" strokeDasharray="314" strokeDashoffset="69"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-base font-black text-zinc-900">
                          78%
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                          Daily Progress
                        </p>
                        <p className="text-xl font-black text-zinc-950 leading-tight">
                          Great job!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* HABITS LIST */}
                  <div>
                    <h3 className="text-zinc-950 font-black text-xl mb-4 tracking-tight">
                      Habits
                    </h3>
                    <div className="space-y-3.5">
                      <HabitItem icon={<Dumbbell size={20} />} title="Workout" />
                      <HabitItem icon={<BookOpen size={20} />} title="Read Book" />
                      <HabitItem icon={<Flower2 size={20} />} title="Meditate" />
                    </div>
                  </div>
                </div>

                {/* BOTTOM NAVBAR (Fixed at bottom of phone) */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-zinc-200 rounded-[28px] px-6 py-4 flex items-center justify-between shadow-xl">
                  <Home className="text-zinc-900 w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
                  <BarChart3 className="text-zinc-400 w-4 h-4 cursor-pointer hover:text-zinc-900 transition-colors" />
                  
                  {/* FAB Button */}
                  <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center -mt-10 shadow-lg shadow-black/20 cursor-pointer hover:-translate-y-1 transition-transform">
                    <Plus className="text-white w-4 h-4" />
                  </div>
                  
                  <Calendar className="text-zinc-400 w-4 h-4 cursor-pointer hover:text-zinc-900 transition-colors" />
                  <User className="text-zinc-400 w-4 h-4 cursor-pointer hover:text-zinc-900 transition-colors" />
                </div>
              </div>

            </div>
          </div>

        </div>
            {/* BOTTOM ROW: EXACTLY 3 CARDS */}


    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-8">
      
      {/* CARD 1: CORE FEATURES */}
      <div className="bg-white border border-zinc-200 rounded-[32px] p-8 text-zinc-900 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[320px]">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-zinc-950 tracking-tight">
            Track Everything
          </h2>
          <p className="text-zinc-500 font-medium text-sm mt-1">
            All the tools you need in one place.
          </p>
        </div>
        
        {/* Adjusted to grid-cols-2 with smaller gaps to fit nicely under the header */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          {/* Note: Update your <FeatureCard /> component to fit this tighter spacing if needed, 
              or use this raw HTML version for immediate results */}
          {[
            { icon: <Activity size={18} />, title: "Habits" },
            { icon: <Clock3 size={18} />, title: "Time" },
            { icon: <BarChart3 size={18} />, title: "Progress" },
            { icon: <Calendar size={18} />, title: "Schedule" },
            { icon: <PieChart size={18} />, title: "Analytics" },
            { icon: <Settings size={18} />, title: "Settings" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 transition-colors text-zinc-700 font-semibold text-sm">
              <span className="text-zinc-400">{item.icon}</span>
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* CARD 2: WRITE NOTES (App-like Interface) */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group h-full min-h-[320px] relative overflow-hidden">
        <div className="mb-4 relative z-10">
          <h2 className="text-2xl font-black text-zinc-950 tracking-tight">
            Fast Note-taking
          </h2>
          <p className="text-zinc-500 font-medium text-sm mt-1">
            Jot down your thoughts instantly.
          </p>
        </div>
        
        {/* Editor look: White inset box on a gray background */}
        <div className="flex-1 flex flex-col relative z-10">
          <textarea 
            className="w-full flex-1 resize-none bg-white border border-zinc-200 rounded-2xl p-5 outline-none text-zinc-700 placeholder:text-zinc-400 font-medium text-base leading-relaxed caret-black focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200/50 transition-all shadow-sm"
            placeholder="Type your brilliant idea here..."
          ></textarea>
        </div>
      </div>

      {/* CARD 3: CROSS PLATFORM (Dark Mode to anchor the grid visually) */}
      <div className="bg-white border border-zinc-800 rounded-[32px] p-8 flex flex-col justify-between shadow-xl h-full min-h-[320px]">
        <div>
          <h2 className="text-2xl font-black text-black tracking-tight">
            Cross-Platform
          </h2>
          <p className="text-zinc-400 font-medium text-sm mt-1">
            Available seamlessly on all devices.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 mt-6">
          {/* Custom dark-mode store buttons */}
          <button className="flex items-center gap-4 p-4 w-full bg-white border border-zinc-800 rounded-2xl transition-colors group text-left">
            <FaApple width={40} height={40} className="invert" />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Download on the</p>
              <p className="text-black font-bold text-lg leading-none mt-1">App Store</p>
            </div>
            <span className="text-zinc-600  transition-colors">→</span>
          </button>

          <button className="flex items-center gap-4 p-4 w-full bg-white border border-zinc-800 rounded-2xl transition-colors group text-left">
             <IoLogoGooglePlaystore className="invert" width={40} height={40} />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Get it on</p>
              <p className="text-black font-bold text-lg leading-none mt-1">Google Play</p>
            </div>
            <span className="text-zinc-600  transition-colors">→</span>
          </button>
        </div>
      </div>

    </div>
      </div>
    </main>
  );
}

// Subcomponents

interface StatBoxProps {
  number: string;
  label: string;
  variant?: "default" | "green";
}

function StatBox({ number, label, variant = "default" }: StatBoxProps) {
  const isGreen = variant === "green";
  return (
    <div
      className={`
        border-[3px] border-zinc-950 rounded-[14px] p-2 md:px-3 md:py-2 min-w-[100px] md:min-w-[110px]
        shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex flex-col justify-center transition-transform hover:-translate-y-1 hover:shadow-[4px_6px_0px_0px_rgba(24,24,27,1)] duration-200
        ${isGreen ? "bg-black text-white" : "bg-white text-zinc-950"}
      `}
    >
      <span className="text-3xl md:text-4xl font-black leading-none tracking-tight">
        {number}
      </span>
      <span
        className={`text-[9px] md:text-[10px] font-bold tracking-widest mt-1.5 md:mt-2 uppercase ${
          isGreen ? "text-white/90" : "text-zinc-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function FeatureCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="border border-zinc-100 bg-zinc-50/50 text-zinc-900 rounded-[24px] h-full min-h-[100px] flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300 cursor-pointer shadow-sm group">
      <div className="text-zinc-400 group-hover:text-black transition-colors group-hover:scale-110 duration-300">
        {icon}
      </div>
      <p className="text-sm md:text-base font-bold tracking-tight text-zinc-700 group-hover:text-zinc-950 transition-colors">
        {title}
      </p>
    </div>
  );
}

function StoreButton({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-[24px] bg-zinc-50/80 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300 cursor-pointer shadow-sm group">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-[18px] bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">{title}</p>
          <p className="text-lg xl:text-xl font-black leading-none mt-1.5 text-zinc-950 tracking-tight">
            {subtitle}
          </p>
        </div>
      </div>
      <span className="text-2xl text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all">
        →
      </span>
    </div>
  );
}

function HabitItem({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="bg-white rounded-[24px] border border-zinc-100 p-2 pr-5 flex items-center justify-between shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-[18px] bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-colors">
          {icon}
        </div>
        <span className="text-zinc-900 text-base font-bold tracking-tight">{title}</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shadow-inner group-hover:bg-black group-hover:scale-110 transition-all">
        <Check className="text-transparent group-hover:text-white w-4 h-4 transition-colors" strokeWidth={4} />
      </div>
    </div>
  );
}