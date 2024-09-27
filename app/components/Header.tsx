import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-teal-600">PR-Connect</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-teal-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-teal-600">About Us</Link>
            <Link href="/services" className="text-gray-800 hover:text-teal-600">Services</Link>
            <Link href="/case-studies" className="text-gray-800 hover:text-teal-600">Case Studies</Link>
            <Link href="/resources" className="text-gray-800 hover:text-teal-600">Resources</Link>
            <Link href="/contact" className="text-gray-800 hover:text-teal-600">Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}