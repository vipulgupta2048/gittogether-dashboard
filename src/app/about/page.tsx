'use client';

import { motion } from 'framer-motion';
import { GitBranch, Target, Globe, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <GitBranch className="h-16 w-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          What is GitTogether?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          GitTogether is a global community program by GitHub that brings developers, 
          designers, and tech enthusiasts together to learn, collaborate, and build amazing things.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-16"
      >
        <div className="text-center">
          <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            To create a platform for ethical open-source contributions, meaningful connections, 
            and knowledge sharing that aligns with GitHub&apos;s mission of building tools 
            that make collaboration easier and help people build better software together.
          </p>
        </div>
      </motion.div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Heart,
            title: 'Inclusive Community',
            description: 'We welcome developers, designers, product managers, students, and anyone passionate about technology, creating a safe space for all to learn and grow.'
          },
          {
            icon: Lightbulb,
            title: 'Diverse Learning',
            description: 'From AI governance to healthcare applications, we explore cutting-edge topics that go beyond conventional tech discussions.'
          },
          {
            icon: Globe,
            title: 'Global Impact',
            description: 'Part of GitHub\'s worldwide community program, we contribute to the global developer ecosystem while focusing on local needs.'
          }
        ].map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm text-center"
          >
            <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Journey Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Our Journey
        </h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <p>
            GitTogether Delhi-NCR began in June 2024 when Vipul Gupta met with GitHub&apos;s 
            MV Karan at GitHub Constellation to discuss launching this global community program 
            in Delhi. The vision was clear: create a platform for ethical open-source contributions 
            and meaningful developer connections.
          </p>
          <p>
            Our first event on July 6, 2024, at Microsoft Noida, brought together over 200+ attendees. 
            The energy was electrifying, with Yashraj Nayak and MV Karan kicking off what would become 
            an incredible journey of community building.
          </p>
          <p>
            What started as a vision has grown into a thriving community of 4,986+ members, hosting 
            11+ events with 1,400+ total attendees. We&apos;ve maintained a 4.7/5 rating with 133 reviews, 
            proving that our approach to community building resonates with developers across Delhi-NCR.
          </p>
        </div>
      </motion.div>

      {/* What Makes Us Different */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          What Makes GitTogether Delhi Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">
              Beyond Technical Talks
            </h3>
            <p className="text-blue-800 dark:text-blue-400">
              We host specialized sessions for diverse audiences - from product managers 
              and designers to founders and developers, ensuring every event caters to 
              a wide range of interests and expertise levels.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">
              First-Time Speaker Friendly
            </h3>
            <p className="text-green-800 dark:text-green-400">
              Out of 45+ speakers, many were first-time speakers. We believe in providing 
              a platform for everyone to share their expertise and learn something new, 
              fostering the next generation of tech leaders.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
