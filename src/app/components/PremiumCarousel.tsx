import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselSlide {
  id: string | number;
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

interface PremiumCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
}

export default function PremiumCarousel({
  slides,
  autoPlayInterval = 6000,
}: PremiumCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered || slides.length <= 1) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide, autoPlayInterval, slides.length]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '10%' : '-10%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6, ease: 'easeOut' },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '5%' : '-5%',
      opacity: 0,
      scale: 1.02,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6, ease: 'easeIn' },
      },
    }),
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-[#0D0D0D] group rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[15000ms] ease-out hover:scale-105"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />

          {/* Gradient Overlays for Premium Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-6xl z-10">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Subtle accent line above title */}
              <div className="w-12 h-1 bg-[#D4AF37] mb-8 rounded-full" />
              
              <h2 className="font-['Barlow_Condensed',sans-serif] text-5xl md:text-7xl lg:text-[88px] font-medium text-white mb-6 leading-[1.05] tracking-wide uppercase drop-shadow-2xl">
                {slides[currentIndex].title}
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md">
                {slides[currentIndex].description}
              </p>
              
              {slides[currentIndex].ctaText && (
                <button className="px-10 py-5 bg-[#D4AF37] hover:bg-white text-[#0D0D0D] font-bold text-[13px] tracking-[0.2em] uppercase rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
                  {slides[currentIndex].ctaText}
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls (Arrows) */}
      <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={prevSlide}
          className="size-14 rounded-full bg-white/5 hover:bg-[#D4AF37] backdrop-blur-xl border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#0D0D0D] transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-6 ml-[-2px]" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={nextSlide}
          className="size-14 rounded-full bg-white/5 hover:bg-[#D4AF37] backdrop-blur-xl border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#0D0D0D] transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="size-6 mr-[-2px]" />
        </button>
      </div>

      {/* Slide Counter (Optional Premium Touch) */}
      <div className="absolute top-10 right-10 z-20 hidden md:flex items-center gap-3 text-white/60 font-['Barlow_Condensed',sans-serif] tracking-widest text-lg">
        <span className="text-white">{(currentIndex + 1).toString().padStart(2, '0')}</span>
        <span className="w-8 h-px bg-white/30" />
        <span>{slides.length.toString().padStart(2, '0')}</span>
      </div>

      {/* Progress Bar Bottom Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/5 z-20">
        <motion.div
          key={currentIndex}
          className="absolute left-0 top-0 bottom-0 bg-[#D4AF37]"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '0%' : '100%' }}
          transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
        />
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              index === currentIndex
                ? 'w-10 bg-[#D4AF37]'
                : 'w-2 bg-white/20 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
