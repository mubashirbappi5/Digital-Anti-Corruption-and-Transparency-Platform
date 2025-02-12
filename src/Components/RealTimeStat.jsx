import React from "react";
import Marquee from "react-fast-marquee";

const RealTimeStat = () => {
  return (
    <div className="relative my-10">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">
         Real-Time Transparency Stats
      </h2>

      {/* Animated Background */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-10 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-opacity-30 bg-white blur-3xl rounded-full w-[300px] h-[300px] top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute inset-0 bg-opacity-30 bg-white blur-3xl rounded-full w-[200px] h-[200px] bottom-[-100px] right-[-100px] animate-pulse delay-1000"></div>

        <Marquee pauseOnHover gradient={true} gradientWidth={100} speed={50}>
          {[
            { value: 40, label: "Complaints Submitted" },
            { value: 8, label: "Complaints Resolved" },
            { value: 5, label: "Departments Involved" },
            { value: "20%", label: "Resolved Percentage" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glassmorphism-card w-64 p-6 rounded-lg shadow-xl text-center mx-4 transform hover:scale-105 transition-all duration-300 bg-white bg-opacity-20 backdrop-blur-lg border border-white/30"
            >
              <p className="text-5xl font-bold text-blue-700 dark:text-blue-300">
                {stat.value}
              </p>
              <h3 className="text-lg font-medium text-black dark:text-white mt-2">
                {stat.label}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RealTimeStat;
