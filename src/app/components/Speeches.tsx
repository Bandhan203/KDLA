import React from 'react';
import { Quote } from 'lucide-react';
import imgPresident from "../../imports/Html→Body/a983163fb3d1b34625c04175674b1f4f8c508679.png";
import imgGenSec from "../../imports/Html→Body/c0927a8871bdf05a65b4b79bd5cb95a1a40ccbfb.png";

export default function Speeches() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-['Barlow_Condensed',sans-serif] text-4xl md:text-5xl font-medium text-slate-900 mb-6 uppercase tracking-wide">
            Messages from the Leadership
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* President Speech */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col relative">
            <Quote className="absolute top-8 right-8 size-12 text-slate-100" />
            
            <div className="flex items-center gap-6 mb-8">
              <div className="size-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm shrink-0">
                <img src={imgPresident} alt="President" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed',sans-serif] text-2xl font-medium text-slate-900 uppercase tracking-wide">
                  President's Message
                </h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">
                  Md. Imam Hosaain
                </p>
              </div>
            </div>

            <div className="prose prose-slate prose-sm md:prose-base leading-relaxed text-slate-600">
              <p>
                I am pleased to welcome you to the official platform of the Khulna Divisional Lawyers Association (KDLA). As president, it is my responsibility to ensure the effective coordination, administration, and smooth functioning of the Association in line with its objectives and values.
              </p>
              <p>
                KDLA continues to serve as a cohesive forum for lawyers of Khulna Division practicing in Dhaka, facilitating professional engagement, collaboration, and mutual support. We are committed to maintaining an efficient organizational structure that enables timely communication, active member participation, and the successful implementation of our programs and initiatives. Our focus remains on strengthening professional development through seminars, workshops, and training, while also promoting access to justice through legal aid and community outreach. We strive to ensure that every initiative undertaken by KDLA reflects professionalism, accountability, and inclusiveness.
              </p>
              <p>
                In addition, we place great importance on fostering unity and connectivity among our members by organizing regular social, cultural, and professional events, thereby reinforcing a strong sense of belonging within the Association.
              </p>
              <p className="font-medium text-slate-800">
                We look forward to continued cooperation and active involvement from all members in advancing the mission and activities of KDLA.<br /><br />Thank you.
              </p>
            </div>
          </div>

          {/* Secretary Speech */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col relative">
            <Quote className="absolute top-8 right-8 size-12 text-slate-100" />
            
            <div className="flex items-center gap-6 mb-8">
              <div className="size-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm shrink-0">
                <img src={imgGenSec} alt="General Secretary" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed',sans-serif] text-2xl font-medium text-slate-900 uppercase tracking-wide">
                  Secretary's Message
                </h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">
                  Mohammad Abul Kalam Khan
                </p>
              </div>
            </div>

            <div className="prose prose-slate prose-sm md:prose-base leading-relaxed text-slate-600">
              <p>
                It is my honor to welcome you to the Khulna Divisional Lawyers Association (KDLA). Since its establishment in 1996, KDLA has served as a respected platform for lawyers of Khulna Division practicing in Dhaka, united by shared values, professional excellence, and a strong sense of community.
              </p>
              <p>
                Our Association is committed to safeguarding the rights, dignity, and welfare of its members while upholding the highest ethical standards of the legal profession. We continue to support young lawyers through mentorship and promote professional growth through training, seminars, and knowledge-sharing initiatives.
              </p>
              <p>
                KDLA also remains dedicated to advancing access to justice by providing legal assistance to underprivileged and marginalized communities. At the same time, we actively foster unity and camaraderie among our members through various social and professional engagements.
              </p>
              <p>
                As we move forward, we aim to strengthen our institutional capacity through innovation, collaboration, and transparency, ensuring that KDLA remains a dynamic and effective organization.
              </p>
              <p className="font-medium text-slate-800">
                I invite you to explore our work and be part of our journey.<br /><br />Thank you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
