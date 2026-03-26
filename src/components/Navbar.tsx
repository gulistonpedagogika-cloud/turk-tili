import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, MessageSquare, Search, Home, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Asosiy', path: '/', icon: Home },
    { name: 'Darslar', path: '/lessons', icon: Book },
    { name: 'Lug\'at', path: '/dictionary', icon: Search },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-turkish-red rounded-xl flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            O'zbek va <span className="text-turkish-red">Turk</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-turkish-red",
                location.pathname === item.path ? "text-turkish-red" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button className="px-5 py-2.5 bg-turkish-red text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">
            Kirish
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors",
                    location.pathname === item.path ? "bg-red-50 text-turkish-red" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
              <button className="w-full py-3 bg-turkish-red text-white rounded-xl font-bold">
                Kirish
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
