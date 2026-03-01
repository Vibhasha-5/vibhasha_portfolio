import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiPlus, FiArrowLeft, FiType, FiTag } from 'react-icons/fi'
import securityGif from '../assets/security.gif'

const initialCertifications = [
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

const COLORS = [
  { label:'Pink',   value:'from-pastel-pink to-pink-200' },
  { label:'Blue',   value:'from-pastel-blue to-blue-200' },
  { label:'Purple', value:'from-pastel-purple to-purple-200' },
  { label:'Green',  value:'from-pastel-green to-green-200' },
  { label:'Yellow', value:'from-pastel-yellow to-yellow-200' },
  { label:'Peach',  value:'from-pastel-peach to-orange-200' },
]

const blank = { title:'', subtitle:'', org:'', color:'from-pastel-pink to-pink-200' }

function AddCertForm({ onAdd, onBack }) {
  const [form, setForm] = useState(blank)
  const [errors, setErrors] = useState({})
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.title.trim())    e.title = 'Required'
    if (!form.subtitle.trim()) e.subtitle = 'Required'
    if (!form.org.trim())      e.org = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = () => {
    if (!validate()) return
    onAdd({ ...form })
    onBack()
  }

  return (
    <motion.div
      initial={{ opacity:0, x:60 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:60 }}
      transition={{ type:'spring', stiffness:100 }}
      className="max-w-xl mx-auto mb-16"
    >
      <button onClick={onBack}
        className="flex items-center gap-2 text-sm font-heading font-bold text-gray-600 dark:text-slate-400 hover:text-accent-pink transition-colors mb-6">
        <FiArrowLeft size={16} /> Back to certifications
      </button>

      <h3 className="font-heading text-2xl font-bold text-black dark:text-white mb-1">Add Certification</h3>
      <p className="text-gray-500 dark:text-slate-400 text-sm mb-6">It will appear in the grid instantly.</p>

      {/* Live preview */}
      <div className="mb-6">
        <p className="text-xs font-bold font-heading text-gray-400 uppercase tracking-wider mb-2">Preview</p>
        <div className={`window-card bg-gradient-to-br ${form.color} border-2 border-black rounded-3xl p-6 text-center relative`}>
          <div className="flex justify-center mb-3">
            <div style={{ backgroundColor:'#ffffff', border:'2px solid rgba(0,0,0,0.15)', borderRadius:'1rem', padding:'0.6rem' }}>
              <FiAward size={24} style={{ color:'#111827' }} />
            </div>
          </div>
          <h3 className="font-heading text-sm font-bold mb-1 text-black">{form.title || 'Certification Title'}</h3>
          <p className="text-pink-700 font-bold text-xs mb-1">{form.subtitle || 'Subtitle / Specialization'}</p>
          <p className="text-gray-600 text-xs">{form.org || 'Issuing Organization'}</p>
          <div className="absolute top-2 right-2 bg-black text-white text-xs font-heading font-bold px-2 py-0.5 rounded-full">Certified</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-black dark:text-white mb-1">
            <FiType size={13} className="text-accent-pink" /> Certification Title *
          </label>
          <input value={form.title} onChange={e => set('title', e.target.value)}
            placeholder="e.g. AWS Cloud Practitioner 2026"
            className={`w-full px-4 py-3 rounded-2xl border-2 text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors ${errors.title ? 'border-red-400' : 'border-black dark:border-slate-600'}`} />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-black dark:text-white mb-1">
            <FiTag size={13} className="text-accent-pink" /> Subtitle / Specialization *
          </label>
          <input value={form.subtitle} onChange={e => set('subtitle', e.target.value)}
            placeholder="e.g. Cloud Foundations Associate"
            className={`w-full px-4 py-3 rounded-2xl border-2 text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors ${errors.subtitle ? 'border-red-400' : 'border-black dark:border-slate-600'}`} />
          {errors.subtitle && <p className="text-red-500 text-xs mt-1">{errors.subtitle}</p>}
        </div>

        <div>
          <label className="text-sm font-bold text-black dark:text-white mb-1 block">Issuing Organization *</label>
          <input value={form.org} onChange={e => set('org', e.target.value)}
            placeholder="e.g. Amazon Web Services"
            className={`w-full px-4 py-3 rounded-2xl border-2 text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors ${errors.org ? 'border-red-400' : 'border-black dark:border-slate-600'}`} />
          {errors.org && <p className="text-red-500 text-xs mt-1">{errors.org}</p>}
        </div>

        <div>
          <label className="text-sm font-bold text-black dark:text-white mb-2 block">Card Colour</label>
          <div className="flex gap-3 flex-wrap">
            {COLORS.map(c => (
              <button key={c.value} onClick={() => set('color', c.value)}
                className={`px-4 py-2 rounded-xl border-2 text-xs font-bold font-heading bg-gradient-to-br ${c.value} text-black transition-all ${form.color === c.value ? 'border-black scale-105 shadow-lg' : 'border-black/30'}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <motion.button whileHover={{ scale:1.03, y:-2 }} whileTap={{ scale:0.97 }}
          onClick={submit}
          className="window-card flex-1 flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black font-heading font-bold py-3 rounded-2xl border-2 border-black dark:border-white">
          <FiPlus size={16} /> Add Certification
        </motion.button>
        <button onClick={onBack}
          className="px-5 py-3 rounded-2xl border-2 border-black dark:border-white font-heading font-bold text-black dark:text-white text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          Cancel
        </button>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const [certs, setCerts] = useState(initialCertifications)
  const [hovered, setHovered] = useState(null)
  const [adding, setAdding] = useState(false)

  const addCert = (cert) => setCerts(prev => [...prev, cert])

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
            <p className="font-heading font-bold text-black dark:text-white">{certs.length} industry certifications earned</p>
          </div>
        </motion.div>

        {/* Add form slides in above the grid */}
        <AnimatePresence>
          {adding && (
            <motion.div
              key="form"
              initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
              transition={{ duration:0.35 }}
              className="overflow-hidden"
            >
              <AddCertForm onAdd={addCert} onBack={() => setAdding(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add button — only shows when form is closed */}
        {!adding && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="flex justify-center mb-10">
            <motion.button
              whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }}
              onClick={() => setAdding(true)}
              className="window-card upcoming-card flex items-center gap-3 px-7 py-3 rounded-2xl font-heading font-bold text-black dark:text-white border-2 border-dashed border-gray-400 dark:border-slate-500">
              <FiPlus size={18} className="text-accent-pink" /> Add New Certification
            </motion.button>
          </motion.div>
        )}

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          <AnimatePresence>
            {certs.map((cert, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:40 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, scale:0.9 }}
                transition={{ delay: i * 0.05, type:'spring', stiffness:100 }}
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
          </AnimatePresence>
        </div>

        {/* On the horizon */}
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