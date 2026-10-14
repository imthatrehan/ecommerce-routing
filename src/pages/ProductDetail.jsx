import { Link, useOutletContext, useParams } from 'react-router-dom'
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShoppingBag,
  Truck,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import { products } from '../../data'
import { useCart } from '../context/CartContext'

function ProductDetail() {
 const { toggleCart, isInCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const { id: productId } = useParams()
  const product = products.find((p) => String(p.id) === productId)
  if (!product) {
    return <div className="spinner"></div>
  }
  
  const related = products.filter((p) => p.id !== product.id).slice(0, 4)
  const isCart = isInCart(product.id)

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-8">
        <nav className="flex items-center gap-1.5 text-sm text-stone-500">
          <Link to="/" className="hover:text-stone-900">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-stone-900">
            Products
          </Link>
          <ChevronRight size={14} />
          <span className="text-stone-900">{product?.name}</span>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className={`flex aspect-square flex-col justify-between rounded-lg p-8 ${product?.tone}`}
            >
              <span className="text-sm opacity-70">{product?.category}</span>
              <span className="font-display text-7xl font-semibold leading-none tracking-tight sm:text-8xl">
                {product.name}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-3">
              <button
                className={`aspect-square rounded-md ring-2 ring-stone-900 ring-offset-2 ${product?.tone}`}
                aria-label="Image 1"
              />
              <button
                className={`aspect-square rounded-md opacity-50 transition-opacity hover:opacity-100 ${product?.tone}`}
                aria-label="Image 2"
              />
              <button
                className={`aspect-square rounded-md opacity-50 transition-opacity hover:opacity-100 ${product?.tone}`}
                aria-label="Image 3"
              />
              <button
                className={`aspect-square rounded-md opacity-50 transition-opacity hover:opacity-100 ${product.tone}`}
                aria-label="Image 4"
              />
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-sm text-stone-500">{product?.category}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {product?.name}
            </h1>
            <p className="mt-4 font-display text-3xl font-semibold">
              Rs. {product?.price.toLocaleString()}
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-stone-600">
              {product?.description}
            </p>
            <div className="mt-8 border-t border-stone-200 pt-8">
              <p className="text-sm font-medium">Quantity</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className=" flex h-12 items-center rounded-full border border-stone-300">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => {
                      if (quantity < 2) return
                      setQuantity(quantity - 1)
                    }}
                    className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full hover:bg-stone-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQuantity(quantity + 1)}
                    className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full hover:bg-stone-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => toggleCart(product, quantity)}
                  className={`cursor-pointer flex h-12 flex-1 items-center justify-center gap-2 rounded-full ${isCart ? ' bg-stone-700' : ' bg-stone-900'} px-8 text-sm font-medium text-white transition-colors hover:bg-[#3446f0]`}
                >
                  <ShoppingBag size={18} />
                  {isCart ? 'Remove from cart' : 'Add to cart'}
                </button>
                <button
                  aria-label="Save to wishlist"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 hover:border-stone-900"
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-stone-600">
              <li className="flex items-center gap-3">
                <Truck size={18} strokeWidth={1.6} />
                Delivered in 2 to 4 working days
              </li>
              <li className="flex items-center gap-3">
                <RotateCcw size={18} strokeWidth={1.6} />
                Return within 7 days if it isn't right
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            You may also need
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
