'use client';

import { useState } from 'react';
import CategoryFilter from '@/components/CategoryFilter';
import FoodSpotCard from '@/components/FoodSpotCard';
import { foodSpots } from '@/data/foodSpots';

export default function ClientHome() {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Filter food spots based on the selected category
  const filteredFoodSpots = selectedCategory
    ? foodSpots.filter(spot => spot.category === selectedCategory)
    : foodSpots;

  return (
    <>
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <div className="container-custom py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {selectedCategory ? `${selectedCategory} Spots` : 'All Food Spots'}
          </h2>
          <p className="text-light-gray">
            {filteredFoodSpots.length} {filteredFoodSpots.length === 1 ? 'spot' : 'spots'} found
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoodSpots.map((spot) => (
            <FoodSpotCard
              key={spot.id}
              id={spot.id}
              name={spot.name}
              location={spot.location}
              category={spot.category}
              price={spot.priceRange}
              rating={spot.rating}
              imageUrl={spot.images[0]}
            />
          ))}
        </div>
        
        {filteredFoodSpots.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No food spots found</h3>
            <p className="text-light-gray">
              Try selecting a different category or adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </>
  );
} 