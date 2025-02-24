import Image from 'next/image';
import Link from 'next/link';

interface FoodSpotCardProps {
  id: string;
  name: string;
  location: string;
  category: string;
  price: string;
  rating: number;
  imageUrl: string;
  isFavorite?: boolean;
}

const FoodSpotCard = ({
  id,
  name,
  location,
  category,
  price,
  rating,
  imageUrl,
  isFavorite = false,
}: FoodSpotCardProps) => {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 relative">
        <Image
          fill
          className="h-full w-full object-cover transition group-hover:scale-105 duration-300"
          src={imageUrl}
          alt={name}
        />
        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white shadow-md hover:scale-110 transition">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isFavorite ? "currentColor" : "none"}
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`w-5 h-5 ${isFavorite ? 'text-airbnb-pink' : 'text-dark-gray'}`}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>
      <Link href={`/food-spot/${id}`}>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold truncate">{name}</h3>
            <div className="flex items-center gap-1 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          <div className="text-sm text-light-gray truncate">{location}</div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold">{category}</span>
              <span>•</span>
              <span>{price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodSpotCard; 