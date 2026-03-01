import { motion } from 'framer-motion'
import { FiMonitor, FiFileText } from 'react-icons/fi'

const roles = [
  {
    title:'Social Media Head', org:'ITSA', period:'Jul 2024 – Present',
    Icon: FiMonitor, color:'from-pastel-pink to-pink-200',
    points:['Managed ITSA digital presence across platforms','Led event promotions and content planning','Coordinated communication for technical initiatives'],
  },
  {
    title:'Documentation Executive', org:'ITSA', period:'Jul 2023 – Jun 2024',
    Icon: FiFileText, color:'from-pastel-blue to-blue-200',
    points:['Prepared official reports and event documentation','Maintained structured records for audits','Ensured consistency and accuracy of documentation'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white/30 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-16 text-black dark:text-white"
        >
          committee work
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-pink via-accent-blue to-accent-purple -translate-x-1/2 rounded-full" />
          <div className="space-y-14">
            {roles.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity:0, x: i%2===0 ? -60 : 60 }}
                whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                transition={{ type:'spring', stiffness:80 }}
                className={`relative flex flex-col md:flex-row ${i%2===1?'md:flex-row-reverse':''} items-center gap-6`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-accent-pink items-center justify-center shadow-lg">
                  <r.Icon size={20} className="text-accent-pink" />
                </div>
                <div className={`w-full md:w-5/12 ${i%2===0?'md:pr-10':'md:pl-10'}`}>
                  <motion.div whileHover={{ scale:1.02, y:-5 }}
                    className={`window-card bg-gradient-to-br ${r.color} border-2 border-black rounded-3xl p-8`}>
                    <div className="flex items-center gap-2 mb-1 md:hidden">
                      <r.Icon size={20} className="text-accent-pink" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-black mb-1">{r.title}</h3>
                    <p className="text-pink-700 font-bold text-lg">{r.org}</p>
                    <p className="text-gray-700 font-semibold text-sm mb-4">{r.period}</p>
                    <ul className="space-y-2">
                      {r.points.map((pt, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-800 text-sm">
                          <span className="text-pink-600 font-bold mt-0.5">–</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}