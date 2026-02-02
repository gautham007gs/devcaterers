import { MapPin, CheckCircle2 } from 'lucide-react';

const areas = [
  'Koramangala',
  'Indiranagar',
  'Whitefield',
  'Electronic City',
  'HSR Layout',
  'BTM Layout',
  'Jayanagar',
  'Malleshwaram',
  'Rajajinagar',
  'JP Nagar',
  'Banashankari',
  'Basavanagudi',
  'Hebbal',
  'Yelahanka',
  'Marathahalli',
  'Bellandur',
  'Sarjapur Road',
  'Bannerghatta Road',
  'Kanakapura Road',
  'Mysore Road',
  'Tumkur Road',
  'Old Airport Road',
  'MG Road',
  'Brigade Road',
  'Richmond Town',
  'Frazer Town',
  'RT Nagar',
  'Sadashivanagar',
  'Vijayanagar',
  'Rajaji Nagar',
  'Yeshwanthpur',
  'Peenya',
  'Jalahalli',
  'Nagarbhavi',
  'Kengeri',
  'And all areas across Bangalore'
];

export function AreasWeServe() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <section id="areas" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEF3C7] rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#D97706]" />
            <span className="text-sm font-medium text-[#92400E]">All Bangalore</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Areas We <span className="text-[#D97706]">Serve</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We provide catering services across all areas of Bangalore. No matter where your event is, we'll be there!
          </p>
        </div>

        {/* Areas Grid */}
        <div className="rounded-2xl p-8 md:p-12 border border-[#D97706]/20" style={{ backgroundColor: 'var(--cream)' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-start gap-2 group"
              >
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base text-foreground group-hover:text-[#D97706] transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl" style={{ backgroundColor: 'var(--saffron)' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find Your Area?
          </h3>
          <p className="text-base md:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Don't worry! We cater to all areas across Bangalore. Contact us to check if we serve your location.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-[#D97706] hover:bg-[#FEF3C7] px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold inline-flex items-center gap-2 group"
          >
            <span>Check Your Area</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
