import { Phone, MapPin, Clock, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <>
      <section id="contact" className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Host the <br />
              <span className="text-emerald-950/40">Perfect Event?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium opacity-90">
              Get a custom menu tailored to your preferences. Let's make your celebration unforgettable with premium vegetarian catering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-white text-emerald-600 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                Chat on WhatsApp
                <ArrowRight className="w-6 h-6" />
              </button>
              <a
                href="tel:+919148653943"
                className="w-full sm:w-auto bg-emerald-700/50 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-xl border border-white/20 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black mb-8">
                Dev Caterers<span className="text-emerald-500">.in</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                Bangalore's premier pure vegetarian catering service. We combine tradition with modern culinary excellence to make every event a masterpiece.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-white/5 hover:bg-emerald-600 transition-colors rounded-xl">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-emerald-500">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                {['Services', 'Gallery', 'Testimonials', 'Areas'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-emerald-500">Contact Us</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-emerald-500 shrink-0" />
                  <p className="text-gray-400 font-medium">Available across all areas of Bangalore</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-emerald-500 shrink-0" />
                  <p className="text-gray-400 font-medium">+91 91486 53943</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-emerald-500 shrink-0" />
                  <p className="text-gray-400 font-medium">Open 24/7 for Enquiries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 font-medium">© 2026 Dev Caterers.in. All rights reserved.</p>
            <div className="flex gap-8 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}