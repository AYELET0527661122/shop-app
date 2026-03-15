import { ShoppingBag, Heart } from 'lucide-react'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      {product.badge && (
        <span className="absolute top-3 right-3 z-10 bg-gold text-white text-xs px-3 py-1 rounded-full font-body font-medium">
          {product.badge}
        </span>
      )}

      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 left-3 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all"
      >
        <Heart className={`w-4 h-4 transition-colors ${liked ? 'fill-red-400 text-red-400' : 'text-muted'}`} />
      </button>

      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300" />
      </div>

      <div className="p-5">
        <p className="text-xs text-gold font-medium tracking-widest uppercase mb-1">{product.category}</p>
        <h3 className="font-display text-charcoal text-lg font-semibold mb-2 leading-tight">{product.name}</h3>
        <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-charcoal">₪{product.price.toLocaleString()}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-charcoal text-white hover:bg-gold'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? 'נוסף!' : 'הוסף לסל'}
          </button>
        </div>
      </div>
    </div>
  )
}
