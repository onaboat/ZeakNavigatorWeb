'use client';
import { useState } from 'react';
import Image from 'next/image'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of the navbar in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'Features' },
    { id: 'mission', label: 'Mission' },
    { id: 'launch-promo', label: 'Launch' },
    { id: 'tokenomics', label: 'Tokenomics' },
    // { id: 'meme-assets', label: 'Meme Assets' },
    // { id: 'roadmap', label: 'Roadmap' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 z-50 border-b border-primary">
        <div className="navbar-start">
          <div>
            <div 
              role="button" 
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h8m-8 6h16"
                  } />
              </svg>
            </div>
          </div>
          <a 
            className="btn btn-ghost text-xl cursor-pointer p-2 hover:text-primary"
            onClick={() => scrollToSection('hero')}
          >
            <Image 
              src="/logos/zk.png" 
              alt="ZK Logo" 
              height={32}
              width={32}
              className="h-8"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer hover:text-primary hover:bg-transparent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn mr-4">Connect Wallet</a> */}
          <div className="flex gap-4 items-center">
            <a 
              href="https://telegram.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`
        fixed top-0 left-0 h-full w-1/2 bg-base-100 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        z-50
      `}>
        {/* Close Button - Top Right */}
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn btn-ghost btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Horizontal Line */}
        <div className="px-4">
          <div className="border-t border-base-200"></div>
        </div>

        {/* Logo and Connect Wallet Button */}
        <div className="flex flex-col gap-4 p-4">
          <a 
            className="btn btn-ghost text-xl p-2"
            onClick={() => scrollToSection('hero')}
          >
            <Image 
              src="/logos/zk.png" 
              alt="ZK Logo" 
              height={32}
              width={32}
              className="h-8"
            />
          </a>
          {/* <a className="btn">Connect Wallet</a> */}
        </div>

        {/* Mobile Menu Content */}
        <div className="p-4">
          <ul className="menu menu-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => scrollToSection(item.id)}
                  className="py-3 cursor-pointer hover:text-primary hover:bg-transparent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Add social icons to mobile menu */}
        <div className="p-4 flex gap-4">
          <a 
            href="https://telegram.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}