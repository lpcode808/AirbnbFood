# OahuEats

OahuEats is a web application inspired by Airbnb's design that focuses on helping users discover the best food spots on Oahu, Hawaii. Instead of rental properties, this platform showcases local restaurants, food trucks, and hidden culinary gems around the island.

🔗 **Live Demo:** [Visit OahuEats](https://lpcode808.github.io/AirbnbFood/)

## Features

- **Browse Food Spots**: Explore a curated collection of the best places to eat on Oahu
- **Category Filtering**: Filter food spots by category (Poke, Plate Lunch, Food Truck, etc.)
- **Detailed Information**: View detailed information about each food spot including photos, ratings, and features
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components inspired by Airbnb's design system

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/lpcode808/AirbnbFood.git
cd AirbnbFood
```

2. Install dependencies
```bash
npm install
```

3. Download sample images
```bash
npm run download-images
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

- `/src/app`: Pages and routes using Next.js App Router
- `/src/components`: Reusable UI components
- `/src/data`: Mock data for food spots
- `/src/styles`: Global styles and Tailwind configuration
- `/public`: Static assets including icons and images

## Future Enhancements

- Implement map view with location markers for all food spots
- Add user authentication for saving favorite spots
- Integrate real restaurant data via API
- Add search functionality by food type, location, or name
- Implement reviews and ratings system

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from Airbnb
- All food spot images sourced from Unsplash
- Icons created for category filtering 