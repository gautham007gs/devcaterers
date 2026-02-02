import { Star, Quote } from 'lucide-react';
import * as React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    event: 'Wedding Reception',
    rating: 5,
    text: "DevCaterers made our wedding reception absolutely perfect! The food was delicious, presentation was beautiful, and service was impeccable. All our 800 guests were thoroughly impressed. Highly recommended!",
    location: 'Koramangala, Bangalore'
  },
  {
    name: 'Rajesh Kumar',
    event: 'Corporate Event',
    rating: 5,
    text: "We've been using DevCaterers for our company events for the past 2 years. Their professionalism, punctuality, and food quality are outstanding. The variety in their vegetarian menu is amazing!",
    location: 'Whitefield, Bangalore'
  },
  {
    name: 'Anjali Reddy',
    event: 'Birthday Party',
    rating: 5,
    text: "Organized my daughter's 1st birthday with DevCaterers. The team was so cooperative and flexible with our requests. Food was fresh and tasty. Everyone loved the chaat counter. Thank you!",
    location: 'HSR Layout, Bangalore'
  },
  {
    name: 'Venkat Iyer',
    event: 'Housewarming',
    rating: 5,
    text: "Excellent service for our housewarming ceremony! They understood our traditional requirements perfectly and delivered authentic South Indian food. The entire setup was handled professionally.",
    location: 'Jayanagar, Bangalore'
  },
  {
    name: 'Meera Patel',
    event: 'Engagement Ceremony',
    rating: 5,
    text: "From menu planning to execution, everything was perfect! The food quality was top-notch and the presentation was elegant. Our guests are still talking about how delicious everything was.",
    location: 'Indiranagar, Bangalore'
  },
  {
    name: 'Arun Krishnan',
    event: 'Conference Catering',
    rating: 5,
    text: "DevCaterers has been our go-to choice for all conferences. They handle large gatherings with ease, maintain food quality throughout, and their staff is well-trained and courteous.",
    location: 'Electronic City, Bangalore'
  }
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-[#D97706]">Customers Say</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers have to say about us
          </p>
        </div>

        {/* Mobile: single card view (no horizontal scroll) */}
        <div className="sm:hidden px-4">
          <div className="flex items-center justify-between mb-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              disabled={index === 0}
            >
              ‹
            </button>

            <div className="text-sm text-muted-foreground">{index + 1} / {testimonials.length}</div>

            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => Math.min(testimonials.length - 1, i + 1))}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              disabled={index === testimonials.length - 1}
            >
              ›
            </button>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-2xl p-4 shadow-md border border-[#8B2E2E]/10 overflow-visible">
            <div className="flex gap-2 mb-3">
              {[...Array(testimonials[index].rating)].map((_, k) => (
                <Star key={k} className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-3 break-words whitespace-normal">"{testimonials[index].text}"</p>

            <div className="pt-2 border-t border-[#8B2E2E]/20">
              <p className="font-semibold text-foreground">{testimonials[index].name}</p>
              <p className="text-xs text-[#8B2E2E]">{testimonials[index].event}</p>
            </div>
          </div>
        </div>

          {/* Desktop: grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#8B2E2E]/10 relative"
              >
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-[#8B2E2E]" />
                </div>

                <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FBBF24] fill-[#FBBF24]" />
                    ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-base whitespace-normal break-words">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-[#8B2E2E]/20">
                  <p className="font-bold text-foreground mb-1">{testimonial.name}</p>
                  <p className="text-sm text-[#8B2E2E] mb-1">{testimonial.event}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

        {/* Trust Badge */}
        <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-6 py-4 rounded-2xl border border-[#D97706]/20" style={{ backgroundColor: 'var(--cream)' }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#FBBF24] fill-[#FBBF24]" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-foreground">4.9 out of 5</p>
              <p className="text-sm text-muted-foreground">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
