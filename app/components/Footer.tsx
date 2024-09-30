import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">PR-Connect</h3>
            <p className="text-gray-400">Innovative Marketing Solutions & QR Code Integration</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><Link href="/" className="text-gray-400 hover:text-teal-500 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-teal-500 transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-teal-500 transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-teal-500 transition duration-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-gray-400">Email: info@pr-connect.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', iconPath: 'M22 12c0-5.523...', link: '#' },
                { name: 'Twitter', iconPath: 'M8.29 20.251c7.547...', link: '#' },
                { name: 'LinkedIn', iconPath: 'M19 0h-14c...', link: '#' },
              ].map(({ name, iconPath, link }) => (
                <a key={name} href={link} className="text-gray-400 hover:text-teal-500 transition duration-300" aria-label={name}>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} PR-Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}