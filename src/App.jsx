import React from 'react';
import Hero from './components/Hero.jsx';
import GeneratorPanel from './components/GeneratorPanel.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-gray-900" />
            <span className="text-sm font-semibold tracking-tight">MinimalGen</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#create" className="hover:text-gray-900">Create</a>
            <a href="#" className="hover:text-gray-900">Docs</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <GeneratorPanel />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;
