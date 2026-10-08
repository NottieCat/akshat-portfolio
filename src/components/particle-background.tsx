import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),_rgba(0,0,0,1))]" />
      
      {/* Animated glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] animate-pulse-slow delay-1000" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-600/20 blur-[100px] animate-pulse-slow delay-500" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Stars layer - subtle overlay */}
      <div id="stars" className="opacity-30 mix-blend-screen" />
      <div id="stars2" className="opacity-20 mix-blend-screen" />
    </div>
  );
};

export default ParticleBackground;
