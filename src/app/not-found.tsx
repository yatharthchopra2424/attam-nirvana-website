import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg">
      <div className="text-center px-4">
        <h1 className="text-8xl font-poppins font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-poppins font-bold text-dark-text mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on your healing journey.
        </p>
        <Button href="/" size="lg">
          Return Home
        </Button>
      </div>
    </div>
  )
}
