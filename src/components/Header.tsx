import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <Image 
              src="/AirbnbFood/logo.svg" 
              alt="OahuEats Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-airbnb-pink font-bold text-xl">OahuEats</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-airbnb-pink">
            Home
          </Link>
          <Link href="/categories/" className="font-medium hover:text-airbnb-pink">
            Categories
          </Link>
          <Link href="/map/" className="font-medium hover:text-airbnb-pink">
            Map
          </Link>
          <Link href="/about/" className="font-medium hover:text-airbnb-pink">
            About
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex relative rounded-full border border-gray-300 hover:shadow-md transition duration-200 px-4 py-2">
          <input
            type="text"
            placeholder="Search for food spots..."
            className="outline-none bg-transparent w-64"
          />
          <button className="bg-airbnb-pink rounded-full p-2 ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 