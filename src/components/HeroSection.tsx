'use client';

import { motion } from 'framer-motion';
import { GitBranch, Users, Calendar, Star } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              GitTogether
              <span className="block text-yellow-300">Delhi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A thriving developer community that has grown from 0 to 4,986+ members in just one year
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">4,986+</div>
                <div className="text-blue-200 text-sm">Members</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">11+</div>
                <div className="text-blue-200 text-sm">Events</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <GitBranch className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">1,400+</div>
                <div className="text-blue-200 text-sm">Attendees</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">4.7/5</div>
                <div className="text-blue-200 text-sm">Rating</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
                    alt="GitTogether community meetup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                    alt="Developer workshop session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
                    alt="Community networking"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop"
                    alt="Large community gathering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
