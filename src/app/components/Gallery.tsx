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

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#8B2E2E]/20 mb-4">
            <ChefHat className="w-4 h-4 text-[#8B2E2E]" />
            <span className="text-sm font-medium text-foreground">Our Menu Showcase</span>
          </div>
          
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Delicious <span className="text-[#8B2E2E]">Food Gallery</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A glimpse of our authentic vegetarian cuisine prepared with love and tradition
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-90 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#8B2E2E] text-white text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            This is just a taste of what we offer. Our menu includes hundreds of delicious vegetarian dishes!
          </p>
          <button
            onClick={() => window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20see%20the%20full%20menu', '_blank')}
            className="hidden sm:inline-flex bg-[#D97706] hover:bg-[#92400E] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold items-center gap-2"
          >
            <span>View Full Menu on WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
