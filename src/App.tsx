import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AITutor from './components/AITutor';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Dictionary from './pages/Dictionary';

function Home() {
  return (
    <>
      <Hero />
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nima uchun bizni tanlashadi?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              O'zbek va Turk tillarini o'rganishning eng zamonaviy va qulay usullarini taklif etamiz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI Repetitor', desc: 'Siz bilan 24/7 o\'zbek va turk tillarida gaplashadigan aqlli yordamchi.', icon: '🤖' },
              { title: 'Tizimli Darslar', desc: 'Grammatika va so\'z boyligini bosqichma-bosqich oshiring.', icon: '📚' },
              { title: 'Mashqlar', desc: 'Bilimingizni mustahkamlash uchun interaktiv testlar.', icon: '✍️' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonDetail />} />
            <Route path="/dictionary" element={<Dictionary />} />
          </Routes>
        </main>
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-turkish-red rounded-lg flex items-center justify-center text-white font-bold">
                  T
                </div>
                <span className="text-xl font-bold tracking-tight">
                  O'zbek va <span className="text-turkish-red">Turk</span>
                </span>
              </div>
              <div className="flex gap-8 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Biz haqimizda</a>
                <a href="#" className="hover:text-white transition-colors">Aloqa</a>
                <a href="#" className="hover:text-white transition-colors">Maxfiylik</a>
              </div>
              <p className="text-sm text-slate-500">
                © 2026 O'zbek va Turk Markazi. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </footer>
        <AITutor />
      </div>
    </Router>
  );
}
