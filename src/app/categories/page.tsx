'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { foodSpots } from '@/data/foodSpots';

export default function CategoriesPage() {
  // Get unique categories and organize food spots by category
  const categories = Array.from(new Set(foodSpots.map(spot => spot.category)));
  const foodSpotsByCategory = categories.reduce((acc: any, category) => {
    acc[category] = foodSpots.filter(spot => spot.category === category);
    return acc;
  }, {});
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Food Categories</h1>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Explore Oahu's food gems by category
            </p>
          </div>
        </div>
        
        {/* Categories Section */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-2">{category}</span>
                  <span className="text-light-gray text-base font-normal">({foodSpotsByCategory[category].length})</span>
                </h2>
                
                <div className="space-y-6">
                  {foodSpotsByCategory[category].map((spot: any) => (
                    <Link 
                      key={spot.id} 
                      href={`/food-spot/${spot.id}`}
                      className="flex bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                      <div className="w-1/3 relative h-32">
                        <Image
                          src={spot.images[0]}
                          alt={spot.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{spot.name}</h3>
                          <div className="flex items-center gap-1 ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">{spot.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-light-gray mb-1">{spot.location}</p>
                        <p className="text-sm text-light-gray mb-2">{spot.priceRange}</p>
                        <div className="flex flex-wrap gap-1">
                          {spot.features.slice(0, 2).map((feature: string, index: number) => (
                            <span key={index} className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                          {spot.features.length > 2 && (
                            <span className="px-2 py-0.5 text-xs text-light-gray">
                              +{spot.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 