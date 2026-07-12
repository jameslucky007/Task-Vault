import React from 'react';

const CheckIcon = ({ dark }) => (
  <svg
    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${dark ? 'text-white' : 'text-gray-900'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-5 h-5 opacity-70"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const Feature = ({ children, dark = false }) => (
  <div className="flex items-start gap-2">
    <CheckIcon dark={dark} />
    <span className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{children}</span>
  </div>
);

const Price = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Flexible plans for every<br />business
          </h1>
          <p className="text-gray-500 text-lg">
            Your product design partner<br />
            Unlock instant, world-class design with a simple monthly fee.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="inline-flex bg-gray-100 p-1 rounded-lg mb-12 border border-gray-200">
          <button className="px-6 py-1.5 text-sm font-medium bg-white rounded-md shadow-sm">
            All
          </button>
          <button className="px-6 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">
            Design
          </button>
          <button className="px-6 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">
            Development
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          
          {/* Card 1: Landing Page */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-2 flex flex-col">
            <div className="bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">
                Get a high quality landing page for your product.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">$1999</span>
                <span className="text-gray-500 text-sm">/fixed</span>
              </div>
              <button className="w-full bg-[#111111] hover:bg-black text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium transition-colors">
                Book a call
                <CalendarIcon />
              </button>
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <Feature>Design concepts</Feature>
                <Feature>Tailored solution</Feature>
                <Feature>Responsive design</Feature>
                <Feature>Revisions</Feature>
                <Feature>Up to 4 subpages</Feature>
                <Feature>Post-launch support</Feature>
              </div>
              
              <div className="mt-8 flex items-center gap-3">
                {/* Custom Toggle UI */}
                <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center p-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
                <span className="text-sm text-gray-500">Fast delivery (7 days)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Product Design */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-2 flex flex-col">
            <div className="bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
              {/* Subtle Gradient Background matching the design */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-transparent to-blue-50/80 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Product design</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">
                  Lets bring your idea to life.
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">$2999</span>
                  <span className="text-gray-500 text-sm">/fixed</span>
                </div>
                <button className="w-full bg-[#111111] hover:bg-black text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium transition-colors">
                  Book a call
                  <CalendarIcon />
                </button>
              </div>
            </div>
            
            <div className="p-8 flex-1">
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <Feature>Brainstorming</Feature>
                <Feature>Tailored solution</Feature>
                <Feature>UX-based strategy</Feature>
                <Feature>Design concepts</Feature>
                <Feature>Revisions</Feature>
                <Feature>Support</Feature>
                <Feature>On-time delivery</Feature>
                <Feature>Scaleable</Feature>
                <Feature>Async communication</Feature>
              </div>
            </div>
          </div>
          
        </div>

        {/* Card 3: Product Partnership (Full Width Dark) */}
        <div className="bg-[#1C1C1E] rounded-[32px] p-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white">Product Partnership</h3>
                <div className="flex items-center gap-2 bg-[#2C2C2E] px-3 py-1.5 rounded-full md:hidden">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-300">Limited availability</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-10 max-w-sm">
                Get full-product team, according to your needs. No long-term commitment.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">$3999</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
            </div>
            
            <button className="w-full md:w-fit px-12 bg-white text-black hover:bg-gray-100 rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium transition-colors">
              Book a call
              <CalendarIcon />
            </button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="hidden md:flex items-center gap-2 absolute top-0 right-0">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Limited availability</span>
            </div>
            
            <div className="mt-8 md:mt-16 flex flex-col gap-4">
              <Feature dark>Development lead</Feature>
              <Feature dark>Flexible communication</Feature>
              <Feature dark>No hire costs</Feature>
              <Feature dark>1 workstream</Feature>
              <Feature dark>Pause or resume anytime</Feature>
              <Feature dark>Revisions</Feature>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Price;