'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  country: string;
}

interface TestimonialsCarouselProps {
  locale: string;
}

export default function TestimonialsCarousel({ locale }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: locale === 'en'
        ? "Vismar Aqua delivered an exceptional RAS design that exceeded our expectations. Their expertise and attention to detail resulted in a highly efficient system."
        : "Vismar Aqua надала виняткову конструкцію РАС, яка перевершила наші очікування. Їхня експертиза та увага до деталей призвели до створення високоефективної системи.",
      author: "Dr. Michael Chen",
      title: "CEO",
      company: "AquaTech Solutions",
      country: locale === 'en' ? "United States" : "США"
    },
    {
      quote: locale === 'en'
        ? "The team's innovative approach to hybrid aquaculture systems helped us achieve remarkable production efficiency while minimizing environmental impact."
        : "Інноваційний підхід команди до гібридних систем аквакультури допоміг нам досягти чудової ефективності виробництва, мінімізуючи вплив на навколишнє середовище.",
      author: "Anna Kovalenko",
      title: locale === 'en' ? "Operations Director" : "Директор з операцій",
      company: "Black Sea Aquaculture",
      country: locale === 'en' ? "Ukraine" : "Україна"
    },
    {
      quote: locale === 'en'
        ? "Outstanding engineering and project management. Our sturgeon farm has been operating flawlessly since installation, delivering consistent ROI."
        : "Видатний інжиніринг та управління проєктами. Наша осетрова ферма працює бездоганно з моменту встановлення, забезпечуючи стабільний ROI.",
      author: "Ahmed Al-Rashid",
      title: locale === 'en' ? "Managing Partner" : "Керуючий партнер",
      company: "Gulf Aqua Farms",
      country: locale === 'en' ? "UAE" : "ОАЕ"
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'What Our Clients Say' : 'Що кажуть наші клієнти'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'en'
                ? 'Trusted by leading aquaculture companies worldwide'
                : 'Довіра провідних компаній аквакультури по всьому світу'}
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg mb-8 transition-all duration-500">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-16 h-16 text-blue-600 opacity-20" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="space-y-1">
                <div className="text-lg font-bold text-gray-900">
                  {currentTestimonial.author}
                </div>
                <div className="text-base font-medium text-gray-600">
                  {currentTestimonial.title}, {currentTestimonial.company}
                </div>
                <div className="text-sm text-gray-500">
                  {currentTestimonial.country}
                </div>
              </div>
            </blockquote>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={locale === 'en' ? 'Previous testimonial' : 'Попередній відгук'}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`${locale === 'en' ? 'Go to testimonial' : 'Перейти до відгуку'} ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={locale === 'en' ? 'Next testimonial' : 'Наступний відгук'}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
