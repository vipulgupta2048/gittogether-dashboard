'use client';

import { motion } from 'framer-motion';
import { Target, GitBranch, Heart, Globe, Users, Lightbulb, Award, TrendingUp } from 'lucide-react';

export default function MissionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Aligning GitTogether Delhi with GitHub&apos;s global mission while building 
          a platform for ethical open-source contributions and meaningful developer connections.
        </p>
      </motion.div>

      {/* GitHub Mission Alignment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 mb-16"
      >
        <div className="text-center">
          <GitBranch className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">
            Aligned with GitHub&apos;s Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            &quot;To build tools that make collaboration easier and help people build better software together.&quot;
          </p>
          <p className="text-lg text-blue-200 mt-4 max-w-3xl mx-auto">
            Our meetups have created a microcosm of this mission, fostering collaboration 
            and helping developers build better software through knowledge sharing and community support.
          </p>
        </div>
      </motion.div>

      {/* Core Mission Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[
          {
            icon: Heart,
            title: 'Ethical Open-Source Contributions',
            description: 'Promoting responsible development practices and encouraging contributions that benefit the global developer community.',
            color: 'red'
          },
          {
            icon: Users,
            title: 'Inclusive Community Building',
            description: 'Creating safe spaces for developers, designers, managers, and students of all experience levels to learn and grow together.',
            color: 'blue'
          },
          {
            icon: Lightbulb,
            title: 'Knowledge Sharing & Innovation',
            description: 'Facilitating learning through diverse topics from AI governance to healthcare tech, pushing beyond conventional discussions.',
            color: 'yellow'
          },
          {
            icon: Globe,
            title: 'Local Impact, Global Reach',
            description: 'Contributing to the worldwide developer ecosystem while addressing the specific needs of the Delhi-NCR tech community.',
            color: 'green'
          }
        ].map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className={`p-3 rounded-lg w-fit mb-4 ${
              area.color === 'red' ? 'bg-red-50 dark:bg-red-900/20' :
              area.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20' :
              area.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
              'bg-green-50 dark:bg-green-900/20'
            }`}>
              <area.icon className={`h-8 w-8 ${
                area.color === 'red' ? 'text-red-600 dark:text-red-400' :
                area.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                area.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                'text-green-600 dark:text-green-400'
              }`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {area.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mission in Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Mission in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Quality Over Quantity
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Maintaining a 4.7/5 rating with 133 reviews by focusing on meaningful, 
              high-quality events that truly serve our community.
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              First-Time Speaker Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Out of 45+ speakers, many were first-time speakers, demonstrating our 
              commitment to empowering new voices in tech.
            </p>
          </div>
          <div className="text-center">
            <Lightbulb className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Diverse Learning Topics
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              From AI governance to healthcare applications, we explore cutting-edge 
              topics that expand horizons beyond conventional tech discussions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Vision for the Future */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-16"
      >
        <div className="text-center">
          <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Vision: Scale with Intention
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg">
              Looking forward, our vision is to scale GitTogether Delhi-NCR not just bigger, 
              but more focused. We aim to create specialized events that are interactive 
              and demo-oriented.
            </p>
            <p className="text-lg">
              We plan to collaborate with other communities to share our mission with other 
              professionals and continue broadening what it means to attend a GitTogether meetup.
            </p>
            <p className="text-lg font-semibold text-purple-700 dark:text-purple-300">
              Most importantly, we want to ensure that every participant walks away with 
              knowledge, connections, and inspiration.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Guiding Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Safe Space', desc: 'Everyone leaves having learned something valuable' },
            { title: 'Inclusive Growth', desc: 'Welcoming students, professionals, and managers' },
            { title: 'Quality Focus', desc: 'Meaningful connections over large numbers' },
            { title: 'Future Ready', desc: 'Preparing for tomorrows tech challenges' }
          ].map((principle) => (
            <div key={principle.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
