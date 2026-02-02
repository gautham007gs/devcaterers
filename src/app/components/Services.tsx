import { Heart, Cake, Briefcase, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our premium wedding catering services. Traditional menus, modern presentation, and flawless execution.',
    image: 'https://images.unsplash.com/photo-1612872642947-931dc3bcb5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2F0ZXJpbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3Njk5NDAxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'bg-[#8B2E2E]',
    lightColor: 'bg-[#FEF3C7]'
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Celebrate another year with delicious vegetarian cuisine. From kids parties to milestone celebrations, we make every birthday memorable.',
    image: 'https://images.unsplash.com/photo-1630237399805-9c950e5685b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBmb29kfGVufDF8fHx8MTc2OTk0MDE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'bg-[#16A34A]',
    lightColor: 'bg-green-50'
  },
  {
    icon: Briefcase,
    title: 'Corporate Catering',
    description: 'Professional catering for conferences, seminars, team meetings, and corporate events. Timely service and consistent quality guaranteed.',
    image: 'https://images.unsplash.com/photo-1769638913840-2ca96d90e8a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNhdGVyaW5nJTIwYnVmZmV0fGVufDF8fHx8MTc2OTk0MDE3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'bg-[#CA8A04]',
    lightColor: 'bg-amber-50'
  },
  {
    icon: Home,
    title: 'Traditional Functions',
    description: 'Authentic catering for housewarming, naming ceremonies, engagements, and all traditional events. We respect and honor your customs.',
    image: 'https://images.unsplash.com/photo-1768341396286-9aed22a17eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNlcmVtb255JTIwaG91c2V3YXJtaW5nfGVufDF8fHx8MTc2OTk0MDE3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'bg-[#DC2626]',
    lightColor: 'bg-red-50'
  }
];

export function Services() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-[#D97706]">Catering Services</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            From intimate gatherings to grand celebrations, we bring authentic vegetarian cuisine to every occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 ${service.color} p-3 rounded-xl shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className={`${service.lightColor} hover:${service.color} hover:text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group/btn`}
                  >
                    <span className="font-medium">Get Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
