import React from 'react';
import { LESSONS } from '../constants';
import { BookOpen, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Lessons() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Interaktiv Darslar</h2>
          <p className="text-slate-600">O'zingizga mos darajani tanlang va o'rganishni boshlang.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LESSONS.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-red-50 text-turkish-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-turkish-red group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded">
                  {lesson.level}
                </span>
                <div className="flex text-yellow-400">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{lesson.title}</h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                {lesson.description}
              </p>
              <Link 
                to={`/lessons/${lesson.id}`}
                className="flex items-center gap-2 text-turkish-red font-bold text-sm hover:gap-3 transition-all"
              >
                Darsni ko'rish <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
