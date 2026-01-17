import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'

interface ServiceCardProps {
  image: string
  title: string
  description: string
  price?: string
  duration?: string
  rating?: number
  href: string
  featured?: boolean
}

export default function ServiceCard({
  image,
  title,
  description,
  price,
  duration,
  rating = 5,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={clsx(
        'group bg-primary-900 rounded-xl border border-primary-700 overflow-hidden card-hover',
        featured && 'ring-2 ring-accent-purple'
      )}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-accent-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-primary-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-poppins font-semibold text-white mb-3 group-hover:text-accent-purple transition-colors">
          {title}
        </h3>
        <p className="text-sm text-white/70 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Metadata */}
        {(price || duration) && (
          <div className="flex items-center justify-between text-sm text-accent-purple mb-4">
            {price && <span className="font-semibold">{price}</span>}
            {duration && (
              <span className="flex items-center gap-1 text-white/60">
                <Clock className="w-4 h-4" />
                {duration}
              </span>
            )}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={clsx(
                'w-4 h-4',
                i < rating ? 'text-accent-gold fill-current' : 'text-primary-700'
              )}
            />
          ))}
          <span className="text-xs text-white/50 ml-1">({rating.toFixed(1)}/5.0)</span>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-purple 
                   hover:text-white transition-colors group/link"
        >
          READ MORE
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
