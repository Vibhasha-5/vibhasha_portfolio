import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiGitPullRequest, FiStar, FiCode, FiArrowLeft, FiPlus, FiLink, FiTag, FiCalendar, FiType, FiAlignLeft } from 'react-icons/fi'
import githubSketch from '../assets/github-sketch.gif'

// ════════════════════════════════════════════════════════════════
// ADD NEW CONTRIBUTIONS HERE — or use the "Add Contribution" button
// ════════════════════════════════════════════════════════════════
const initialContributions = [
  {
    title:'Hacktoberfest 2025',
    tag:'Supercontributor',
    tagColor:'bg-green-600',
    description:'Contributed to open-source repositories by submitting meaningful pull requests, improving documentation, enhancing backend integration, building security simulations, and collaborating with developers globally.',
    github:'https://github.com/Vibhasha-5',
    color:'from-pastel-green to-green-200',
  },
]
// ════════════════════════════════════════════════════════════════

const stats = [
  { Icon:FiGitPullRequest, label:'Pull Requests',    value:'10+' },
  { Icon:FiStar,           label:'Stars Earned',      value:'25+' },
  { Icon:FiCode,           label:'Repos Contributed', value:'10+' },
]

const COLORS = [
  { label:'Green',  value:'from-pastel-green to-green-200' },
  { label:'Pink',   value:'from-pastel-pink to-pink-200' },
  { label:'Blue',   value:'from-pastel-blue to-blue-200' },
  { label:'Purple', value:'from-pastel-purple to-purple-200' },
  { label:'Yellow', value:'from-pastel-yellow to-yellow-200' },
  { label:'Peach',  value:'from-pastel-peach to-orange-200' },
]

const TAG_COLORS = [
  { label:'Green',  value:'bg-green-600' },
  { label:'Pink',   value:'bg-pink-600' },
  { label:'Blue',   value:'bg-blue-600' },
  { label:'Purple', value:'bg-purple-600' },
  { label:'Black',  value:'bg-black' },
]

const blank = { title:'', tag:'Contributor', tagColor:'bg-green-600', description:'', github:'', color:'from-pastel-blue to-blue-200' }

