import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'
import bouncingIcons from '../assets/bouncing-icons.gif'

const Icons = {
  code: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  web:  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>,
  db:   <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  lock: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  tool: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  star: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
}

const categories = [
  { title:'Programming Languages', icon:'code',  color:'from-pastel-pink to-pink-200',    skills:['Python','JavaScript','TypeScript','Java','C','SQL'] },
  { title:'Web Development',        icon:'web',   color:'from-pastel-blue to-blue-200',    skills:['React.js','Node.js','Express.js','HTML5','CSS3'] },
  { title:'Databases',              icon:'db',    color:'from-pastel-yellow to-yellow-200', skills:['MongoDB','MySQL'] },
  { title:'Cybersecurity',          icon:'lock',  color:'from-pastel-purple to-purple-200', skills:['Kali Linux','Wireshark','Nmap','BurpSuite','Metasploit','VAPT'] },
  { title:'Tools & Platforms',      icon:'tool',  color:'from-pastel-green to-green-200',  skills:['Docker','VirtualBox','Git/GitHub','XAMPP'] },
  { title:'Specializations',        icon:'star',  color:'from-pastel-peach to-orange-200', skills:['Machine Learning','Network Security','CTF Simulations','ISO 27001'] },
]

const learning = [
  { skill:'Solidity',       context:'Smart Contracts',       color:'text-orange-500' },
  { skill:'API Security',     context:'Safeguarding data in web applications',     color:'text-accent-blue' },
  { skill:'AWS',        context:'Cloud infrastructure',      color:'text-yellow-500 dark:text-yellow-400' },
  { skill:'LLMs', context:'Building AI Agents',   color:'text-blue-600 dark:text-blue-400' },
]

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="py-20 px-4 bg-white/30 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 text-black dark:text-white"
        >
          technical skills
        </motion.h2>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="flex justify-center mb-12">
          <div className="window-card border-2 border-black dark:border-white rounded-3xl bg-white/80 dark:bg-slate-800 px-6 py-3 flex items-center gap-4">
            <img src={bouncingIcons} alt="" className="h-10 object-contain" />
            <p className="font-heading font-bold text-black dark:text-white">Hover a card to see skills animate</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {categories.map((cat, i) => (
            <motion.div key={cat.title}
              initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
              transition={{ delay: i*0.08 }}
              whileHover={{ y:-10, scale:1.02 }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              className={`window-card bg-gradient-to-br ${cat.color} border-2 border-black rounded-3xl p-6`}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  animate={active === i ? { rotate:[0,-12,12,-12,0], scale:[1,1.3,1] } : {}}
                  transition={{ duration:0.4 }}
                  className="p-2 bg-white/70 rounded-xl border-2 border-black/20 text-black"
                >
                  {Icons[cat.icon]}
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-black">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <motion.span key={idx}
                    initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                    transition={{ delay: i*0.04+idx*0.04, type:'spring' }}
                    whileHover={{ scale:1.1, y:-2 }}
                    className="px-3 py-1.5 bg-white border-2 border-black rounded-lg text-sm font-semibold text-black"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <FiClock size={22} className="text-accent-pink" />
            <h3 className="font-heading text-2xl font-bold text-black dark:text-white">currently learning</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {learning.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i*0.1 }}
                whileHover={{ y:-4, scale:1.03 }}
                className="upcoming-card rounded-2xl p-4 text-center"
              >
                <p className={`font-heading text-lg font-bold ${item.color} mb-1`}>{item.skill}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">{item.context}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}