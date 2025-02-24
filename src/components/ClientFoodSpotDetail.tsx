'use client';

import { useState } from 'react';
import Image from 'next/image';
import { foodSpots } from '@/data/foodSpots';

interface ClientFoodSpotDetailProps {
  id: string;
}

export default function ClientFoodSpotDetail({ id }: ClientFoodSpotDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const foodSpot = foodSpots.find(spot => spot.id === id);
  
  if (!foodSpot) {
    return null;
  }
  
  return (
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
  );
} 