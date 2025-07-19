'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Lightbulb, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    icon: Award,
    title: 'Community Excellence',
    description: '4.7/5 rating with 133 reviews from community members',
    color: 'yellow'
  },
  {
    icon: Heart,
    title: 'Inclusive Environment',
    description: 'Safe space for developers, designers, managers, and students',
    color: 'red'
  },
  {
    icon: Lightbulb,
    title: 'Diverse Learning',
    description: 'From AI governance to healthcare tech, covering cutting-edge topics',
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'GitHub Mission Alignment',
    description: 'Building tools for better collaboration and software development',
    color: 'green'
  }
];

const achievements = [
  '123 Talk Proposals Received',
  '45+ Speakers (Many First-Time)',
  '1,400+ Total Attendees',
  'Featured at GitHub Universe',
  'Partnership with Microsoft',
  'Community Spotlight Sessions'
];

export function CommunityHighlights() {
  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400',
      red: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400',
      blue: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400',
      green: 'bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Community Highlights
      </h2>

      <div className="space-y-6">
        {/* Key Values */}
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start space-x-3"
            >
              <div className={`p-2 rounded-lg border ${getColorClasses(highlight.color)}`}>
                <highlight.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Key Achievements
          </h3>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Blog Post */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Community Impact Report
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Read Vipul&apos;s comprehensive blog post about GitTogether Delhi&apos;s incredible 
                journey from 0 to 4,500+ contributors in one year.
              </p>
              <Link
                href="https://mixster.dev/2025/07/11/github-gittogether-delhi-meetup/"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
              >
                Read Full Story
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Join Our Community
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Be part of Delhi&apos;s most vibrant developer community
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Join Now
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
