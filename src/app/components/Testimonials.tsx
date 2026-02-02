import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    event: 'Wedding Reception',
    rating: 5,
    text: "DevCaterers made our wedding reception absolutely perfect! The food was delicious, presentation was beautiful, and service was impeccable. All our guests were thoroughly impressed.",
    location: 'Bangalore'
  },
  {
    name: 'Rajesh Kumar',
    event: 'Corporate Gala',
    rating: 5,
    text: "Outstanding professionalism and food quality. We've been using them for 2 years and they never disappoint. The pure veg variety is amazing!",
    location: 'Whitefield'
  },
  {
    name: 'Anjali Reddy',
    event: 'Birthday Party',
    rating: 5,
    text: "Organized my daughter's 1st birthday. The team was cooperative and flexible. Everyone loved the live chaat counter. Thank you!",
    location: 'HSR Layout'
  }
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Voices of Our <br />
                <span className="text-emerald-500">Happy Guests</span>
              </h2>
              <div className="w-20 h-2 bg-emerald-500 rounded-full mb-8" />
              <p className="text-xl text-gray-400 font-medium mb-12">
                We take pride in creating moments that linger in the memory through exceptional culinary experiences.
              </p>
              
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[2rem] relative"
              >
                <Quote className="absolute top-10 right-10 w-20 h-20 text-emerald-500/20" />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic mb-10">
                  "{testimonials[index].text}"
                </p>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-2xl font-black">
                    {testimonials[index].name[0]}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[index].name}</h4>
                    <p className="text-emerald-500 font-medium">{testimonials[index].event}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}