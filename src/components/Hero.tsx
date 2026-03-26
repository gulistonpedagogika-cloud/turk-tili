import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Languages, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-turkish-red text-sm font-semibold mb-6">
                O'zbek va Turk tillarini o'rganish endi oson
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                O'zbek va Turk <br />
                <span className="text-turkish-red">Interaktiv</span> O'rganing
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl">
                Boshlang'ichdan yuqori darajagacha bo'lgan darslar, AI repetitor bilan suhbat va 
                qiziqarli mashqlar orqali o'zbek va turk tillarini tez va samarali o'zlashtiring.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/lessons" className="px-8 py-4 bg-turkish-red text-white rounded-xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all flex items-center gap-2">
                  Boshlash <ArrowRight size={20} />
                </Link>
                <Link to="/dictionary" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  Lug'at
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="bg-turkish-red/5 rounded-3xl p-8 border border-turkish-red/10">
                <img 
                  src="https://picsum.photos/seed/turkey/800/600" 
                  alt="Turkey" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Languages size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Eng ko'p so'zlar</p>
                  <p className="font-bold text-slate-900">5,000+</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Darslar soni</p>
                  <p className="font-bold text-slate-900">50+</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
