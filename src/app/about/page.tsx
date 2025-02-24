import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About OahuEats</h1>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Discover the best local food spots and hidden gems on Oahu, Hawaii
            </p>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="py-16 container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                OahuEats was created with a simple mission: to help both locals and visitors discover the incredible food culture of Oahu. Beyond the typical tourist spots, we aim to showcase the authentic, local food gems that make Hawaii's cuisine so special.
              </p>
              <p className="text-gray-700 mb-4">
                From traditional Hawaiian plate lunches to fresh poke spots, from North Shore food trucks to hidden eateries in Honolulu, we're passionate about connecting food lovers with the best culinary experiences the island has to offer.
              </p>
              <p className="text-gray-700">
                Whether you're looking for local comfort food, fresh seafood, or innovative island fusion, OahuEats helps you explore the diverse and delicious food landscape of Oahu.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576308124663-ba26242b66e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Hawaiian food"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-airbnb-pink rounded-full text-white flex items-center justify-center text-xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold mb-4">Search &amp; Filter</h3>
                <p className="text-gray-700">
                  Browse food spots by location, category, or price range. Our platform makes it easy to find exactly what you're craving, wherever you are on the island.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-airbnb-pink rounded-full text-white flex items-center justify-center text-xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold mb-4">Explore Details</h3>
                <p className="text-gray-700">
                  Dive deeper into each food spot with detailed descriptions, photos, ratings, and key features to help you decide where to enjoy your next meal.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-airbnb-pink rounded-full text-white flex items-center justify-center text-xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold mb-4">Eat &amp; Enjoy</h3>
                <p className="text-gray-700">
                  Visit the spot, enjoy authentic local cuisine, and become part of the vibrant food community that makes Oahu's culinary scene so special.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team/Contact Section */}
        <div className="py-16 container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Have a favorite food spot we missed? Questions about the platform? We'd love to hear from you! Our team is passionate about food and committed to creating the best resource for food lovers on Oahu.
          </p>
          <a href="mailto:contact@oahueats.com" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 