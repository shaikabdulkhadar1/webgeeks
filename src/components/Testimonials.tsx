import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "DigitalCraft transformed our online presence with their innovative approach and attention to detail. The results exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc."
  },
  {
    quote: "Working with DigitalCraft was a game-changer for our business. Their team's expertise and dedication made the entire process seamless.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "Growth Solutions"
  },
  {
    quote: "The team's creative solutions and technical expertise helped us achieve our digital transformation goals ahead of schedule.",
    author: "Emma Rodriguez",
    role: "Product Manager",
    company: "Innovation Labs"
  },
  {
    quote: "Their attention to detail and commitment to excellence made our project a huge success.",
    author: "David Wilson",
    role: "CTO",
    company: "Future Systems"
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What our clients say about working with us</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;