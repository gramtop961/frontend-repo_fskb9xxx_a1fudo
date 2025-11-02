import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} MinimalGen. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#create" className="hover:text-gray-900">Create</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
