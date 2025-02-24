export interface FoodSpot {
  id: string;
  name: string;
  location: string;
  area: string;
  category: string;
  priceRange: string;
  rating: number;
  numReviews: number;
  description: string;
  images: string[];
  features: string[];
}

export const foodSpots: FoodSpot[] = [
  {
    id: '1',
    name: 'Giovanni\'s Shrimp Truck',
    location: 'Haleiwa, North Shore',
    area: 'North Shore',
    category: 'Food Truck',
    priceRange: '$$',
    rating: 4.7,
    numReviews: 3456,
    description: 'Iconic North Shore food truck serving garlic shrimp plates. A must-visit spot for shrimp lovers with their famous garlic scampi that keeps tourists and locals coming back for more.',
    images: [
      'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    ],
    features: ['Outdoor Seating', 'Takeout', 'Cash Only', 'Family-friendly'],
  },
  {
    id: '2',
    name: 'Helena\'s Hawaiian Food',
    location: 'Kalihi, Honolulu',
    area: 'Honolulu',
    category: 'Local Food',
    priceRange: '$$',
    rating: 4.8,
    numReviews: 2789,
    description: 'James Beard Award-winning restaurant serving traditional Hawaiian food since 1946. Known for their pipikaula (dried beef) and laulau (pork wrapped in taro leaves).',
    images: [
      'https://images.unsplash.com/photo-1580130384388-8aaa51f6393c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1578332049773-6f0e90e5b4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Takeout', 'Family-style', 'Cash Only', 'Local Favorite'],
  },
  {
    id: '3',
    name: 'Poke Bar',
    location: 'Kailua, East Oahu',
    area: 'Kailua',
    category: 'Poke',
    priceRange: '$$',
    rating: 4.6,
    numReviews: 1543,
    description: 'Fresh poke bowls with various fish options and toppings. Build your own bowl with locally-sourced ingredients and house-made sauces.',
    images: [
      'https://images.unsplash.com/photo-1563253723-ebee0dd65fa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1502114823532-ee5a456476a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Takeout', 'Quick Bite', 'Healthy Options', 'Sustainable Seafood'],
  },
  {
    id: '4',
    name: 'Rainbow Drive-In',
    location: 'Kapahulu, Honolulu',
    area: 'Honolulu',
    category: 'Plate Lunch',
    priceRange: '$',
    rating: 4.5,
    numReviews: 3221,
    description: 'Iconic plate lunch spot serving Hawaiian comfort food since 1961. Famous for their generous portions of meat, two scoops of rice, and mac salad.',
    images: [
      'https://images.unsplash.com/photo-1561042669-7ec08861a2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1590871280019-ca3ea97b48a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Takeout', 'Local Favorite', 'Historic Spot', 'Breakfast'],
  },
  {
    id: '5',
    name: 'Matsumoto Shave Ice',
    location: 'Haleiwa, North Shore',
    area: 'North Shore',
    category: 'Shave Ice',
    priceRange: '$',
    rating: 4.6,
    numReviews: 4108,
    description: 'World-famous shave ice shop operating since 1951. Known for their fine, fluffy ice and wide variety of tropical flavors and toppings.',
    images: [
      'https://images.unsplash.com/photo-1581702443522-1307b127f133?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Takeout', 'Tourist Favorite', 'Historic Spot', 'Desserts'],
  },
  {
    id: '6',
    name: 'Marukame Udon',
    location: 'Waikiki, Honolulu',
    area: 'Honolulu',
    category: 'Japanese',
    priceRange: '$',
    rating: 4.7,
    numReviews: 5631,
    description: 'Popular Japanese chain restaurant known for freshly made udon noodles. Watch as noodles are made in front of you before choosing your broth and toppings.',
    images: [
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Quick Service', 'Budget-friendly', 'Cafeteria Style', 'Open Late'],
  },
  {
    id: '7',
    name: 'Ono Seafood',
    location: 'Kapahulu, Honolulu',
    area: 'Honolulu',
    category: 'Poke',
    priceRange: '$$',
    rating: 4.8,
    numReviews: 1876,
    description: 'Small, no-frills takeout spot with some of the freshest poke on the island. Known for their shoyu ahi and spicy mayo poke bowls.',
    images: [
      'https://images.unsplash.com/photo-1597964257981-1e7697c19d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1590866302052-77fe7b5a4a4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Takeout Only', 'Local Favorite', 'Fresh Seafood', 'Cash Only'],
  },
  {
    id: '8',
    name: 'Hula Dog',
    location: 'Waikiki, Honolulu',
    area: 'Honolulu',
    category: 'Fast Food',
    priceRange: '$',
    rating: 4.3,
    numReviews: 2143,
    description: 'Hawaiian-style hot dogs featuring unique tropical relishes and fruit mustards. Their signature dogs come in a sweet Hawaiian bread bun with a hole in the middle.',
    images: [
      'https://images.unsplash.com/photo-1612392166481-5c5357568e34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1599894019794-50339c9ad89c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    features: ['Quick Bite', 'Vegetarian Options', 'Unique Concept', 'Tourist Friendly'],
  },
]; 