// ── Form Page ─────────────────────────────────────────────────
function AddForm({ onAdd, onBack }) {
  const [form, setForm] = useState(blank)
  const [errors, setErrors] = useState({})

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.title.trim())       e.title = 'Required'
    if (!form.description.trim()) e.description = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = () => {
    if (!validate()) return
    onAdd({ ...form })
    onBack()
  }

  const previewColor = COLORS.find(c => c.value === form.color)?.value || COLORS[0].value

  return (
    <motion.div
      initial={{ opacity:0, x:60 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:60 }}
      transition={{ type:'spring', stiffness:100 }}
      className="max-w-2xl mx-auto"
    >
      {/* Back button */}
      <button onClick={onBack}
        className="flex items-center gap-2 text-sm font-heading font-bold text-gray-600 dark:text-gray-400 hover:text-accent-pink transition-colors mb-8 group">
        <motion.span animate={{}} whileHover={{ x:-3 }} className="inline-flex">
          <FiArrowLeft size={18} />
        </motion.span>
        Back to contributions
      </button>

      <h3 className="font-heading text-3xl font-bold text-black dark:text-white mb-2">Add Contribution</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">Fill in the details and it'll appear in the list instantly.</p>

      {/* Live preview */}
      <div className="mb-8">
        <p className="text-xs font-bold font-heading text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Preview</p>
        <div className={`window-card bg-gradient-to-br ${previewColor} border-3 border-black dark:border-white rounded-3xl p-6`}>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h4 className="font-heading text-xl font-bold text-black">{form.title || 'Project Title'}</h4>
            <span className={`${form.tagColor} text-white text-xs font-heading font-bold px-3 py-1 rounded-full`}>{form.tag || 'Tag'}</span>
          </div>
          <p className="text-gray-800 text-sm leading-relaxed">{form.description || 'Your description will appear here...'}</p>
          {form.github && (
            <a href={form.github} target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline">
              <FiGithub size={12} /> {form.github}
            </a>
          )}
        </div>
      </div>

      {/* Form fields */}
      <div className="space-y-5">
        {/* Title */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-black dark:text-white mb-1.5">
            <FiType size={14} className="text-accent-pink" /> Title *
          </label>
          <input
            value={form.title}
            onChange={e => set('title', e.target.value)}
            placeholder="e.g. Hacktoberfest 2026"
            className={`w-full px-4 py-3 rounded-2xl border-2 font-sans text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors ${errors.title ? 'border-red-400' : 'border-black dark:border-white'}`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-black dark:text-white mb-1.5">
            <FiAlignLeft size={14} className="text-accent-pink" /> Description *
          </label>
          <textarea
            value={form.description}
            onChange={e => set('description', e.target.value)}
            placeholder="What did you contribute? What was the impact?"
            rows={4}
            className={`w-full px-4 py-3 rounded-2xl border-2 font-sans text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors resize-none ${errors.description ? 'border-red-400' : 'border-black dark:border-white'}`}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        {/* GitHub */}
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-black dark:text-white mb-1.5">
            <FiLink size={14} className="text-accent-pink" /> GitHub Link
          </label>
          <input
            value={form.github}
            onChange={e => set('github', e.target.value)}
            placeholder="https://github.com/username/repo"
            className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white font-sans text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors"
          />
        </div>

        {/* Tag + tag colour */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black dark:text-white mb-1.5">
              <FiTag size={14} className="text-accent-pink" /> Badge Text
            </label>
            <input
              value={form.tag}
              onChange={e => set('tag', e.target.value)}
              placeholder="Contributor"
              className="w-full px-4 py-3 rounded-2xl border-2 border-black dark:border-white font-sans text-sm bg-white dark:bg-slate-800 text-black dark:text-white outline-none focus:border-accent-pink transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-black dark:text-white mb-1.5 block">Badge Colour</label>
            <div className="flex gap-2 flex-wrap pt-1">
              {TAG_COLORS.map(tc => (
                <button key={tc.value} onClick={() => set('tagColor', tc.value)}
                  className={`w-6 h-6 rounded-full ${tc.value} border-2 transition-all ${form.tagColor===tc.value ? 'border-black dark:border-white scale-125' : 'border-transparent'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Card colour */}
        <div>
          <label className="text-sm font-bold text-black dark:text-white mb-1.5 block">Card Colour</label>
          <div className="flex gap-3 flex-wrap">
            {COLORS.map(c => (
              <button key={c.value} onClick={() => set('color', c.value)}
                className={`px-4 py-2 rounded-xl border-2 text-xs font-bold font-heading bg-gradient-to-br ${c.value} text-black transition-all ${form.color===c.value ? 'border-black scale-105 shadow-lg' : 'border-black/30'}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex gap-4 mt-8">
        <motion.button
          whileHover={{ scale:1.03, y:-2 }} whileTap={{ scale:0.97 }}
          onClick={submit}
          className="window-card flex-1 flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black font-heading font-bold py-4 rounded-2xl border-3 border-black dark:border-white text-base"
        >
          <FiPlus size={18} /> Add to List
        </motion.button>
        <button onClick={onBack}
          className="px-6 py-4 rounded-2xl border-2 border-black dark:border-white font-heading font-bold text-black dark:text-white text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          Cancel
        </button>
      </div>
    </motion.div>
  )
}

// ── Main Contributions Component ──────────────────────────────
export default function Contributions() {
  const [items, setItems] = useState(initialContributions)
  const [adding, setAdding] = useState(false)

  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem])
  }

  return (
    <section id="contributions" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-16 text-black dark:text-white"
        >
          open source
        </motion.h2>

        <AnimatePresence mode="wait">
          {adding ? (
            <motion.div key="form" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
              <AddForm onAdd={addItem} onBack={() => setAdding(false)} />
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
              <div className="flex flex-col md:flex-row items-start gap-10">

                {/* GitHub side panel */}
                <motion.div
                  initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                  className="flex-shrink-0 flex flex-col items-center gap-4 md:sticky md:top-28 w-full md:w-auto"
                >
                  <div className="window-card border-3 border-black dark:border-white rounded-3xl bg-white dark:bg-slate-800 p-6">
                    <img src={githubSketch} alt="GitHub" className="w-32 md:w-36 dark:invert" />
                  </div>
                  <motion.a whileHover={{ scale:1.04, y:-3 }}
                    href="https://github.com/Vibhasha-5" target="_blank" rel="noopener noreferrer"
                    className="window-card w-full flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black font-heading font-bold px-6 py-3 rounded-2xl border-3 border-black dark:border-white">
                    <FiGithub /> @Vibhasha-5
                  </motion.a>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 w-full mt-2">
                    {stats.map((s,i) => (
                      <motion.div key={s.label}
                        initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                        transition={{ delay: i*0.1 }} whileHover={{ y:-4 }}
                        className="window-card bg-white dark:bg-slate-800 border-3 border-black dark:border-white rounded-2xl p-3 text-center">
                        <s.Icon className="mx-auto mb-1 text-accent-pink" size={18} />
                        <p className="font-heading text-lg font-bold text-black dark:text-white">{s.value}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold leading-tight">{s.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contribution cards */}
                <div className="flex-1 space-y-6">
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <motion.div key={i}
                        initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
                        exit={{ opacity:0, scale:0.95 }}
                        transition={{ delay: i*0.08 }}
                        whileHover={{ y:-4 }}
                        className={`window-card bg-gradient-to-br ${item.color} border-3 border-black dark:border-white rounded-3xl p-8`}
                      >
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <h3 className="font-heading text-2xl font-bold text-black">{item.title}</h3>
                          <span className={`${item.tagColor || 'bg-black'} text-white text-xs font-heading font-bold px-3 py-1 rounded-full`}>{item.tag}</span>
                        </div>
                        <p className="text-gray-800 leading-relaxed mb-3">{item.description}</p>
                        {item.github && (
                          <a href={item.github} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-accent-pink transition-colors">
                            <FiGithub size={13} /> {item.github}
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Add contribution button */}
                  <motion.button
                    initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
                    whileHover={{ scale:1.02, y:-4 }} whileTap={{ scale:0.98 }}
                    onClick={() => setAdding(true)}
                    className="w-full upcoming-card rounded-3xl p-6 flex items-center gap-5 group transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-pink/15 dark:bg-accent-pink/25 border-2 border-accent-pink/40 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-pink/25 transition-colors">
                      <FiPlus size={24} className="text-accent-pink" />
                    </div>
                    <div className="text-left">
                      <p className="font-heading font-bold text-black dark:text-white text-base">Log a new contribution</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Add a project, event, or PR with a GitHub link</p>
                    </div>
                    <div className="ml-auto text-gray-400 dark:text-gray-500 group-hover:text-accent-pink transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
