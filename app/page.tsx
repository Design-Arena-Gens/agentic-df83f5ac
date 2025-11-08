'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    type: 'title',
    title: 'SPACEGUARD AI',
    subtitle: 'AI that keeps space stations safe',
    team: 'Team Zentra - Vaibhav Kumar & Team',
    event: 'CodeAlchemy Hackathon 2025 | Duality AI Challenge #2',
    tagline: '"Detecting Safety. Securing Space."'
  },
  {
    id: 2,
    type: 'problem',
    title: 'Critical Safety Challenges in Space',
    points: [
      'Astronauts manually inspect oxygen tanks, fire extinguishers, and safety equipment',
      'Time-consuming process in mission-critical environments',
      'Human error risks increase with poor lighting and difficult angles',
      'Missing even one safety check can be catastrophic',
      'Current systems lack real-time monitoring capabilities'
    ]
  },
  {
    id: 3,
    type: 'solution',
    title: 'SpaceGuard AI - Automated Safety Detection',
    features: [
      {
        name: 'Real-time Detection',
        desc: '7 types of safety equipment'
      },
      {
        name: 'Adaptive Vision',
        desc: 'Works in any lighting or camera angle'
      },
      {
        name: 'Synthetic Training',
        desc: "Powered by Falcon's digital twin data"
      },
      {
        name: 'Edge Computing',
        desc: 'Optimized for space station deployment'
      }
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderSlide = (slide: typeof slides[0]) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-transparent"></div>
            <div className="absolute inset-0">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 3 + 'px',
                    height: Math.random() * 3 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    opacity: Math.random() * 0.7 + 0.3,
                    animation: `twinkle ${Math.random() * 3 + 2}s infinite`
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl text-gray-300 mb-12">{slide.subtitle}</p>
              <div className="space-y-4 text-xl text-gray-400">
                <p className="font-semibold text-blue-300">{slide.team}</p>
                <p>{slide.event}</p>
                <p className="text-2xl italic text-purple-300 mt-8">{slide.tagline}</p>
              </div>
            </motion.div>
          </div>
        );

      case 'problem':
        return (
          <div className="flex flex-col h-full px-24 py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-transparent"></div>
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 2 + 'px',
                    height: Math.random() * 2 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-6xl font-bold mb-12 text-red-400">THE PROBLEM</h2>
              <h3 className="text-4xl font-semibold mb-10 text-gray-200">{slide.title}</h3>
            </motion.div>
            <div className="flex-1 flex items-center relative z-10">
              <ul className="space-y-6 text-2xl">
                {slide.points?.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="text-red-400 mr-4 text-3xl">⚠</span>
                    <span className="text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="flex flex-col h-full px-24 py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/10 to-transparent"></div>
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 2 + 'px',
                    height: Math.random() * 2 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-6xl font-bold mb-12 text-green-400">OUR SOLUTION</h2>
              <h3 className="text-4xl font-semibold mb-10 text-gray-200">{slide.title}</h3>
            </motion.div>
            <div className="flex-1 grid grid-cols-2 gap-8 relative z-10">
              {slide.features?.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-105"
                >
                  <h4 className="text-3xl font-bold mb-3 text-blue-300">
                    {feature.name}
                  </h4>
                  <p className="text-xl text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="h-screen w-screen bg-black relative">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {renderSlide(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg disabled:opacity-30 hover:bg-white/20 transition-all"
        >
          ← Previous
        </button>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-blue-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg disabled:opacity-30 hover:bg-white/20 transition-all"
        >
          Next →
        </button>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
