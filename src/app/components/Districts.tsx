import React from 'react';
import { MapPin } from 'lucide-react';

const DISTRICTS = [
  {
    name: "Khulna",
    desc: "The divisional headquarters and a commercial/industrial hub of southwestern Bangladesh. It serves as the gateway to the world-renowned Sundarbans, the largest mangrove forest and a UNESCO World Heritage Site. Historically vital in trade, river-based commerce, and industrial development, particularly in jute and shipbuilding."
  },
  {
    name: "Bagerhat",
    desc: "Globally recognized for the Historic Mosque City of Bagerhat, a UNESCO World Heritage Site established in the 15th century by Khan Jahan Ali. Renowned for its unique Islamic architecture, including the iconic Sixty Dome Mosque (Shat Gombuj Masjid)."
  },
  {
    name: "Satkhira",
    desc: "Known for its natural beauty and proximity to the Sundarbans. Famous for shrimp cultivation, contributing significantly to Bangladesh’s export economy. The district has historical importance linked to resistance movements and coastal resilience."
  },
  {
    name: "Jessore",
    desc: "One of the oldest districts in Bangladesh, historically significant for its role in the Liberation War of 1971. Known as a cultural and educational hub, producing notable intellectuals and artists. Jessore Airport underscores its strategic importance."
  },
  {
    name: "Narail",
    desc: "Widely known for its rich cultural heritage and as the home of the internationally acclaimed artist S. M. Sultan. Embodies a strong tradition of art, simplicity, and rural life, contributing significantly to the cultural identity of Bangladesh."
  },
  {
    name: "Kushtia",
    desc: "Holds immense cultural and spiritual significance as the land of Lalon Shah, the legendary mystic and philosopher. Associated with Rabindranath Tagore. A center of literary, philosophical, and nationalist movements."
  },
  {
    name: "Jhenaidah",
    desc: "Known for its historical landmarks and agricultural richness. It has contributed significantly to the country’s socio-political development and is recognized for its vibrant local traditions and community life."
  },
  {
    name: "Magura",
    desc: "Marked by its agricultural productivity and peaceful rural environment. Has contributed to the nation through notable personalities in politics, sports, and public service, reflecting its growing importance despite its modest size."
  },
  {
    name: "Meherpur",
    desc: "Holds a unique place in the history of Bangladesh as the site of Mujibnagar, where the Provisional Government of Bangladesh was formed in 1971 during the Liberation War, making it a symbol of independence and national pride."
  },
  {
    name: "Chuadanga",
    desc: "Known for its strategic location along the border and its agricultural contributions. Played a significant role during the Liberation War and remains an important district for cross-border trade and cultural exchange."
  }
];

export default function Districts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-['Barlow_Condensed',sans-serif] text-4xl md:text-5xl font-medium text-slate-900 mb-6 uppercase tracking-wide">
            Districts of Khulna Division
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our association proudly represents the legal fraternity originating from these ten distinct and historically rich districts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DISTRICTS.map((district, idx) => (
            <div 
              key={district.name} 
              className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-600/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="size-6" />
                </div>
                <h3 className="font-['Barlow_Condensed',sans-serif] text-2xl font-medium text-slate-900 uppercase tracking-wide">
                  {district.name}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {district.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
