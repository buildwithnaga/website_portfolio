import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/profile';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-[#E2E8F0] dark:border-slate-800'
          : 'bg-[#F5F7FA]/90 dark:bg-slate-950/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group font-semibold text-[#172033] dark:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center text-[#2563EB] dark:text-blue-400 group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-base sm:text-lg tracking-tight font-bold text-[#172033] dark:text-white">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#2563EB] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                      : 'text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Controls: Theme Toggle & Resume Shortcut & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Quick Resume Link (Desktop) */}
            <a
              href={personalInfo.resumePath}
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#172033] dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-blue-400 border border-[#E2E8F0] dark:border-slate-800 rounded-md bg-white dark:bg-slate-900 hover:bg-[#F5F7FA] transition-colors"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2 rounded-lg text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-[#E2E8F0] dark:hover:border-slate-700"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#64748B]" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 rounded-lg text-[#64748B] dark:text-slate-300 hover:text-[#172033] dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E8F0] dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-5 space-y-1 transition-all">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#2563EB] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60'
                    : 'text-[#172033] dark:text-slate-200 hover:bg-[#F5F7FA] dark:hover:bg-slate-800/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#E2E8F0] dark:border-slate-800">
            <a
              href={personalInfo.resumePath}
              download
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium bg-[#2563EB] text-white hover:bg-blue-700 transition-colors"
            >
              Download Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
