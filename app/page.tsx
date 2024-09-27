import Link from 'next/link'
import Image from 'next/image'
import Team from '../public/images/team.jpg'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Brand with PR-Connect</h1>
          <p className="text-xl mb-8">Innovative Marketing Solutions & QR Code Integration</p>
          <Link href="/contact" className="bg-white text-teal-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src={Team} alt="PR-Connect Team" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">Welcome to PR-Connect</h2>
              <p className="text-gray-600 mb-6">
                At PR-Connect, we specialize in enhancing your online presence, automating your marketing with QR codes, and creating compelling content that resonates with your audience. Our unique blend of innovative strategies and cutting-edge technology helps your brand thrive in the digital landscape.
              </p>
              <Link href="/about" className="text-teal-600 font-semibold hover:text-teal-800">
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Online Presence Development</h3>
              <p className="text-gray-600 mb-4">Enhance your digital visibility with our expert website design and SEO strategies.</p>
              <Link href="/services#online-presence" className="text-teal-600 hover:text-teal-800">Learn More &rarr;</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">QR Automation Solutions</h3>
              <p className="text-gray-600 mb-4">Bridge physical and digital experiences with our innovative QR code integration.</p>
              <Link href="/services#qr-automation" className="text-teal-600 hover:text-teal-800">Learn More &rarr;</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
              <p className="text-gray-600 mb-4">Engage your audience with our professional blog writing, social media management, and video production.</p>
              <Link href="/services#content-creation" className="text-teal-600 hover:text-teal-800">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8">Let&apos;s create innovative marketing solutions together.</p>
          <Link href="/contact" className="bg-white text-teal-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}