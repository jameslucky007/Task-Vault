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
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {/* HERO */}
            <div className="bg-[#f5f5f5] rounded-[28px] p-7 text-black">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* TEXT */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>

                    <span className="text-lg font-medium">
                      Habit Tracker
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl leading-[0.95] font-bold tracking-[-1.5px]">
                    Build habits.
                    <br />
                    Change your life.
                  </h1>

                  <p className="mt-5 text-base md:text-lg leading-[1.5] text-black/80 max-w-md">
                    Track your habits, manage your time and stay consistent
                    every day.
                  </p>
                </div>

                {/* GRID */}
                <div className="pt-2">
                  {/* GRID HEADER */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10" />

                    <div className="flex items-center gap-2">
                      {days.map((day, index) => (
                        <span
                          key={index}
                          className="text-[11px] font-medium w-5 text-center text-black/70"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {months.map((month, row) => (
                      <div
                        key={month}
                        className="flex items-center gap-3"
                      >
                        <span className="w-10 text-[11px] font-medium text-black/60">
                          {month}
                        </span>

                        <div className="flex gap-2">
                          {grid[row].map((item, col) => (
                            <div
                              key={col}
                              className="w-5 h-5 rounded-[6px] bg-black"
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

            {/* BOTTOM */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-5">
              {/* FEATURES */}
              <div className="border border-black/10 rounded-[28px] p-5 bg-white text-black">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <FeatureCard
                    icon={<Activity size={28} />}
                    title="Habits"
                  />

                  <FeatureCard
                    icon={<Clock3 size={28} />}
                    title="Time"
                  />

                  <FeatureCard
                    icon={<BarChart3 size={28} />}
                    title="Progress"
                  />

                  <FeatureCard
                    icon={<Calendar size={28} />}
                    title="Schedule"
                  />

                  <FeatureCard
                    icon={<PieChart size={28} />}
                    title="Analytics"
                  />

                  <FeatureCard
                    icon={<Settings size={28} />}
                    title="Settings"
                  />
                </div>
              </div>

              {/* STORE */}
              <div className="bg-[#f5f5f5] rounded-[28px] p-6 text-black flex flex-col justify-between">
                <StoreButton
                  icon=""
                  title="Download on the"
                  subtitle="App Store"
                />

                <div className="h-[1px] bg-black/10 my-5" />

                <StoreButton
                  icon="▶"
                  title="GET IT ON"
                  subtitle="Google Play"
                />
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex justify-center xl:justify-end">
            <div className="w-[300px] h-[640px] rounded-[48px] border-[8px] border-[#2a2a2a] bg-[#f6f6f6] overflow-hidden relative shadow-2xl">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20" />

              {/* STATUS */}
              <div className="px-5 pt-5 flex justify-between text-black text-xs font-medium">
                <span>9:41</span>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 border border-black rounded-sm" />
                </div>
              </div>

              <div className="px-5 pt-5 pb-4 h-full flex flex-col">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-[18px] font-semibold text-black">
                    Today
                  </h2>

                  <Menu className="text-black w-5 h-5" />
                </div>

                {/* PROGRESS */}
                <div className="bg-white rounded-[22px] p-4 border border-black/5 mb-5">
                  <div className="flex items-center gap-4">
                    {/* CIRCLE */}
                    <div className="relative w-20 h-20">
                      <svg
                        className="w-20 h-20 -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#e5e5e5"
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

                      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
                        78%
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-black">
                        Daily Progress
                      </p>

                      <p className="text-lg font-semibold text-black mt-1">
                        Great job!
                      </p>

                      <p className="text-black/70 text-sm mt-1">
                        Keep it up.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HABITS */}
                <div className="flex-1">
                  <h3 className="text-black font-semibold text-lg mb-4">
                    Habits
                  </h3>

                  <div className="space-y-3">
                    <HabitItem
                      icon={<Dumbbell size={18} />}
                      title="Workout"
                    />

                    <HabitItem
                      icon={<BookOpen size={18} />}
                      title="Read Book"
                    />

                    <HabitItem
                      icon={<GlassWater size={18} />}
                      title="Drink Water"
                    />

                    <HabitItem
                      icon={<Flower2 size={18} />}
                      title="Meditate"
                    />
                  </div>
                </div>

                {/* NAVBAR */}
                <div className="mt-4 bg-white rounded-[22px] border border-black/5 px-5 py-3 flex items-center justify-between">
                  <Home className="text-black w-5 h-5" />

                  <BarChart3 className="text-black/60 w-5 h-5" />

                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center -mt-7">
                    <Plus className="text-white w-5 h-5" />
                  </div>

                  <Calendar className="text-black/60 w-5 h-5" />

                  <User className="text-black/60 w-5 h-5" />
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
    <div className="border border-black/10 bg-white text-black rounded-[20px] aspect-square flex flex-col items-center justify-center gap-3">
      <div className="text-black">{icon}</div>

      <p className="text-sm md:text-base font-medium">
        {title}
      </p>
    </div>
  );
}

function StoreButton({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center text-2xl">
          {icon}
        </div>

        <div>
          <p className="text-[11px] text-black/70">
            {title}
          </p>

          <p className="text-lg md:text-2xl font-semibold leading-none mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <span className="text-xl">→</span>
    </div>
  );
}

function HabitItem({ icon, title }) {
  return (
    <div className="bg-white rounded-[18px] border border-black/5 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-black">{icon}</div>

        <span className="text-black text-sm font-medium">
          {title}
        </span>
      </div>

      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <Check className="text-white w-4 h-4" />
      </div>
    </div>
  );
}