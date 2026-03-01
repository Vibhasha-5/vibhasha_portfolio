import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'

const navItems = [
  { name:'Home',        href:'#home' },
  { name:'About',       href:'#about' },
  { name:'Skills',      href:'#skills' },
  { name:'Projects',    href:'#projects' },
  { name:'Experience',  href:'#experience' },
  { name:'Open Source', href:'#contributions' },
  { name:'Certs',       href:'#certifications' },
  { name:'Contact',     href:'#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior:'smooth', block:'start' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y:-100 }} animate={{ y:0 }}
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b-2 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 border-black dark:border-slate-700 shadow-lg'
          : 'bg-white/80 dark:bg-slate-900/80 border-black/20 dark:border-slate-700/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            whileHover={{ scale:1.05 }}
            onClick={(e) => go(e,'#home')}
            className="font-heading text-2xl font-bold cursor-pointer text-black dark:text-white"
          >
            <span className="text-accent-pink">{'<'}</span>Vibhasha<span className="text-accent-pink">{'/>'}</span>
          </motion.span>

          <div className="hidden md:flex items-center gap-5">
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={(e) => go(e, item.href)}
                className="font-heading font-medium text-sm text-gray-800 dark:text-slate-200 hover:text-accent-pink dark:hover:text-accent-pink transition-colors relative group cursor-pointer">
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent-pink rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-pastel-pink dark:bg-slate-700 border-2 border-black dark:border-slate-500">
              {darkMode
                ? <HiSun size={20} className="text-yellow-300" />
                : <HiMoon size={20} className="text-gray-700" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-1">
              {darkMode ? <HiSun size={20} className="text-yellow-300" /> : <HiMoon size={20} className="text-gray-700" />}
            </button>
            <button onClick={() => setOpen(o => !o)} className="text-black dark:text-white">
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
              className="md:hidden overflow-hidden border-t border-gray-200 dark:border-slate-700">
              <div className="py-3 flex flex-col gap-3">
                {navItems.map(item => (
                  <a key={item.name} href={item.href} onClick={(e) => go(e, item.href)}
                    className="font-heading font-medium text-gray-800 dark:text-slate-200 hover:text-accent-pink py-1 cursor-pointer">
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}