import { ChefHat } from 'lucide-react';

const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1767114915936-745dd372f1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByb3RpJTIwbmFhbiUyMGJyZWFkJTIwY3Vycnl8ZW58MXx8fHwxNzY5OTQwMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Breads & Curries',
    category: 'Main Course'
  },
  {
    image: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-03/dosa.jpg',
    title: 'South Indian Delights',
    category: 'Breakfast'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkAhAyAU05HUXatMezoyrJV6iEPzevOnZ5A&s',
    title: 'Aromatic Biryani',
    category: 'Main Course'
  },
  {
    image:
      'https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0JTIwZ3VsYWIlMjBqYW11bnxlbnwxfHx8fDE3Njk5NDAyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Traditional Sweets',
    category: 'Desserts'
  },
  {
    image: 'https://cf0316.s3.amazonaws.com/cookificom/menu/50095/79435e.jpg',
    title: 'Chaat & Snacks',
    category: 'Starters'
  }
];

import { ChefHat, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1767114915936-745dd372f1d8?q=80&w=1200',
    title: 'Exquisite Main Course',
    category: 'Main Dish'
  },
  {
    image: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-03/dosa.jpg',
    title: 'South Indian Specialties',
    category: 'Breakfast'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkAhAyAU05HUXatMezoyrJV6iEPzevOnZ5A&s',
    title: 'Royal Biryani Feast',
    category: 'Royal'
  },
  {
    image: 'https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?q=80&w=1200',
    title: 'Traditional Sweetness',
    category: 'Desserts'
  },
  {
    image: 'https://cf0316.s3.amazonaws.com/cookificom/menu/50095/79435e.jpg',
    title: 'Street Food Delicacies',
    category: 'Starters'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <ChefHat className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest">Our Visual Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            A Feast for <span className="text-emerald-600">The Eyes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Witness the artistry behind every dish we prepare with passion and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl shadow-2xl h-[400px] cursor-pointer ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="w-fit px-4 py-1.5 bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-emerald-500 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  );
}
