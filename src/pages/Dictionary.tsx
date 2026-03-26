import React, { useState } from 'react';
import { WORDS } from '../constants';
import { Search, Volume2, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = WORDS.filter(word => 
    word.turkish.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.uzbek.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Turkcha-O'zbekcha Lug'at</h1>
            <p className="text-slate-600">Kerakli so'zni qidiring va yangi so'zlarni o'rganing.</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input
              type="text"
              placeholder="So'zni qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl shadow-sm border border-slate-100 focus:outline-none focus:ring-2 focus:ring-turkish-red/20 text-lg"
            />
          </div>

          {/* Word List */}
          <div className="space-y-4">
            {filteredWords.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-turkish-red/30 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-red-50 text-turkish-red rounded-xl flex items-center justify-center group-hover:bg-turkish-red group-hover:text-white transition-colors">
                    <Volume2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{word.turkish}</h3>
                    <p className="text-slate-500 text-sm">{word.uzbek}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                    {word.category}
                  </span>
                  <button className="p-2 text-slate-300 hover:text-turkish-red transition-colors">
                    <Bookmark size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
            
            {filteredWords.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400">Hech qanday so'z topilmadi.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
