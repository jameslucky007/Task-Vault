import React from "react";

const BentoGrid = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f6f8] p-4 flex justify-center">
      <div
        className="
          grid 
          gap-5 
          max-w-6xl 
          w-full
          
          grid-cols-1     /* mobile */
          sm:grid-cols-2  /* tablets */
          lg:grid-cols-3  /* desktop */
        "
      >
        {/* Top-left big card */}
        <div
          className="
            bg-white rounded-3xl shadow-sm p-6 border border-gray-100
            flex flex-col justify-between
            sm:col-span-2      
            lg:col-span-2      
          "
        >
          <div className="flex gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-xl bg-gray-100"></div>
            <div className="w-12 h-12 rounded-xl bg-gray-100"></div>
            <div className="w-12 h-12 rounded-xl bg-gray-100"></div>
            <div className="w-12 h-12 rounded-xl bg-gray-100"></div>
          </div>

          <p className="text-lg font-medium mt-6">
            Note, Task, Whiteboard & more.
          </p>
          <p className="text-gray-500 text-sm">
            Manage your business end-to-end in our set of free native apps.
          </p>
        </div>

        {/* Top-right tall card */}
        <div
          className="
            bg-white rounded-3xl shadow-sm p-6 border border-gray-100
            sm:row-span-2
            lg:row-span-2
          "
        >
          <p className="text-lg font-medium">Built for speed.</p>
          <p className="text-gray-500 text-sm mb-4">
            Switch between apps in one stroke of a key.
          </p>

          <div className="mt-6 space-y-3">
            <div className="w-full h-20 bg-gray-100 rounded-2xl"></div>
            <div className="w-full h-20 bg-gray-100 rounded-2xl"></div>
            <div className="w-full h-20 bg-gray-100 rounded-2xl"></div>
            <div className="w-full h-20 bg-gray-100 rounded-2xl"></div>
          </div>
        </div>

        {/* Bottom-left small card */}
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
          <p className="text-lg font-medium">Switch between views</p>
          <p className="text-gray-500 text-sm">
            Table view, Kanban View, Tile View — covered.
          </p>
          <div className="mt-4 w-full h-24 bg-gray-100 rounded-2xl"></div>
        </div>

        {/* Bottom-middle small card */}
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
          <p className="text-lg font-medium">Auto-enrichment.</p>
          <p className="text-gray-500 text-sm">
            Maintain clean data using our AI engine.
          </p>

          <div className="mt-4 w-full h-24 bg-gray-100 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
