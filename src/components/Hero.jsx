import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft overlay for readability without blocking Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/80" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-none mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl text-gray-900">
              Generate images and videos with AI
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Minimal, modern creation tools for visual content. Interact with the grid, then start crafting.
            </p>
            <div className="pointer-events-auto mt-8 flex items-center justify-center gap-3">
              <a href="#create" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Start creating
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
