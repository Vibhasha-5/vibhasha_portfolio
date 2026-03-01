import { motion } from 'framer-motion'
import cuteBot from '../assets/cute-bot.gif'

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t-2 border-black dark:border-slate-700 bg-white/40 dark:bg-slate-900/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
        className="max-w-7xl mx-auto flex flex-col items-center gap-3"
      >
        <motion.img
          src={cuteBot} alt="Bot" className="w-12"
          animate={{ y:[0,-8,0] }}
          transition={{ repeat:Infinity, duration:2.5, ease:'easeInOut' }}
        />
        <p className="font-heading text-base text-black dark:text-white">
          &copy; 2026 Vibhasha Nagvekar — made with code and coffee
        </p>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic">
          "Securing the digital world, one line of code at a time"
        </p>
      </motion.div>
    </footer>
  )
}