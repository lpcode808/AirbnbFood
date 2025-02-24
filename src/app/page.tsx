import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';
import ClientHome from '@/components/ClientHome';

export default function Home() {
  return (
    <main>
      <Header />
      
      <div className="pt-10 pb-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Discover the Best Food Spots on Oahu
          </h1>
          <p className="text-xl text-light-gray text-center mb-8">
            From food trucks to local favorites, find the best eats across the island
          </p>
          
          <div className="py-4">
            <SearchBar />
          </div>
        </div>
      </div>
      
      <ClientHome />
      
      <Footer />
    </main>
  );
} 