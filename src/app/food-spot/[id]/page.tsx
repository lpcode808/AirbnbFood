'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { foodSpots } from '@/data/foodSpots';

export default function FoodSpotDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const foodSpot = foodSpots.find(spot => spot.id === id);
  
  if (!foodSpot) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Food spot not found</h1>
            <p className="text-light-gray mb-6">
              The food spot you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/" className="btn btn-primary">
              Return to homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container-custom py-8 flex-1">
        <div className="mb-6">
          <Link href="/" className="text-airbnb-pink flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all food spots
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
              <Image 
                src={foodSpot.images[currentImageIndex]} 
                alt={foodSpot.name}
                fill
                className="object-cover"
              />
            </div>
            
            {foodSpot.images.length > 1 && (
              <div className="mt-4 flex space-x-2">
                {foodSpot.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`relative w-16 h-16 overflow-hidden rounded-md ${
                      index === currentImageIndex ? 'ring-2 ring-airbnb-pink' : 'opacity-70'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image 
                      src={image} 
                      alt={`${foodSpot.name} image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Food Spot Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{foodSpot.name}</h1>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{foodSpot.rating}</span>
                <span className="text-light-gray">({foodSpot.numReviews} reviews)</span>
              </div>
            </div>
            
            <p className="text-lg mb-4">{foodSpot.location}</p>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                {foodSpot.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                {foodSpot.priceRange}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                {foodSpot.area}
              </span>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-gray-700">{foodSpot.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <div className="flex flex-wrap gap-2">
                {foodSpot.features.map((feature, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="btn btn-primary flex-1 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                View on Map
              </button>
              <button className="btn border border-gray-300 flex-1 flex justify-center items-center hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                Share
              </button>
              <button className="btn border border-gray-300 p-2 aspect-square flex justify-center items-center hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Similar Food Spots Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Food Spots</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodSpots
              .filter(spot => spot.id !== id && spot.category === foodSpot.category)
              .slice(0, 4)
              .map((spot) => (
                <Link key={spot.id} href={`/food-spot/${spot.id}`} className="group">
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 relative">
                    <Image
                      fill
                      className="h-full w-full object-cover transition group-hover:scale-105 duration-300"
                      src={spot.images[0]}
                      alt={spot.name}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold truncate">{spot.name}</h3>
                      <div className="flex items-center gap-1 ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{spot.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-light-gray truncate">{spot.location}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 