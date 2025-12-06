'use client'
import {
  Sparkles,
  Brain,
  BarChart3,
  Timer,
  Repeat,
  AlarmClock,
  Laptop,
  Smartphone,
  Cloud,
} from "lucide-react";

const features = [
  { icon: Sparkles, label: "Smart Tasks" },
  { icon: Brain, label: "Task Memory" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Timer, label: "Pomodoro" },
  { icon: Repeat, label: "Auto-Repeat" },
  { icon: AlarmClock, label: "Time Anchors" },
  { icon: Laptop, label: "Context Mode" },
  { icon: Smartphone, label: "Cross-Device" },
  { icon: Cloud, label: "Offline Sync" },
];

export default function FeatureSlider() {
  const loop = [...features, ...features];

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <div className="mx-auto flex w-full items-center gap-6 px-4">
        <div className="relative flex-1 w-full overflow-hidden">
          <div className="marquee-track flex gap-6 animate-marquee">
            {loop.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 shrink-0 rounded-full bg-white/10 border border-white/20 px-5 py-2 backdrop-blur-md hover:bg-white/20 transition"
              >
                <item.icon size={18} className="text-white" />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
