'use client';

import { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter results or redirect to a search results page
    console.log({ location, category, price });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-full shadow-lg p-1">
      <form 
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row"
      >
        <div className="flex-1 p-2 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs font-bold text-gray-600 mb-1">Where</label>
          <input
            type="text"
            placeholder="North Shore, Waikiki, Kailua..."
            className="w-full outline-none text-sm"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="flex-1 p-2 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs font-bold text-gray-600 mb-1">Category</label>
          <select
            className="w-full outline-none text-sm bg-transparent"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="local">Local Food</option>
            <option value="seafood">Seafood</option>
            <option value="poke">Poke</option>
            <option value="plate-lunch">Plate Lunch</option>
            <option value="shave-ice">Shave Ice</option>
            <option value="food-truck">Food Truck</option>
          </select>
        </div>
        
        <div className="flex-1 p-2 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-xs font-bold text-gray-600 mb-1">Price</label>
          <select
            className="w-full outline-none text-sm bg-transparent"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Any Price</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>
        
        <div className="p-2 md:p-0 flex items-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-airbnb-pink text-white rounded-full p-3 md:p-4 flex items-center justify-center hover:bg-airbnb-red transition md:ml-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="ml-2 font-semibold">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar; 