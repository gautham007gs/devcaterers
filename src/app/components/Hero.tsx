import { ArrowRight, Star, Users, Award, Leaf } from 'lucide-react';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <section className="relative pt-24 md:pt-32 min-h-[90vh] flex flex-col">
      {/* Full-width banner image at top with overlay and centered content */}
      <div className="relative w-full flex-grow min-h-[75vh] md:min-h-[85vh] overflow-hidden flex items-center">
        <img
          src="/src/assets/hero-bg.jpg"
          alt="Delicious professional catering spread"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Stronger overlay for maximum text readability */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />

        {/* Main overlay content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex items-center">
          <div className="w-full lg:w-2/3 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold tracking-wide uppercase">Bangalore's Premier Catering Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <span className="block mb-2 text-white">Exquisite Pure Veg</span>
              <span className="block text-yellow-400 drop-shadow-sm">Catering Excellence</span>
              <span className="block text-emerald-400">In Bangalore</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl font-medium leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Elevate your special moments with authentic vegetarian delicacies, impeccable service, and unmatched quality. We bring the finest culinary traditions to your table.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <button
                onClick={handleWhatsAppClick}
                className="group bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-bold text-lg">Enquire on WhatsApp</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+919148653943"
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto font-bold text-lg transform hover:-translate-y-1"
              >
                Call Now
              </a>
            </div>

            {/* Premium Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/20 pt-8 animate-in fade-in zoom-in duration-1000">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/20 backdrop-blur-sm rounded-xl">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">5000+</p>
                  <p className="text-sm text-gray-300 font-medium">Events Catered</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-500/20 backdrop-blur-sm rounded-xl">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.9/5</p>
                  <p className="text-sm text-gray-300 font-medium">Customer Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-600/20 backdrop-blur-sm rounded-xl">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">15+ Years</p>
                  <p className="text-sm text-gray-300 font-medium">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quality Badge */}
        <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-md text-foreground rounded-2xl px-6 py-4 shadow-2xl border border-white/50 flex items-center gap-4 transform hover:scale-105 transition-transform hidden lg:flex">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 shadow-inner">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">100% Pure Veg</p>
            <p className="text-lg font-bold text-gray-900 leading-none mt-1">Hygienic & Trusted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
