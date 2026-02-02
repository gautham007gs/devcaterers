import * as React from 'react';
import { Phone, Mail } from 'lucide-react';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919148653943?text=Hi,%20I%20would%20like%20to%20enquire%20about%20catering%20services', '_blank');
  };

  return (
    <header className="bg-white border-b border-[#8B2E2E]/15 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-[#8B2E2E]">
                Dev Caterers<span className="text-[#16A34A]">.in</span>
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Pure Veg Catering</p>
            </div>
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919148653943" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 91486 53943</span>
            </a>
            <a href="mailto:info@devcaterers.in" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@devcaterers.in</span>
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary pop focus-ring inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Open menu"
              aria-expanded={open}
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B2E2E]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#8B2E2E]"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 w-full sm:w-3/4 max-w-xs h-full bg-white shadow-xl p-6 z-60">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-[#8B2E2E]">Dev Caterers.in</h2>
                <p className="text-xs text-muted-foreground">Pure Veg Catering</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md bg-gray-100">✕</button>
            </div>

            <nav className="flex flex-col gap-2 border-t border-gray-100 pt-4">
              <a href="#services" onClick={() => { setOpen(false); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-medium py-3 border-b border-transparent hover:border-b hover:border-[#8B2E2E]/10">Services</a>
              <a href="#gallery" onClick={() => { setOpen(false); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-medium py-3 border-b border-transparent hover:border-b hover:border-[#8B2E2E]/10">Gallery</a>
              <a href="#areas" onClick={() => { setOpen(false); document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-medium py-3 border-b border-transparent hover:border-b hover:border-[#8B2E2E]/10">Areas</a>
              <a href="#testimonials" onClick={() => { setOpen(false); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-medium py-3 border-b border-transparent hover:border-b hover:border-[#8B2E2E]/10">Testimonials</a>
              <a href="#contact" onClick={() => { setOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-medium py-3 border-b border-transparent hover:border-b hover:border-[#8B2E2E]/10">Contact</a>
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+919148653943" className="btn-ghost pop focus-ring inline-flex items-center justify-center gap-2">Call Us</a>
              <button onClick={handleWhatsAppClick} className="btn-primary pop focus-ring inline-flex items-center justify-center gap-2">WhatsApp</button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
