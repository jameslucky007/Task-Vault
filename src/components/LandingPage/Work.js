import React from "react";

const Work = () => {
  return (
    <>
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative">


          {/* LEFT SIDE CONTENT */}
          <div>
                  <h2 className="mb-5 text-4xl font-semibold">How It Works</h2>
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
              Step 1
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Bootstrap straight from your web app
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Copy and paste your web app url into ToDesktop. Customise your app design, 
              app icon and window frame UI with no code.
            </p>

            {/* CHECKLISTS */}
            <div className="grid grid-cols-2 gap-6 mt-6 text-gray-900 text-lg">

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Multiple windows</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Offline support</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Launch on startup</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Menubar / tray menus</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Customisable menus</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Tabs (Mac only)</span>
                </li>
              </ul>

            </div>
          </div>

          {/* RIGHT SIDE FLOATING UI CARD */}
          <div className="relative">
            <div className="absolute right-0 top-10 w-80 h-80 bg-white rounded-2xl shadow-xl border p-6 flex flex-col items-center justify-center">
              
              <div className="w-full h-full border-2 border-dashed rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-blue-500 text-3xl mb-2">⬆️</div>
                  <p className="text-blue-600 font-semibold">Upload your app icon</p>
                </div>
              </div>
            </div>

            {/* Background UI widget assets */}
            <div className="absolute right-40 top-0 bg-white shadow-lg rounded-xl p-4 text-gray-700 text-sm w-52">
              <p className="font-semibold">Windows controls</p>
              <ul className="mt-2 space-y-1">
                <li>Allow fullscreen</li>
                <li>Maximize</li>
                <li>Minimize</li>
              </ul>
            </div>

            <div className="absolute right-0 top-[-30px] bg-white shadow-lg rounded-xl p-4 text-gray-700 text-sm w-44">
              <div className="flex justify-between items-center mb-3">
                <span>Start in full-screen</span>
                <div className="h-5 w-10 bg-gray-300 rounded-full relative">
                  <div className="h-5 w-5 bg-black rounded-full absolute right-0"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span>Resizable</span>
                <div className="h-5 w-10 bg-blue-300 rounded-full relative">
                  <div className="h-5 w-5 bg-blue-600 rounded-full absolute right-0"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
