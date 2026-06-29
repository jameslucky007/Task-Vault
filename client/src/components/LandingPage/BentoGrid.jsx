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
  Menu,
  Home,
  User,
  Plus,
} from "lucide-react";
import Image from "next/image";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
const days = ["M", "T", "W", "T", "F", "S", "S"];

const grid = [
  [1, 0.7, 0.4, 1, 0.1, 0.1, 0.1],
  [1, 0.4, 0.2, 0.2, 0.7, 0.1, 0.1],
  [1, 0.7, 1, 0.7, 0.3, 0.1, 0.1],
  [1, 1, 0.4, 0.2, 0.2, 0.1, 0.1],
  [1, 0.3, 0.3, 0.2, 0.2, 0.1, 0.1],
  [1, 0.7, 0.3, 0.2, 0.2, 0.1, 0.1],
];

export default function HomePage() {
  return (
    <main
      id="features"
      className="w-full bg-[#09090b] text-white py-16 md:py-24 overflow-hidden relative border-b border-zinc-900"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* HERO */}
            <div className="bg-white border border-zinc-200 rounded-[28px] p-7 text-zinc-900 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* TEXT */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-7 h-7 bg-zinc-900 rounded-md flex items-center justify-center shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>

                    <span className="text-lg font-medium text-zinc-500">
                      Habit Tracker
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl leading-[0.95] font-bold tracking-[-1.5px] text-zinc-900">
                    Build habits.
                    <br />
                    Change your life.
                  </h1>

                  <p className="mt-5 text-base md:text-lg leading-[1.5] text-zinc-500 max-w-md">
                    Track your habits, manage your time and stay consistent
                    every day.
                  </p>
                </div>

                {/* GRID */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10" />
                    <div className="flex items-center gap-2">
                      {days.map((day, index) => (
                        <span
                          key={index}
                          className="text-[11px] font-medium w-5 text-center text-zinc-400"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {months.map((month, row) => (
                      <div key={month} className="flex items-center gap-3">
                        <span className="w-10 text-[11px] font-medium text-zinc-400">
                          {month}
                        </span>

                        <div className="flex gap-2">
                          {grid[row].map((item, col) => (
                            <div
                              key={col}
                              className="w-5 h-5 rounded-[6px] bg-zinc-900"
                              style={{
                                opacity: item,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
              <div className="border border-zinc-200 rounded-[28px] p-5 bg-white text-zinc-900 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <FeatureCard icon={<Activity size={28} />} title="Habits" />

                  <FeatureCard icon={<Clock3 size={28} />} title="Time" />

                  <FeatureCard
                    icon={<BarChart3 size={28} />}
                    title="Progress"
                  />

                  <FeatureCard icon={<Calendar size={28} />} title="Schedule" />

                  <FeatureCard
                    icon={<PieChart size={28} />}
                    title="Analytics"
                  />

                  <FeatureCard icon={<Settings size={28} />} title="Settings" />
                </div>
              </div>

              {/* STORE */}
              <div className="bg-white border border-zinc-200 rounded-[28px] p-6 text-zinc-900 flex flex-col gap-4 justify-center shadow-lg">
                <h2 className="text-lg font-medium text-zinc-900">
                  Download this app
                </h2>
                <StoreButton
                  icon={
                    <Image
                      src="/apple-logo.svg"
                      alt="Apple Icon"
                      width={24}
                      height={24}
                    />
                  }
                  title="Download on the"
                  subtitle="App Store"
                />

                <div className="h-[1px] bg-zinc-200 my-1" />

                <StoreButton
                  icon={
                    <Image
                      src="/play-store-logo.svg"
                      alt="Google Play Icon"
                      width={24}
                      height={24}
                    />
                  }
                  title="GET IT ON"
                  subtitle="Google Play"
                />
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex justify-center xl:justify-end">
            <div className="w-[300px] h-[640px] rounded-[48px] border-[8px] border-zinc-800 bg-[#f4f4f5] overflow-hidden relative shadow-2xl">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20" />

              {/* STATUS */}
              <div className="px-5 pt-5 flex justify-between text-zinc-900 text-xs font-semibold">
                <span>9:41</span>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 border border-zinc-900 rounded-sm" />
                </div>
              </div>

              <div className="px-5 pt-5 pb-4 h-full flex flex-col justify-between">
                <div>
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[18px] font-bold text-zinc-900">
                      Today
                    </h2>

                    <Menu className="text-zinc-900 w-5 h-5" />
                  </div>

                  {/* PROGRESS */}
                  <div className="bg-white rounded-[22px] p-4 border border-zinc-200 mb-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      {/* CIRCLE */}
                      <div className="relative w-16 h-16">
                        <svg
                          className="w-16 h-16 -rotate-90"
                          viewBox="0 0 120 120"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="#e4e4e7"
                            strokeWidth="10"
                            fill="none"
                          />

                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="black"
                            strokeWidth="10"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="314"
                            strokeDashoffset="69"
                          />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-zinc-900">
                          78%
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-zinc-400">
                          Daily Progress
                        </p>

                        <p className="text-base font-bold text-zinc-900 mt-0.5">
                          Great job!
                        </p>

                        <p className="text-zinc-500 text-xs mt-0.5">
                          Keep it up.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* HABITS */}
                  <div>
                    <h3 className="text-zinc-900 font-bold text-base mb-3">
                      Habits
                    </h3>

                    <div className="space-y-2.5">
                      <HabitItem
                        icon={<Dumbbell size={16} />}
                        title="Workout"
                      />

                      <HabitItem
                        icon={<BookOpen size={16} />}
                        title="Read Book"
                      />

                      <HabitItem
                        icon={<GlassWater size={16} />}
                        title="Drink Water"
                      />

                      <HabitItem
                        icon={<Flower2 size={16} />}
                        title="Meditate"
                      />
                    </div>
                  </div>
                </div>

                {/* NAVBAR */}
                <div className="mt-4 bg-white border border-zinc-200 rounded-[22px] px-5 py-3 flex items-center justify-between shadow-md">
                  <Home className="text-zinc-900 w-5 h-5" />
                  <BarChart3 className="text-zinc-400 w-5 h-5" />
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center -mt-7 shadow-md shadow-black/20">
                    <Plus className="text-white w-5 h-5" />
                  </div>
                  <Calendar className="text-zinc-400 w-5 h-5" />
                  <User className="text-zinc-400 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div className="border border-zinc-200 bg-zinc-50 text-zinc-950 rounded-[20px] aspect-square flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300 cursor-pointer shadow-sm">
      <div className="text-zinc-800">{icon}</div>
      <p className="text-sm md:text-base font-semibold">{title}</p>
    </div>
  );
}

function StoreButton({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-300 cursor-pointer shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <p className="text-[11px] text-zinc-500 font-medium">{title}</p>
          <p className="text-lg md:text-xl font-bold leading-none mt-1 text-zinc-950">
            {subtitle}
          </p>
        </div>
      </div>
      <span className="text-xl text-zinc-400">→</span>
    </div>
  );
}

function HabitItem({ icon, title }) {
  return (
    <div className="bg-white rounded-[18px] border border-zinc-200 px-4 py-3.5 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-zinc-700">{icon}</div>
        <span className="text-zinc-800 text-sm font-bold">{title}</span>
      </div>
      <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shadow-sm">
        <Check className="text-white w-4 h-4" />
      </div>
    </div>
  );
}
