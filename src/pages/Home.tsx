import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('הכל')

  const filtered = activeCategory === 'הכל'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #C9A84C33 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #C9A84C22 0%, transparent 60%)' }}
        />
        <div className="relative text-center text-white px-6">
          <p className="text-gold tracking-[0.4em] text-sm uppercase mb-4 font-body">קולקשן 2025</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-none">
            אופנה<br />
            <span className="text-gold">שמדברת</span>
          </h1>
          <p className="text-white/60 text-lg mb-10 font-body max-w-md mx-auto">
            -.................-
          </p>
          <a href="#products"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-body font-medium hover:bg-gold-light hover:text-charcoal transition-all duration-300 tracking-wide">
            גלי את הקולקשן
          </a>
        </div>
      </section>

      {/* Categories filter */}
      <section id="products" className="max-w-7xl mx-auto px-6 pt-16 pb-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-charcoal text-white shadow-md'
                  : 'bg-white text-muted hover:bg-gold/10 hover:text-gold border border-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-charcoal text-white py-20 mt-16 text-center">
        <p className="text-gold tracking-widest text-sm uppercase mb-3">משלוח חינם</p>
        <h2 className="font-display text-4xl font-bold mb-4">בכל הזמנה מעל ₪500</h2>
        <p className="text-white/50 font-body">החזרות חינם תוך 30 יום · אחריות מלאה</p>
      </section>

      {/* Footer */}
      <footer className="bg-cream border-t border-gold/20 py-12 text-center text-muted text-sm font-body">
        <h2 className="font-display text-2xl text-charcoal mb-3">LUXE</h2>
        <p>© 2025 כל הזכויות שמורות</p>
      </footer>
    </main>
  )
}
