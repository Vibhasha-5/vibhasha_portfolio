import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COLORS = ['#FF6B9D','#4EA8DE','#7BDCB5','#9D84B7','#FFD93D','#FF6B6B','#C4E7FF','#FFD6E8']
const STAR_COUNT = 12

function randomBetween(a, b) { return a + Math.random() * (b - a) }

// A single sparkle particle that flies out from the cursor
function Sparkle({ x, y, onDone }) {
  const angle  = randomBetween(0, 360)
  const dist   = randomBetween(30, 70)
  const color  = COLORS[Math.floor(Math.random() * COLORS.length)]
  const size   = randomBetween(5, 12)
  const tx     = Math.cos((angle * Math.PI) / 180) * dist
  const ty     = Math.sin((angle * Math.PI) / 180) * dist
  const shape  = Math.random() > 0.5 ? 'star' : 'circle'

  return (
    <motion.div
      style={{ position:'fixed', left: x, top: y, pointerEvents:'none', zIndex:9999, originX:'50%', originY:'50%' }}
      initial={{ opacity:1, scale:1, x:0, y:0 }}
      animate={{ opacity:0, scale:0, x: tx, y: ty }}
      transition={{ duration:0.6, ease:'easeOut' }}
      onAnimationComplete={onDone}
    >
      {shape === 'star' ? (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
        </svg>
      ) : (
        <div style={{ width: size, height: size, borderRadius:'50%', background: color }} />
      )}
    </motion.div>
  )
}

export default function CustomCursor() {
  const [pos, setPos]           = useState({ x: -100, y: -100 })
  const [sparkles, setSparkles] = useState([])
  const [clicking, setClicking] = useState(false)
  const [trail, setTrail]       = useState([])
  const idRef  = useRef(0)
  const lastRef = useRef({ x:0, y:0 })

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      setPos({ x, y })

      // Spawn sparkle every ~40px of movement
      const dx = x - lastRef.current.x
      const dy = y - lastRef.current.y
      if (Math.sqrt(dx*dx + dy*dy) > 40) {
        lastRef.current = { x, y }
        const id = idRef.current++
        setSparkles(s => [...s, { id, x, y }])
      }

      // Trail dots
      const id = idRef.current++
      setTrail(t => [...t.slice(-8), { id, x, y }])
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [])

  const removeSparkle = (id) => setSparkles(s => s.filter(sp => sp.id !== id))

  return (
    <>
      {/* Trail dots */}
      <AnimatePresence>
        {trail.map((dot, i) => (
          <motion.div key={dot.id}
            style={{
              position:'fixed', left: dot.x, top: dot.y,
              width: 6, height: 6, borderRadius:'50%',
              background: COLORS[i % COLORS.length],
              pointerEvents:'none', zIndex:9997,
              transform:'translate(-50%,-50%)'
            }}
            initial={{ opacity:0.7, scale:1 }}
            animate={{ opacity:0, scale:0 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.4 }}
          />
        ))}
      </AnimatePresence>

      {/* Sparkle particles */}
      {sparkles.map(sp => (
        <Sparkle key={sp.id} x={sp.x} y={sp.y} onDone={() => removeSparkle(sp.id)} />
      ))}

      {/* Main cursor — star shape */}
      <motion.div
        style={{
          position:'fixed',
          left: pos.x,
          top:  pos.y,
          pointerEvents:'none',
          zIndex:9998,
          transform:'translate(-50%,-50%)',
          mixBlendMode:'normal',
        }}
        animate={{ scale: clicking ? 0.7 : 1, rotate: clicking ? 45 : 0 }}
        transition={{ type:'spring', stiffness:300, damping:20 }}
      >
        <svg
          width={clicking ? 70 : 60}
          height={clicking ? 70 : 60}
          viewBox="0 0 24 24"
          style={{ filter:'drop-shadow(0 0 4px #e9ed05)' }}
        >
          <defs>
            <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#e9f507" />
              <stop offset="50%"  stopColor="#e44a9c" />
              <stop offset="100%" stopColor="#7BDCB5" />
            </linearGradient>
          </defs>
          <polygon
            points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
            fill="url(#cursorGrad)"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>
    </>
  )
}