import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiChevronLeft, FiChevronRight, FiClock, FiArrowRight } from 'react-icons/fi'
import filesAnim from '../assets/files-animation.gif'
import securityGif from '../assets/security.gif'
import githubSketch from '../assets/github-sketch.gif'

// ════════════════════════════════════════════════════════════════
// ADD NEW PROJECTS HERE — copy any entry to add another
// color: from-pastel-pink | from-pastel-blue | from-pastel-purple
//        from-pastel-green | from-pastel-yellow | from-pastel-peach
// visual: securityGif | filesAnim | null
// ════════════════════════════════════════════════════════════════
const projects = [
  {
    title:'Yojna Seva',
    description:'Machine-learning web app recommending government schemes for individuals with disabilities — 96% accuracy. Built REST APIs with Express.js and a React/MongoDB stack.',
    tech:['Python','React','Express.js','MongoDB','ML'],
    date:'May 2025',
    github:'https://github.com/Vibhasha-5/YojnaSeva',
    color:'from-pastel-pink to-pink-200',
    visual: null,
  },
  {
    title:'Local Vulnerability Scanner',
    description:'Python-based network scanner using Nmap for host discovery, port scanning, and service version detection. Automated identification of insecure services.',
    tech:['Python','Nmap','Docker','Security'],
    date:'Dec 2025',
    github:'https://github.com/Vibhasha-5/Local_Vulnerability_Scanner',
    color:'from-pastel-blue to-blue-200',
    visual: securityGif,
  },
  {
    title:'Web App Penetration Testing Lab',
    description:'Deployed OWASP Juice Shop via Docker and ran controlled pen-tests against OWASP Top 10. Custom Python automation scripts for security assessment.',
    tech:['Python','Docker','OWASP','VAPT'],
    date:'Apr 2025',
    github:'https://github.com/Vibhasha-5/Webapp_Pentest_Lab',
    color:'from-pastel-purple to-purple-200',
    visual: null,
  },
  {
    title:'AI Phishing Email Detection',
    description:'TF-IDF + Logistic Regression on 80K+ emails. Deployed via Streamlit with a secured Flask REST API.',
    tech:['Python','ML','Flask','Streamlit'],
    date:'Aug 2025',
    github:'https://github.com/Vibhasha-5/AI-Phishing_Email_Detector',
    color:'from-pastel-green to-green-200',
    visual: null,
  },
  
]

// Upcoming / in-progress work — shown below the main grid
const upcoming = [
  { title:'AuthDoc', status:'In Progress', eta:'Mar 2026', tech:['Node.js','MongoDB','WebSockets'] },
  { title:'JD Resume Analyzer', status:'Planning',    eta:'2026',  tech:['Python','JSON','Pattern Matching'] },
  { title:'Secret API Key Detector', status:'Planning',    eta:'2026', tech:['Python','DevSecOps','AWS Keys'] },
]
// ════════════════════════════════════════════════════════════════

const statusColors = {
  'In Progress':'bg-green-100 text-green-800 border-green-300',
  'Planning':   'bg-blue-100 text-blue-800 border-blue-300',
  'Paused':     'bg-yellow-100 text-yellow-800 border-yellow-300',
}

const Card = ({ project }) => (
  <motion.div
    whileHover={{ y:-8 }}
    className={`window-card bg-gradient-to-br ${project.color} border-3 border-black dark:border-white rounded-3xl p-8 h-full flex flex-col`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="font-heading text-xl font-bold text-black mb-1">{project.title}</h3>
        <p className="text-xs text-gray-600 font-semibold">{project.date}</p>
      </div>
      <div className="flex items-center gap-2 ml-3 flex-shrink-0">
        {project.visual && (
          <img src={project.visual} alt="" className="w-10 h-10 rounded-xl border-2 border-black object-contain bg-white" />
        )}
        <motion.a whileHover={{ scale:1.2, rotate:5 }}
          href={project.github} target="_blank" rel="noopener noreferrer"
          className="p-2 bg-white rounded-full border-2 border-black">
          <FiGithub size={18} style={{ color:'#111827' }} />
        </motion.a>
      </div>
    </div>
    <p className="text-gray-800 mb-5 leading-relaxed text-sm flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((t,i) => (
        <span key={i} className="px-2.5 py-1 bg-white border-2 border-black rounded-lg text-xs font-bold text-black">{t}</span>
      ))}
    </div>
  </motion.div>
)

export default function Projects() {
  const [cur, setCur] = useState(0)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 text-black dark:text-white"
        >
          my projects
        </motion.h2>

        {/* Banner */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="flex justify-center mb-10">
          <div className="window-card border-3 border-black dark:border-white rounded-3xl bg-white/80 dark:bg-slate-800 px-6 py-3 flex items-center gap-4">
            <img src={filesAnim} alt="" className="w-12 h-12 object-contain" />
            <p className="font-heading font-bold text-black dark:text-white">{projects.length} projects shipped</p>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((p,i) => (
            <motion.div key={p.title}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.08 }}>
              <Card project={p} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-16">
          <AnimatePresence mode="wait">
            <motion.div key={cur}
              initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-40 }}
              transition={{ duration:0.25 }}>
              <Card project={projects[cur]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={() => setCur(c => (c-1+projects.length)%projects.length)}
              className="window-card p-3 bg-white dark:bg-slate-700 border-2 border-black dark:border-white rounded-full">
              <FiChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {projects.map((_,i) => (
                <button key={i} onClick={() => setCur(i)}
                  className={`h-2.5 rounded-full border-2 border-black transition-all duration-300 ${i===cur ? 'bg-accent-pink w-6' : 'bg-white dark:bg-slate-600 w-2.5'}`} />
              ))}
            </div>
            <button onClick={() => setCur(c => (c+1)%projects.length)}
              className="window-card p-3 bg-white dark:bg-slate-700 border-2 border-black dark:border-white rounded-full">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Upcoming Projects ───────────────────────────────── */}
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <FiClock size={22} className="text-accent-pink" />
            <h3 className="font-heading text-2xl font-bold text-black dark:text-white">coming soon</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {upcoming.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.1 }}
                whileHover={{ y:-4 }}
                className="upcoming-card rounded-3xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-heading font-bold text-sm text-black dark:text-white leading-tight flex-1 pr-2">{item.title}</h4>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                  <FiClock size={11} /> {item.eta}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t,ti) => (
                    <span key={ti} className="px-2 py-0.5 bg-white/60 dark:bg-slate-700/60 border border-black/10 dark:border-white/10 rounded-md text-xs font-semibold text-black dark:text-white">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center flex flex-col items-center gap-4">
          <img src={githubSketch} alt="" className="w-14 h-14 opacity-75 dark:invert" />
          <motion.a whileHover={{ scale:1.05, y:-4 }} whileTap={{ scale:0.95 }}
            href="https://github.com/Vibhasha-5" target="_blank" rel="noopener noreferrer"
            className="window-card inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-heading font-bold px-8 py-4 rounded-2xl text-lg border-3 border-black dark:border-white">
            <FiGithub /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
