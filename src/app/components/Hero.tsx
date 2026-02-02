import { ArrowRight, Star, Users, Award, Leaf } from 'lucide-react';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <section className="relative">
      {/* Full-width banner image at top with overlay and centered content */}
      <div className="relative w-full h-[70vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMs7gqaJkKCGwWLVzZnFjVpiHEYFyhBVt9nnx05=s680-w680-h510-rw"
          alt="Delicious pure-veg catering spread"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transform -translate-y-8 md:-translate-y-12"
        />

        {/* Dark gradient for contrast to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/25 pointer-events-none" />

        {/* Main overlay content */}
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full lg:w-1/2 text-white drop-shadow-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full shadow-sm border border-white/10 mb-4">
              <Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
              <span className="text-sm font-medium">Bangalore's Trusted Caterers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Pure Veg Catering for</span>
              <span className="block text-[#FEEBC8]">Every Occasion</span>
              <span className="block text-[#A7F3D0]">in Bangalore</span>
            </h1>

            <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90 max-w-xl">
              Experience authentic vegetarian cuisine with exceptional quality, hygiene, and taste. From intimate gatherings to grand celebrations, we cater to all events across Bangalore.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="group bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg flex items-center gap-3 w-max"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-semibold">Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+919148653943"
                className="bg-white/90 text-foreground border border-white/20 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-max flex items-center justify-center"
              >
                <span className="font-semibold">Call Now</span>
              </a>
            </div>

            {/* Trust Indicators inside overlay */}
            <div className="mt-6 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#16A34A]/20 rounded-lg">
                  <Users className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">5000+</p>
                  <p className="text-xs text-white/90">Events Catered</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#D97706]/20 rounded-lg">
                  <Star className="w-5 h-5 text-[#FBBF24] fill-[#FBBF24]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">4.9/5</p>
                  <p className="text-xs text-white/90">Customer Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#CA8A04]/20 rounded-lg">
                  <Award className="w-5 h-5 text-[#CA8A04]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">15+ Years</p>
                  <p className="text-xs text-white/90">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative dot pattern (keeps the original visual accent) */}
        <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20 hidden md:block">
          <div className="grid grid-cols-8 gap-2">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#D97706] rounded-full" />
            ))}
          </div>
        </div>

        {/* Floating professional badge stays visible on image */}
        <div className="absolute bottom-6 right-6 bg-white/95 text-foreground rounded-full px-4 py-2 shadow-md border border-gray-100 flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#16A34A]">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-xs text-muted-foreground">100% Pure Veg</p>
            <p className="text-sm font-semibold text-[#16A34A]">Hygienic & Trusted</p>
          </div>
        </div>
      </div>

      {/* Small spacer and optional continuation of page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        {/* You can keep additional info or sections below the banner */}
      </div>
    </section>
  );
}
