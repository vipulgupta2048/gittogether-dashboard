'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, MapPin, Calendar, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const organizers = [
  {
    name: 'Vipul Gupta',
    role: 'Community Lead & Founder',
    bio: 'Leading GitTogether Delhi-NCR since inception, passionate about ethical open-source contributions and community building. GSoC mentor and open-source advocate.',
    location: 'Delhi, India',
    experience: '5+ years in DevRel',
    achievements: [
      'Grew community from 0 to 4,986+ members',
      'Organized 11+ successful events',
      'Maintained 4.7/5 community rating',
      'GitHub Star Program speaker'
    ],
    social: {
      twitter: 'vipulgupta2048',
      linkedin: 'vipulgupta2048',
      github: 'vipulgupta2048'
    },
    quote: "GitTogether exists because of community enthusiasm and participation. This first year has been about building from zero to one.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Shivay Lamba',
    role: 'Co-Organizer',
    bio: 'Passionate developer and community builder, helping shape the direction of GitTogether Delhi with focus on inclusive tech education and mentorship.',
    location: 'Delhi, India',
    experience: '4+ years in Tech',
    achievements: [
      'Core contributor to event planning',
      'Mentored 50+ developers',
      'Speaker at multiple conferences',
      'Open-source project maintainer'
    ],
    social: {
      twitter: 'shivaylamba',
      linkedin: 'shivay-lamba',
      github: 'shivaylamba'
    },
    quote: "Building communities is about creating spaces where everyone can learn, grow, and contribute meaningfully.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Chhavi Garg',
    role: 'Co-Organizer',
    bio: 'Dedicated to fostering diversity and inclusion in tech, bringing fresh perspectives to community events and ensuring everyone feels welcome.',
    location: 'Delhi, India',
    experience: '3+ years in Community Building',
    achievements: [
      'Led diversity & inclusion initiatives',
      'Organized workshops for beginners',
      'Community outreach coordinator',
      'First-time speaker mentor'
    ],
    social: {
      twitter: 'chhavigarg',
      linkedin: 'chhavi-garg',
      github: 'chhavigarg'
    },
    quote: "Every person in our community has unique value to add. Our job is to create the right environment for them to shine.",
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
  }
];

export default function OrganizersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Meet Our Organizers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          The passionate individuals behind GitTogether Delhi&apos;s incredible journey 
          from 0 to 4,986+ members in just one year.
        </p>
      </motion.div>

      {/* Organizers Grid */}
      <div className="space-y-12">
        {organizers.map((organizer, index) => (
          <motion.div
            key={organizer.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } flex flex-col lg:flex gap-8`}
          >
            {/* Profile Image and Basic Info */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="w-48 h-48 rounded-2xl mx-auto lg:mx-0 mb-6 overflow-hidden relative shadow-lg">
                <Image
                  src={organizer.image}
                  alt={`${organizer.name} - ${organizer.role}`}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {organizer.name}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {organizer.role}
              </p>
              
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  {organizer.location}
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  {organizer.experience}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <Link 
                  href={`https://twitter.com/${organizer.social.twitter}`}
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </Link>
                <Link 
                  href={`https://linkedin.com/in/${organizer.social.linkedin}`}
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </Link>
                <Link 
                  href={`https://github.com/${organizer.social.github}`}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </Link>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="lg:w-2/3 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <p className="text-lg italic text-blue-900 dark:text-blue-300">
                  &quot;{organizer.quote}&quot;
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  About
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {organizer.bio}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {organizer.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Appreciation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Organizing Team Excellence
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Throughout this year, our organizing team has faced numerous challenges - from finding 
          exceptional speakers to securing venues and coordinating logistics. Yet, these challenges 
          only strengthened our resolve to build something meaningful, pushing us to refine our 
          approach and deliver impactful experiences for our community.
        </p>
      </motion.div>
    </div>
  );
}
