import React from 'react';

const DashboardPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto font-sans text-gray-900 pb-10">
      

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- ROW 1 --- */}
        
        {/* 1. Overall Information Card */}
        <div className="col-span-1 bg-[#1c1c1e] rounded-[2rem] p-6 text-white flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium text-gray-100">Overall Information</h3>
            <div className="flex gap-2 text-gray-400">
              <button><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></button>
              <button><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div>
              <div className="text-5xl font-semibold tracking-tighter">43</div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">Tasks done<br/>for all time</div>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div>
              <div className="text-2xl font-semibold">2</div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">projects are<br/>stopped</div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl p-4 text-center text-black flex flex-col items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center mb-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div></div>
              <div className="text-xl font-bold leading-none mb-1">28</div>
              <div className="text-[10px] text-gray-500 font-medium">Projects</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center text-black flex flex-col items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-dashed border-gray-400 mb-2"></div>
              <div className="text-xl font-bold leading-none mb-1">14</div>
              <div className="text-[10px] text-gray-500 font-medium">In Progress</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center text-black flex flex-col items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-black mb-2 flex items-center justify-center"><div className="w-2 h-2 bg-black rounded-full"></div></div>
              <div className="text-xl font-bold leading-none mb-1">11</div>
              <div className="text-[10px] text-gray-500 font-medium">Completed</div>
            </div>
          </div>
        </div>

        {/* 2. Weekly Progress Card */}
        <div className="col-span-1 bg-white rounded-[2rem] p-6 shadow-sm ring-1 ring-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-lg">Weekly progress</h3>
              <div className="flex gap-3 mt-2 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-black rounded-full"></div> Sport</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-300 rounded-full"></div> Study</span>
              </div>
            </div>
            <button className="text-gray-400"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></button>
          </div>
          {/* Abstract Chart Graphic */}
          <div className="flex-1 flex flex-col justify-end mt-4 relative">
             <div className="absolute top-4 right-8 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">+24%</div>
             <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible" preserveAspectRatio="none">
               <path d="M0,50 Q20,30 40,45 T80,30 T120,60 T160,20 T200,40" fill="none" stroke="#e5e7eb" strokeWidth="3" />
               <path d="M0,60 Q30,70 60,40 T100,50 T140,20 T180,30 T200,10" fill="none" stroke="black" strokeWidth="3" />
             </svg>
             <div className="flex justify-between w-full text-[10px] text-gray-400 font-medium mt-4 px-1">
               <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span>
               <span className="bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">S</span>
               <span>S</span>
             </div>
          </div>
        </div>

        {/* 3. Month Progress Card */}
        <div className="col-span-1 bg-white rounded-[2rem] p-6 shadow-sm ring-1 ring-gray-100 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">Month progress</h3>
              <p className="text-[10px] text-gray-500 font-medium mt-1">+20% compared to last month*</p>
            </div>
            <button className="text-gray-400"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></button>
          </div>
          
          <div className="flex-1 flex items-center justify-between mt-4 mb-6">
             <div className="space-y-2 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Sport</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div> Study</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-200 rounded-full"></div> Project</div>
             </div>
             <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                  <circle cx="50" cy="50" r="30" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">120%</div>
             </div>
          </div>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-[#1c1c1e] text-white flex items-center justify-center shrink-0 hover:bg-black transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
            <button className="flex-1 rounded-full border border-gray-200 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              Download Report <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>
        </div>

        {/* --- ROW 2 --- */}
        
        {/* 4. Month Goals Card */}
        <div className="col-span-1 bg-white rounded-[2rem] p-6 shadow-sm ring-1 ring-gray-100 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium text-lg">Month goals:</h3>
            <div className="flex items-center gap-2">
              <div className="text-xs font-bold w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">1/4</div>
              <button className="text-gray-400"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
            </div>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded bg-black flex items-center justify-center text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-sm font-semibold text-black">Read 2 books</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded border border-gray-300"></div>
              <span className="text-sm font-medium text-gray-400">Sports every day</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded border border-gray-300"></div>
              <span className="text-sm font-medium text-gray-400">Complete the course</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded border border-gray-300"></div>
              <span className="text-sm font-medium text-gray-400">Bend down with a parachute</span>
            </label>
          </div>
        </div>

        {/* 5. Tasks In Process Area */}
        <div className="col-span-1 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center px-2 mb-4">
            <h3 className="font-semibold text-lg">Task In process (2)</h3>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
               <span className="flex items-center gap-1 cursor-pointer">Sort by <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
               <div className="flex gap-2">
                 <button className="bg-gray-100 p-1 rounded"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button>
                 <button className="text-gray-400 p-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            {/* Task Card 1 */}
            <div className="bg-white rounded-3xl p-5 shadow-sm ring-1 ring-gray-100 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="text-2xl">🎁</div>
                <button className="text-gray-400"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 leading-snug">Buy Susan a gift for Bitherday</h4>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Today</span>
                  <button className="w-10 h-10 rounded-xl bg-[#1c1c1e] text-white flex items-center justify-center -mr-2 -mb-2 rounded-br-2xl hover:bg-black transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Task Card 2 */}
            <div className="bg-white rounded-3xl p-5 shadow-sm ring-1 ring-gray-100 flex flex-col justify-between relative">
              {/* Optional Popover Mockup (from image) */}
              <div className="absolute top-12 right-2 bg-[#1c1c1e] text-white text-xs rounded-xl p-2 w-28 shadow-lg z-10 hidden">
                 <div className="flex items-center gap-2 py-1"><span className="w-3 h-3 rounded bg-white"></span> Pin Note</div>
                 <div className="flex items-center gap-2 py-1">Edit</div>
                 <div className="flex items-center gap-2 py-1 text-red-400">Delete</div>
              </div>

              <div className="flex justify-between items-start">
                <div className="text-2xl text-gray-300"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"></path></svg></div>
                <button className="text-gray-400"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 leading-snug">Doctors appointment on Tuesday</h4>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">02.09.2023</span>
                  <button className="w-8 h-8 rounded-full bg-white ring-1 ring-gray-200 text-black flex items-center justify-center hover:bg-gray-50 transition-colors">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Add Task Button */}
            <button className="rounded-3xl border-2 border-dashed border-gray-300 bg-transparent p-5 flex items-center justify-center h-full text-gray-400 font-semibold hover:border-black hover:text-black transition-colors">
              + Add task
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default DashboardPage;