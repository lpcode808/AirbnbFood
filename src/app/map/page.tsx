import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 container-custom py-8">
        <h1 className="text-3xl font-bold mb-6">Explore Food Spots on Map</h1>
        
        <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-4">Map Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're working on an interactive map experience to help you discover food spots around Oahu.
              Check back soon for this feature!
            </p>
            <Link href="/" className="btn btn-primary">
              Browse Food Spots
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 