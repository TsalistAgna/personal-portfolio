import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Media from './Media.jsx'

function DesignCursor({ label, variant }) {
  return <div className={`design-cursor design-cursor-${variant}`}>
    <div className="design-cursor-float">
      <svg viewBox="0 0 32 40" fill="none" aria-hidden="true"><path d="M3 3L27 22L16 24L11 35L3 3Z" fill="currentColor" stroke="#171717" strokeWidth="2.5" strokeLinejoin="round" /></svg>
      <span>{label}</span>
    </div>
  </div>
}

export default function Hero() {
  const heroRef = useRef(null)

  function moveCursors(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    heroRef.current.style.setProperty('--cursor-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 64}px`)
    heroRef.current.style.setProperty('--cursor-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 40}px`)
  }

  function resetCursors() {
    heroRef.current.style.setProperty('--cursor-x', '0px')
    heroRef.current.style.setProperty('--cursor-y', '0px')
  }

  return <section ref={heroRef} className="site-shell hero relative" onPointerMove={moveCursors} onPointerLeave={resetCursors}>
    <div className="hero-kicker"><span className="status-dot" /> Tsalist Agna, or Nana <span className="hero-kicker-line" /> Product designer</div>
    <div className="relative z-10">
      <h1 className="hero-title">Designing products.<br /><span className="hero-title-soft">Managing the process.</span><br />Making ideas <span className="hero-selection">real.<i /><i /><i /><i /></span></h1>
      <div className="hero-cursors" aria-hidden="true">
        <DesignCursor label="Product Design" variant="design" />
        <span className="hero-canvas-note">A little curiosity. A lot of making.</span>
        <DesignCursor label="Making it happen" variant="build" />
      </div>
      <div className="hero-bottom"><p className="max-w-[37rem] text-lg leading-relaxed text-ink-muted md:text-xl">I work across product design, project management, and implementation. I like shaping useful ideas, organizing the work, and understanding how the product gets built.</p>
        <Link className="pill-button pill-dark" to="/#selected">Explore my work <span aria-hidden="true">↘</span></Link>
      </div>
    </div>
    <div className="hero-portrait"><Media src="/image/profile_pixel.png" alt="Portrait of Tsalist Agna" loading="eager" /></div>
    <span className="hero-spark" aria-hidden="true">✳</span>
    {/* <div className="hero-side-note">THOUGHTFUL DESIGN</div> */}
  </section>
}
