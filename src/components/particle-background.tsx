import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

export default ParticleBackground;
