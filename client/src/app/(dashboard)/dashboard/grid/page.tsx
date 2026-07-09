"use client";

import React, { useState, useMemo } from 'react';

const LifeCalendar = () => {
  // Defaulting to the date in your screenshot
  const [dob, setDob] = useState('2003-08-23');
  const [viewMode, setViewMode] = useState('weeks');
  
  // Standard baseline for visualization
  const lifeExpectancyYears = 80;

  const stats = useMemo(() => {
    if (!dob) return { total: 0, lived: 0 };

    const birthDate = new Date(dob);
    const today = new Date();
    
    // Calculate time differences
    const msLived = today.getTime() - birthDate.getTime();
    const daysLived = Math.max(0, Math.floor(msLived / (1000 * 60 * 60 * 24)));
    const weeksLived = Math.floor(daysLived / 7);
    const yearsLived = today.getFullYear() - birthDate.getFullYear() - 
      (today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);

    // Determine grid size based on selected mode
    let total = 0;
    let lived = 0;

    switch (viewMode) {
      case 'years':
        total = lifeExpectancyYears;
        lived = yearsLived;
        break;
      case 'weeks':
        total = lifeExpectancyYears * 52;
        lived = weeksLived;
        break;
      case 'days':
        total = lifeExpectancyYears * 365;
        lived = daysLived;
        break;
      default:
        break;
    }

    return { total, lived: Math.min(lived, total) };
  }, [dob, viewMode]);

  // Determine grid layout classes based on mode
  const getGridClass = () => {
    if (viewMode === 'years') return 'grid-cols-10 gap-2 sm:gap-4';
    if (viewMode === 'weeks') return 'grid-cols-[repeat(52,minmax(0,1fr))] gap-[2px] sm:gap-1';
    return 'grid-cols-[repeat(73,minmax(0,1fr))] gap-[1px] sm:grid-cols-[repeat(146,minmax(0,1fr))]';
  };

  // Determine box sizing based on mode
  const getBoxClass = (index: number) => {
    const isLived = index < stats.lived;
    const baseClass = 'aspect-square rounded-[1px] transition-colors duration-300';
    
    // Minimalist color scheme: Black for lived, light gray for unlived
    const colorClass = isLived 
      ? 'bg-neutral-900 shadow-sm' 
      : 'bg-neutral-200/60 border border-neutral-300/50';

    if (viewMode === 'years') return `${baseClass} ${colorClass} w-full rounded-sm`;
    if (viewMode === 'weeks') return `${baseClass} ${colorClass} w-full max-w-[12px]`;
    return `${baseClass} ${colorClass} w-[3px] sm:w-[4px]`; // Tiny boxes for days
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 p-8 md:p-16 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header & Controls */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Life in Perspective</h1>
            <p className="text-neutral-500 text-sm">Visualizing an 80-year lifespan.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-neutral-50 p-2 rounded-xl border border-neutral-100 shadow-sm">
            <input 
              type="date" 
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-white border border-neutral-200 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent cursor-pointer"
            />
            
            <div className="flex bg-neutral-200/50 p-1 rounded-lg">
              {['years', 'weeks', 'days'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-all ${
                    viewMode === mode 
                      ? 'bg-white text-neutral-900 shadow-sm' 
                      : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200/50'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full flex items-center justify-end gap-4 mb-6 text-xs font-medium text-neutral-500 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-neutral-900 rounded-[1px]"></div>
            <span>Time Lived ({stats.lived.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-neutral-200/60 border border-neutral-300/50 rounded-[1px]"></div>
            <span>Time Remaining</span>
          </div>
        </div>

        {/* The Grid */}
        <div className="w-full bg-neutral-50 p-6 md:p-10 rounded-2xl border border-neutral-100 shadow-sm flex justify-center overflow-x-auto">
          <div className={`grid ${getGridClass()} w-full max-w-4xl`}>
            {Array.from({ length: stats.total }).map((_, i) => (
              <div key={i} className={getBoxClass(i)} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LifeCalendar;