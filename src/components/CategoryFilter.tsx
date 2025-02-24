import Image from 'next/image';

interface CategoryProps {
  label: string;
  icon: string;
  isSelected?: boolean;
  onClick: () => void;
}

const CATEGORIES = [
  { label: 'Local Food', icon: '/AirbnbFood/icons/local.svg' },
  { label: 'Poke', icon: '/AirbnbFood/icons/poke.svg' },
  { label: 'Plate Lunch', icon: '/AirbnbFood/icons/plate.svg' },
  { label: 'Seafood', icon: '/AirbnbFood/icons/seafood.svg' },
  { label: 'Food Truck', icon: '/AirbnbFood/icons/truck.svg' },
  { label: 'Shave Ice', icon: '/AirbnbFood/icons/shave-ice.svg' },
  { label: 'Hawaiian', icon: '/AirbnbFood/icons/hawaii.svg' },
  { label: 'Asian Fusion', icon: '/AirbnbFood/icons/fusion.svg' },
];

const Category = ({ label, icon, isSelected = false, onClick }: CategoryProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-2 px-4 transition ${
        isSelected
          ? 'text-airbnb-pink border-b-2 border-airbnb-pink'
          : 'text-gray-500 hover:text-gray-800 border-b-2 border-transparent'
      }`}
    >
      <div className="relative w-6 h-6 mb-1">
        <Image src={icon} alt={label} width={24} height={24} />
      </div>
      <span className="text-xs whitespace-nowrap">{label}</span>
    </button>
  );
};

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="border-b border-gray-200">
      <div className="container-custom flex items-center justify-between overflow-x-auto py-2 scrollbar-hide">
        <div className="flex space-x-2">
          {CATEGORIES.map((category) => (
            <Category
              key={category.label}
              label={category.label}
              icon={category.icon}
              isSelected={selectedCategory === category.label}
              onClick={() => onSelectCategory(category.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter; 