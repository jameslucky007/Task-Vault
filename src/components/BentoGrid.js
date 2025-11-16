import React from "react";
import Image from "next/image";

const items = [
  {
    title: "Native Notifications",
    description:
      "We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
  },
  {
    title: "Auto Updates",
    description:
      "We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
  },
  {
    title: "Native Notifications",
    description:
      "We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
  },
  {
    title: "Auto Updates",
    description:
      "We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
  },
  {
    title: "Native Notifications",
    description:
      "We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
  },
  {
    title: "Auto Updates",
    description:
      "We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
  },
];

const BentoGrid = () => {
  return (
    <div className="w-full py-20 ">
      <h2 className="text-4xl font-bold mb-10 px-6">details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              group relative rounded-3xl p-8  bg-white transition-all 
              duration-500 shadow-sm hover:shadow-xl hover:scale-[1.02]
            "
          >
            {/* Gradient overlay on hover */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                transition-all duration-500 rounded-3xl
                bg-gradient-to-br from-[#fff1e9] via-[#f3e9ff] to-[#e8f4ff]
              "
            ></div>

            {/* Actual content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/google-calendar.svg"
                  width={50}
                  height={50}
                  alt="icon"
                  className="rounded-xl shadow-sm"
                />
                <div className="bg-white shadow-sm border rounded-xl px-4 py-2 text-gray-600">
                  New event! <br /> test@gmail.com
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="bg-white border shadow-sm text-gray-600 rounded-xl px-4 py-2 inline-flex items-center gap-2">
                <Image src="/refresh.svg" width={18} height={18} alt="icon" />
                Updated to latest version
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
