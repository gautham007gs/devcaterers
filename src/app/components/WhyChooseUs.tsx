import { Leaf, Clock, Award, Users, Utensils, ShieldCheck, ThumbsUp, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Pure Veg',
    description: 'Completely vegetarian kitchen with no cross-contamination. We respect your dietary preferences and beliefs.',
    color: 'text-[#16A34A]',
    bgColor: 'bg-green-50'
  },
  {
    icon: Sparkles,
    title: 'Fresh Ingredients',
    description: 'Only the finest and freshest ingredients sourced daily. Quality you can taste in every bite.',
    color: 'text-[#8B2E2E]',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'Punctual setup and service delivery. We understand the importance of timing for your events.',
    color: 'text-[#CA8A04]',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: '15+ years of catering experience with skilled chefs and professional service staff.',
    color: 'text-[#DC2626]',
    bgColor: 'bg-red-50'
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene Standards',
    description: 'Strict food safety protocols and hygiene practices. Your health and safety are our priority.',
    color: 'text-[#7C3AED]',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Utensils,
    title: 'Customized Menus',
    description: 'Flexible menu options tailored to your preferences, dietary needs, and cultural requirements.',
    color: 'text-[#DB2777]',
    bgColor: 'bg-pink-50'
  },
  {
    icon: ThumbsUp,
    title: 'Affordable Pricing',
    description: 'Premium quality at competitive prices. Transparent pricing with no hidden charges.',
    color: 'text-[#0891B2]',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: Users,
    title: 'Any Guest Count',
    description: 'From intimate gatherings of 50 to grand celebrations of 5000+. We scale to your needs.',
    color: 'text-[#EA580C]',
    bgColor: 'bg-orange-50'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-[#D97706]">DevCaterers</span>?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We're committed to delivering exceptional catering experiences with quality, taste, and professionalism
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${index >= 4 ? 'hidden sm:block' : ''} group bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8B2E2E]/30 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 md:mt-16 rounded-2xl p-6 md:p-12 text-center text-white shadow-xl" style={{ backgroundColor: 'var(--saffron)' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by 5000+ Happy Customers
            </h3>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who have made their events memorable with our catering services
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div>
                <p className="text-3xl md:text-4xl font-bold">5000+</p>
                <p className="text-sm md:text-base opacity-90">Events Catered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">4.9/5</p>
                <p className="text-sm md:text-base opacity-90">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">15+</p>
                <p className="text-sm md:text-base opacity-90">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">100%</p>
                <p className="text-sm md:text-base opacity-90">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
