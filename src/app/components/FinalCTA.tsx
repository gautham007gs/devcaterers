import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <>
      {/* Main CTA Section - compact professional layout */}
      <section id="contact" className="py-8 md:py-12 relative" style={{ backgroundColor: 'var(--saffron)' }}>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: text + CTAs */}
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Ready to Make Your Event Memorable?
              </h2>
              <p className="text-xs sm:text-sm md:text-base mb-4 max-w-xl opacity-95">
                Contact us for a tailored menu and a free quote. Professional service, hygienic kitchens, and on-time delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <div className="flex-1 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-md text-sm sm:text-lg font-semibold shadow-md h-10 sm:h-12"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="whitespace-nowrap">WhatsApp</span>
                  </button>
                  <a href="tel:+919148653943" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#8B2E2E] px-4 py-2 rounded-md text-sm sm:text-lg font-semibold shadow-sm h-10 sm:h-12">
                    <Phone className="w-4 h-4" />
                    <span className="whitespace-nowrap">Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: compact info (no duplicate Call) */}
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 md:gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                <MapPin className="w-4 h-4" />
                <div className="text-left text-xs">
                  <div className="opacity-80">Serving</div>
                  <div className="font-medium">All Bangalore</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                <Clock className="w-4 h-4" />
                <div className="text-left text-xs">
                  <div className="opacity-80">Available</div>
                  <div className="font-medium">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
                <h3 className="text-2xl font-extrabold mb-4">
                  <span className="text-[#A14444] font-extrabold">Dev Caterers</span>
                  <span className="text-[#16A34A] font-extrabold">.in</span>
                </h3>
              <p className="text-gray-300 mb-4">
                Bangalore's trusted pure vegetarian catering service for all occasions. Quality food, exceptional service, unforgettable experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wedding Catering</li>
                <li>Birthday Parties</li>
                <li>Corporate Events</li>
                <li>Traditional Functions</li>
                <li>Housewarming Ceremonies</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8B2E2E]" />
                      <a href="tel:+919148653943" className="hover:underline">+91 91486 53943</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8B2E2E]" />
                    <span>Serving All Bangalore</span>
                  </li>
                </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>© 2026 <span className="text-[#A14444] font-semibold mx-1">Dev Caterers</span><span className="text-[#16A34A] font-semibold">.in</span> - All rights reserved. Pure Veg Catering Services in Bangalore</p>
            <p className="text-sm mt-2">
              Keywords: Catering in Bangalore | Pure Veg Caterers | Wedding Catering | Corporate Catering | Birthday Party Catering
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
