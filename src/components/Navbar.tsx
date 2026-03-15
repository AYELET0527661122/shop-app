import { ShoppingBag, Search, Menu } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function Navbar() {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-5 h-5 text-charcoal" />
        </button>

        <div className="hidden md:flex gap-8 text-sm font-body tracking-wide text-muted">
          {['שמלות', 'תיקים', 'נעליים', 'אקססוריז'].map(cat => (
            <a key={cat} href="#" className="hover:text-gold transition-colors">{cat}</a>
          ))}
        </div>

        <h1 className="font-display text-2xl font-bold text-charcoal tracking-widest">LUXE</h1>

        <div className="flex items-center gap-4">
          <button className="hover:text-gold transition-colors">
            <Search className="w-5 h-5 text-charcoal" />
          </button>
          <button className="relative hover:text-gold transition-colors">
            <ShoppingBag className="w-5 h-5 text-charcoal" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-muted border-t border-gold/10 pt-4">
          {['שמלות', 'תיקים', 'נעליים', 'אקססוריז'].map(cat => (
            <a key={cat} href="#" className="hover:text-gold transition-colors">{cat}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
