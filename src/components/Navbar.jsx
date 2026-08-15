import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`pixel-nav ${open ? 'mobile-open' : ''}`} aria-label="Primary navigation">
      <div className="pixel-nav-inner">
        <Link to="/" className="pixel-brand" onClick={close}>
          <span className="pixel-brand-mark" aria-hidden="true">✦</span>
          <span className="pixel-brand-name">PEHCHAAN</span>
        </Link>

        <div className="pixel-nav-links">
          <Link to="/" onClick={close}>Discover</Link>
          <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#games" onClick={() => setOpen(false)}>Games</a>
          <a href="#journey" onClick={() => setOpen(false)}>Journey</a>
        </div>

        <Link to="/start" className="pixel-nav-start" onClick={() => setOpen(false)}>
          Start →
        </Link>

        <button
          type="button"
          className="pixel-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </nav>
  )
}
