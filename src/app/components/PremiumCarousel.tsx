import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
}

export default function PremiumCarousel({ slides }: PremiumCarouselProps) {
  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        initialSlide={1}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={24}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.carousel-prev',
          nextEl: '.carousel-next',
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="pb-8 pt-4">
            <div 
              className="relative w-full h-[500px] md:h-[600px] overflow-hidden group shadow-[0_20px_50px_rgba(15,23,42,0.15)] rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-[#0F172A]/50 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-90" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10">
                <div className="w-12 h-1 bg-[#C5A880] mb-6 rounded-sm" />
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg text-[#F8FAFC] mb-8 max-w-2xl font-light leading-relaxed">
                  {slide.description}
                </p>
                {slide.ctaText && (
                  <button className="self-start px-8 py-4 bg-transparent border border-white/50 hover:bg-[#C5A880] hover:border-[#C5A880] text-white font-semibold text-[13px] tracking-widest uppercase transition-all duration-300">
                    {slide.ctaText}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-y-0 left-2 md:left-8 flex items-center z-20 pointer-events-none">
        <button className="carousel-prev pointer-events-auto size-14 rounded-full bg-white/10 hover:bg-[#C5A880] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-xl">
          <ChevronLeft className="size-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 md:right-8 flex items-center z-20 pointer-events-none">
        <button className="carousel-next pointer-events-auto size-14 rounded-full bg-white/10 hover:bg-[#C5A880] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-xl">
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
