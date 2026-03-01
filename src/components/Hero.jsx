import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiFileText, FiArrowDown } from 'react-icons/fi'
import profilePic from '../assets/profile.png'

const roles = ['Full-Stack Developer','Cybersecurity Enthusiast','ML Explorer','Open Source Contributor']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[idx]
    if (typing) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [text, typing, idx])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          <motion.div
            initial={{ opacity:0, x:-60 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, type:'spring' }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
              className="inline-flex items-center gap-2 bg-pastel-pink dark:bg-pink-900/40 border-2 border-black dark:border-pink-400 rounded-full px-5 py-2 text-sm font-bold font-heading mb-6 text-black dark:text-white"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for Opportunities
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-black dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-accent-pink">Vibhasha</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-accent-pink rounded-full"
                  initial={{ scaleX:0 }} animate={{ scaleX:1 }}
                  transition={{ delay:0.8, duration:0.6 }}
                />
              </span>
            </h1>

            <div className="font-heading text-xl md:text-2xl mb-8 h-10 flex items-center justify-center lg:justify-start gap-1">
              <span className="text-accent-blue font-bold">{'>'}</span>&nbsp;
              <span className="text-black dark:text-white">{text}</span>
              <motion.span
                animate={{ opacity:[1,0] }} transition={{ repeat:Infinity, duration:0.7 }}
                className="inline-block w-0.5 h-6 bg-accent-pink ml-0.5"
              />
            </div>

            <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              IT Engineer with <strong className="text-black dark:text-white">Honors in Cybersecurity</strong> — building
              secure, scalable solutions and exploring the intersection of AI and security.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:0.95 }}
                href="https://github.com/Vibhasha-5" target="_blank" rel="noopener noreferrer"
                className="window-card flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-heading font-bold px-6 py-3 rounded-2xl border-2 border-black dark:border-white">
                <FiGithub size={20} /> GitHub
              </motion.a>
              <motion.a whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:0.95 }}
                href="https://www.linkedin.com/in/vibhasha-nagvekar-466683284" target="_blank" rel="noopener noreferrer"
                className="window-card flex items-center gap-2 bg-pastel-blue dark:bg-blue-900/50 text-black dark:text-white font-heading font-bold px-6 py-3 rounded-2xl border-2 border-black dark:border-white">
                <FiLinkedin size={20} /> LinkedIn
              </motion.a>
              <motion.a whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:0.95 }}
                href="https://drive.google.com/drive/folders/15Ig8eAEH1bUwCeZqy9xPKS9xCubiQSpH" target="_blank" rel="noopener noreferrer"
                className="window-card flex items-center gap-2 bg-pastel-pink dark:bg-pink-900/50 text-black dark:text-white font-heading font-bold px-6 py-3 rounded-2xl border-2 border-black dark:border-white">
                <FiFileText size={20} /> Resume
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5 }}
              className="mt-10 flex items-center gap-2 justify-center lg:justify-start text-gray-500 dark:text-slate-400 text-sm font-heading"
            >
              <motion.div animate={{ y:[0,7,0] }} transition={{ repeat:Infinity, duration:1.4 }}>
                <FiArrowDown size={18} />
              </motion.div>
              scroll to explore
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity:0, x:60, scale:0.85 }}
            animate={{ opacity:1, x:0, scale:1 }}
            transition={{ duration:0.9, type:'spring', delay:0.2 }}
            className="flex-1 flex justify-center items-center relative z-10"
          >
            <div className="relative">
              <div
                className="absolute -inset-2 hero-ring opacity-70"
                style={{ borderRadius:'60% 40% 55% 45% / 50% 55% 45% 50%', filter:'blur(3px)' }}
              />
              <motion.div
                animate={{ y:[0,-14,0] }}
                transition={{ repeat:Infinity, duration:5, ease:'easeInOut' }}
                className="relative"
              >
                <div className="window-card overflow-hidden border-4 border-black dark:border-white" style={{ borderRadius:'2.5rem', background:'#b2d8d8' }}>
                  <img
                    src={profilePic}
                    alt="Vibhasha Nagvekar"
                    className="w-60 md:w-72 lg:w-80 block object-cover object-top"
                    style={{ maxHeight:'400px' }}
                  />
                </div>
                <motion.div animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:2.8 }}
                  className="absolute -top-4 -left-8 bg-black text-white font-heading font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 border-black">
                  CSS
                </motion.div>
                <motion.div animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:2.8, delay:0.7 }}
                  className="absolute -top-4 -right-8 bg-yellow-400 text-black font-heading font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 border-yellow-600">
                  HTML
                </motion.div>
                <motion.div animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:2.8, delay:1.4 }}
                  className="absolute -bottom-4 -right-8 bg-accent-pink text-white font-heading font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 border-pink-700">
                  React
                </motion.div>
                <motion.div animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:2.8, delay:2.1 }}
                  className="absolute -bottom-4 -left-8 bg-accent-blue text-white font-heading font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 border-blue-700">
                  Python
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}