import { motion } from 'framer-motion'
import { FiBookOpen, FiTarget, FiAward, FiTrendingUp } from 'react-icons/fi'
import devWorking from '../assets/dev-working.gif'

const highlights = [
  {
    Icon: FiBookOpen, title:'Education',
    content:'B.E. in Information Technology', subtitle:'CGPA: 8.37',
    extra:'Honors in Cybersecurity — CGPA: 10.0',
    school:'St. Francis Institute of Technology, Mumbai', period:'Nov 2022 – Jun 2026',
    bg:'from-pastel-pink to-pink-200'
  },
  {
    Icon: FiTarget, title:'Expertise',
    items:['Full-Stack Web Development','Ethical Hacking & VAPT','Machine Learning Applications','Network Security Analysis','Cloud Technologies (Oracle)'],
    bg:'from-pastel-blue to-blue-200'
  },
  {
    Icon: FiAward, title:'Achievement',
    content:'Hacktoberfest 2025 Supercontributor',
    subtitle:'Contributed to 10+ open-source projects focusing on backend integration, security simulations, and UI enhancements.',
    bg:'from-pastel-purple to-purple-200'
  },
  {
    Icon: FiTrendingUp, title:'Core Strengths',
    items:['Problem-Solving','Technical Documentation','Teamwork & Communication','CTF Simulations'],
    bg:'from-pastel-green to-green-200'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity:0, y:-50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-10 text-black dark:text-white"
        >
          about me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity:0, scale:0.75 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
            className="flex-shrink-0"
          >
            <div className="window-card rounded-3xl border-2 border-black dark:border-white bg-pastel-blue/40 dark:bg-slate-800 p-3">
              <img src={devWorking} alt="Developer" className="w-44 md:w-52 rounded-2xl" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.15 }}>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 leading-relaxed">
              Hi! I am <strong className="text-black dark:text-white">Vibhasha Nagvekar</strong>, an aspiring IT engineer
              passionate about building secure, scalable solutions. Currently pursuing B.E. in Information Technology
              with <strong className="text-accent-pink">Honors in Cybersecurity</strong> at St. Francis Institute of Technology, Mumbai.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Security','React','Python','ML','Oracle Cloud'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-700 border-2 border-black dark:border-slate-500 rounded-full text-sm font-bold font-heading text-black dark:text-white">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((h, i) => (
            <motion.div key={h.title}
              initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*0.1 }} whileHover={{ scale:1.02, y:-5 }}
              className={`window-card bg-gradient-to-br ${h.bg} border-2 border-black rounded-3xl p-8`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-full border-2 border-black">
                  <h.Icon size={26} className="text-accent-pink" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-black">{h.title}</h3>
              </div>
              {h.content && (
                <div>
                  <p className="font-bold text-lg mb-1 text-black">{h.content}</p>
                  {h.subtitle && <p className="text-gray-700 mb-1 text-sm">{h.subtitle}</p>}
                  {h.extra   && <p className="text-pink-700 font-semibold mb-1 text-sm">{h.extra}</p>}
                  {h.school  && <p className="text-sm text-gray-600">{h.school}</p>}
                  {h.period  && <p className="text-sm text-gray-600">{h.period}</p>}
                </div>
              )}
              {h.items && (
                <ul className="space-y-2">
                  {h.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-800 text-sm">
                      <span className="text-pink-600 font-bold mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}