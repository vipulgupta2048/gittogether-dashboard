'use client';

import { motion } from 'framer-motion';
import { Users, Calendar, MessageCircle, Award } from 'lucide-react';

export function CommunityStats() {
  const stats = [
    {
      icon: Users,
      value: '4,986',
      label: 'Community Members',
      change: '+1,200 this quarter',
      color: 'blue'
    },
    {
      icon: Calendar,
      value: '11',
      label: 'Events Hosted',
      change: 'Since July 2024',
      color: 'green'
    },
    {
      icon: MessageCircle,
      value: '123',
      label: 'Talk Proposals',
      change: '45+ speakers',
      color: 'purple'
    },
    {
      icon: Award,
      value: '4.7/5',
      label: 'Community Rating',
      change: '133 reviews',
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg border ${getColorClasses(stat.color)}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {stat.change}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
