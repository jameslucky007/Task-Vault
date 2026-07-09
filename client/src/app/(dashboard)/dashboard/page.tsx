import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ListTodo, 
  TrendingUp, 
  MoreHorizontal 
} from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    { 
      id: 1, 
      title: 'Total Tasks', 
      value: '142', 
      change: '+12%', 
      isPositive: true,
      icon: ListTodo 
    },
    { 
      id: 2, 
      title: 'Completed', 
      value: '98', 
      change: '+5%', 
      isPositive: true,
      icon: CheckCircle2 
    },
    { 
      id: 3, 
      title: 'Hours Tracked', 
      value: '38.5', 
      change: '-2%', 
      isPositive: false,
      icon: Clock 
    },
    { 
      id: 4, 
      title: 'Productivity Score', 
      value: '94%', 
      change: '+8%', 
      isPositive: true,
      icon: TrendingUp 
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8 font-sans">
      
      {/* Page Title (Optional if you already have it in a layout) */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h2>
        <p className="text-sm text-gray-500 mt-1">Here is whats happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.id} 
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-2xl">
                  <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>
                <button className="text-gray-400 hover:text-black transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              
              <div>
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    stat.isPositive 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Area (Charts / Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Activity Overview</h3>
            <select className="bg-gray-50 border-none text-sm font-medium text-gray-600 rounded-full px-4 py-2 focus:ring-0 cursor-pointer outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
            <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Chart visualization goes here
            </p>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm min-h-[400px]">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Tasks</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Update Design System</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}