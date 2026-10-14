import { Link} from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { toggleCart, isInCart } = useCart()
  const isCart = isInCart(product.id)
  
  return (
    <article className="group">
      <div
        className={`relative aspect-4/5 overflow-hidden rounded-lg ${product.tone}`}
      >
        <Link
          to={`/products/${product.id}`}
          aria-label={product.name}
          className="absolute inset-0 flex flex-col justify-between p-5"
        >
          <span className="text-xs opacity-70">{product.category}</span>
          <span className="font-display text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
            {product.name}
          </span>
        </Link>
        {isCart ? (
          <button
            onClick={() => remove(product.id)}
            aria-label={`Add ${product.name} to cart`}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white transition hover:scale-105 focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <Minus size={18} />
          </button>
        ) : (
          <button
            onClick={() => toggleCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-stone-900 transition hover:scale-105 focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <Plus size={18} />
          </button>
        )}
      </div>
      <div className="mt-3">
        <p className="font-medium text-stone-900">
          Rs. {product.price.toLocaleString()}
        </p>
        <p className="mt-0.5 line-clamp-1 text-sm text-stone-500">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
