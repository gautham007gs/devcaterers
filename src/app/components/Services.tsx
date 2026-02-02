import { Heart, Cake, Briefcase, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Heart,
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our premium wedding catering services. Traditional menus and modern presentation.',
    image: 'https://images.unsplash.com/photo-1612872642947-931dc3bcb5ac?q=80&w=800',
    accent: 'emerald'
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Celebrate another year with delicious vegetarian cuisine. From kids parties to milestone celebrations.',
    image: 'https://images.unsplash.com/photo-1630237399805-9c950e5685b8?q=80&w=800',
    accent: 'yellow'
  },
  {
    icon: Briefcase,
    title: 'Corporate Catering',
    description: 'Professional catering for conferences and meetings. Timely service and consistent quality guaranteed.',
    image: 'https://images.unsplash.com/photo-1769638913840-2ca96d90e8a9?q=80&w=800',
    accent: 'amber'
  },
  {
    icon: Home,
    title: 'Traditional Functions',
    description: 'Authentic catering for housewarming and naming ceremonies. We respect and honor your customs.',
    image: 'https://images.unsplash.com/photo-1768341396286-9aed22a17eaf?q=80&w=800',
    accent: 'red'
  }
];

export function Services() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Our <span className="text-emerald-600">Premium Services</span>
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 font-medium">
            Elevating every occasion with culinary excellence and impeccable hospitality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 font-bold text-emerald-600 group/btn"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}