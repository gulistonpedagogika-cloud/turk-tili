import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LESSONS } from '../constants';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function LessonDetail() {
  const { id } = useParams();
  const lesson = LESSONS.find(l => l.id === id);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Dars topilmadi</h2>
          <Link to="/lessons" className="text-turkish-red font-bold">Darslarga qaytish</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container mx-auto px-6">
          <Link to="/lessons" className="inline-flex items-center gap-2 text-slate-500 hover:text-turkish-red mb-6 transition-colors">
            <ArrowLeft size={18} /> Orqaga
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-red-50 text-turkish-red text-xs font-bold rounded-full uppercase">
                  {lesson.level}
                </span>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <Clock size={14} /> 15 daqiqa
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-900">{lesson.title}</h1>
            </div>
            <button className="px-6 py-3 bg-turkish-red text-white rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
              <CheckCircle size={20} /> Tamomlash
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 mt-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
          >
            <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
