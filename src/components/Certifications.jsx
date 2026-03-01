import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import securityGif from '../assets/security.gif'

const certifications = [
  { title:'Oracle Cloud Infrastructure 2025', subtitle:'Certified Foundations Associate',      org:'Oracle',       color:'from-pastel-pink to-pink-200' },
  { title:'Oracle Cloud Infrastructure 2025', subtitle:'Certified AI Foundations Associate',   org:'Oracle',       color:'from-pastel-blue to-blue-200' },
  { title:'Oracle Cloud Infrastructure 2025', subtitle:'Certified Generative AI Professional', org:'Oracle',       color:'from-pastel-purple to-purple-200' },
  { title:'ISO/IEC 27001:2022',               subtitle:'Lead Auditor',                          org:'Mastermind',   color:'from-pastel-green to-green-200' },
  { title:'Machine Learning Using Python',    subtitle:'Complete Certificate',                  org:'Simplilearn',  color:'from-pastel-yellow to-yellow-200' },
  { title:'Introduction to CISSP',            subtitle:'Security Assessment & Operations',      org:'Professional', color:'from-pastel-peach to-orange-200' },
]

const upcoming = [
  { title:'CompTIA Security+', note:'Preparing — 2026' },
  { title:'CEH — Certified Ethical Hacker', note:'Planned — 2027' },
]

export default function Certifications() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="certifications" className="py-20 px-4 bg-white/30 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 text-black dark:text-white"
        >
          certifications
        </motion.h2>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="flex justify-center mb-12">
          <div className="window-card border-2 border-black dark:border-white rounded-3xl bg-white/80 dark:bg-slate-800 px-6 py-3 flex items-center gap-4">
            <img src={securityGif} alt="" className="w-10 h-10 object-contain" />
            <p className="font-heading font-bold text-black dark:text-white">{certifications.length} industry certifications earned</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {certifications.map((cert, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.07, type:'spring', stiffness:100 }}
              whileHover={{ y:-8, scale:1.02 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`window-card bg-gradient-to-br ${cert.color} border-2 border-black rounded-3xl p-8 text-center relative overflow-hidden`}
            >
              {hovered === i && (
                <motion.div
                  initial={{ x:'-100%' }} animate={{ x:'280%' }} transition={{ duration:0.5 }}
                  className="absolute top-0 left-0 w-1/4 h-full bg-white/50 skew-x-12 pointer-events-none"
                />
              )}
              <div className="flex justify-center mb-4">
                <div style={{ backgroundColor:'#ffffff', border:'2px solid rgba(0,0,0,0.15)', borderRadius:'1rem', padding:'0.75rem' }}>
                  <FiAward size={30} style={{ color:'#111827', stroke:'#111827' }} />
                </div>
              </div>
              <h3 className="font-heading text-base font-bold mb-2 text-black">{cert.title}</h3>
              <p className="text-pink-700 font-bold mb-2 text-sm">{cert.subtitle}</p>
              <p className="text-gray-700 text-xs font-semibold">{cert.org}</p>
              <div className="absolute top-3 right-3 bg-black text-white text-xs font-heading font-bold px-2 py-0.5 rounded-full">
                Certified
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h3 className="font-heading text-2xl font-bold text-center mb-6 text-black dark:text-white">on the horizon</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {upcoming.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                transition={{ delay: i*0.1 }} whileHover={{ y:-4 }}
                className="upcoming-card rounded-3xl p-6 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent-pink/20 border-2 border-accent-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-black dark:text-white text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}