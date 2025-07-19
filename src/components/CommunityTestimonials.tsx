'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Vishal Kumar Singh',
    role: 'Software Developer',
    rating: 5,
    comment: 'Amazing community with great learning opportunities. The organizers really care about providing value to attendees.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    event: 'GitTogether Delhi NCR - July 2025'
  },
  {
    id: 2,
    name: 'Akshat Kumar',
    role: 'Frontend Developer',
    rating: 5,
    comment: 'Incredible networking opportunities and top-notch speakers. Every event leaves me inspired and motivated.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    event: 'GitTogether Delhi NCR - June 2025'
  },
  {
    id: 3,
    name: 'Vivek',
    role: 'Full Stack Developer',
    rating: 5,
    comment: 'The diversity of topics and quality of presentations is outstanding. This community has genuinely helped my career growth.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    event: 'GitTogether Delhi NCR - June 2025'
  }
];

export function CommunityTestimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Community Voices
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">4.7</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">Based on 133 community reviews</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 relative"
          >
            <Quote className="h-8 w-8 text-blue-500 mb-4" />
            
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
              &quot;{testimonial.comment}&quot;
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  {testimonial.event}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Join our community and see why developers love GitTogether Delhi
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Join Community
        </button>
      </div>
    </motion.div>
  );
}
