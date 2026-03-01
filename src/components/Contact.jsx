import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'
import cuteBot from '../assets/cute-bot.gif'

const contactMethods = [
  { Icon:FiMail,   title:'Email',    value:'nagvekarvibha04@gmail.com',               href:'mailto:nagvekarvibha04@gmail.com', color:'from-pastel-pink to-pink-200' },
  { Icon:FiPhone,  title:'Phone',    value:'+91 98196 05710',                         href:'tel:+919819605710',               color:'from-pastel-blue to-blue-200' },
  { Icon:FiMapPin, title:'Location', value:'Mumbai, India',                           href:'#',                               color:'from-pastel-purple to-purple-200' },
]

const socialLinks = [
  { Icon:FiGithub,   href:'https://github.com/Vibhasha-5',                                             label:'GitHub',   cls:'bg-black text-white border-black' },
  { Icon:FiLinkedin, href:'https://www.linkedin.com/in/vibhasha-nagvekar-466683284',                    label:'LinkedIn', cls:'bg-blue-600 text-white border-blue-700' },
  { Icon:FiFileText, href:'https://drive.google.com/drive/folders/15Ig8eAEH1bUwCeZqy9xPKS9xCubiQSpH', label:'Resume',   cls:'bg-accent-pink text-white border-pink-600' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 text-black dark:text-white"
        >
          get in touch
        </motion.h2>

        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ delay:0.2 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <div className="relative inline-block">
            <motion.img
              src={cuteBot} alt="Bot" className="w-20"
              animate={{ y:[0,-8,0] }}
              transition={{ repeat:Infinity, duration:2.5, ease:'easeInOut' }}
            />
            <motion.div
              initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
              transition={{ delay:0.5, type:'spring' }}
              className="absolute -top-9 left-12 bg-white dark:bg-slate-800 border-2 border-black dark:border-slate-600 rounded-2xl px-3 py-1 text-xs font-bold font-heading shadow-lg whitespace-nowrap text-black dark:text-white"
            >
              hello there!
            </motion.div>
          </div>
          <p className="text-lg text-center text-gray-600 dark:text-slate-300 max-w-2xl">
            Interested in working together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map(({ Icon, title, value, href, color }, i) => (
            <motion.a key={title} href={href}
              initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.1 }} whileHover={{ scale:1.05, y:-8 }}
              className={`window-card bg-gradient-to-br ${color} border-2 border-black rounded-3xl p-8 text-center block`}
            >
              <Icon className="mx-auto mb-4 text-black" size={40} />
              <h3 className="font-heading text-xl font-bold mb-2 text-black">{title}</h3>
              <p className="text-pink-700 font-bold text-sm">{value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center">
          <h3 className="font-heading text-2xl font-bold mb-6 text-black dark:text-white">Connect on Social Media</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map(({ Icon, href, label, cls }, i) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                transition={{ delay:i*0.1, type:'spring' }}
                whileHover={{ scale:1.1, y:-4 }} whileTap={{ scale:0.9 }}
                className={`window-card flex items-center gap-3 ${cls} font-heading font-bold px-6 py-4 border-2 rounded-2xl`}>
                <Icon size={22} /> {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}